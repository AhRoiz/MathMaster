import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Loader2, Trash2, Image as ImageIcon, Calculator } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export default function ChatModal({ isOpen, onClose, openCalculator }) {
  // 1. STATE CHAT HISTORY (Load dari LocalStorage saat pertama buka)
  const [chatMessages, setChatMessages] = useState(() => {
    const savedChat = localStorage.getItem('mathmaster_chat_history');
    return savedChat ? JSON.parse(savedChat) : [
      { role: 'ai', text: 'Halo! Saya AI MathMaster. Ada soal matematika yang bikin bingung? Tanyakan saja di sini!' }
    ];
  });

  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 2. STATE COOLDOWN (Untuk Rate Limiting)
  const [isCoolingDown, setIsCoolingDown] = useState(false);

  // 3. STATE IMAGE UPLOAD
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const chatEndRef = useRef(null);
  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  // EFFECT: Auto-scroll ke bawah setiap ada pesan baru
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isOpen]);

  // EFFECT: Auto-save chat ke LocalStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem('mathmaster_chat_history', JSON.stringify(chatMessages));
  }, [chatMessages]);

  // FUNGSI: Hapus Chat (Reset)
  const handleClearChat = () => {
    if (window.confirm("Hapus semua riwayat chat?")) {
      const defaultMsg = [{ role: 'ai', text: 'Halo! Saya AI MathMaster. Ada soal matematika yang bikin bingung? Tanyakan saja di sini!' }];
      setChatMessages(defaultMsg);
      localStorage.removeItem('mathmaster_chat_history');
    }
  };

  // FUNGSI: Handle Image Upload
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // FUNGSI: Remove Selected Image
  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };


  // FUNGSI: Kirim Pesan
  const handleSendMessage = async (e) => {
    e.preventDefault();

    // Cek Spam: Jangan kirim jika input kosong (dan tidak ada gambar), loading, atau sedang cooldown
    if ((!inputMessage.trim() && !selectedImage) || isLoading || isCoolingDown) return;

    if (!GEMINI_API_KEY) {
      alert("ERROR: API Key tidak ditemukan! Pastikan file .env sudah benar.");
      return;
    }

    const newUserMsg = {
      role: 'user',
      text: inputMessage || '(Gambar soal)',
      image: imagePreview // Store image preview for display
    };
    setChatMessages(prev => [...prev, newUserMsg]);

    const currentMessage = inputMessage;
    const currentImage = selectedImage;

    setInputMessage("");
    handleRemoveImage();
    setIsLoading(true);

    try {
      // Prepare API request parts
      const parts = [];

      // Add text part
      parts.push({
        text: `
        Kamu adalah Tutor Matematika yang sabar dan seru untuk siswa sekolah (SD-SMA).
        Tugasmu membimbing siswa, BUKAN sekadar memberi kunci jawaban.

        ATURAN MENJAWAB:
        1. Jangan langsung berikan hasil akhir (kecuali ditanya definisi).
        2. Tuntun siswa langkah demi langkah (Step-by-step thinking).
        3. Gunakan Bahasa Indonesia yang gaul tapi sopan, seru, dan menyemangati (seperti kakak mengajar adiknya).
        4. Jika siswa bertanya soal simple (misal: 1+1), jelaskan konsepnya sedikit.
        5. Sesuaikan penulisan jawaban sesuai pengertian siswa.
        
        ATURAN FORMAT MATEMATIKA (WAJIB):
        - Jika menulis rumus, WAJIB gunakan format LaTeX.
        - Gunakan tanda $ untuk rumus inline (contoh: $x^2$).
        - Gunakan tanda $$ untuk rumus baris baru (contoh: $$\\frac{1}{2}$$).
        - JANGAN gunakan backslash sebelum tanda pangkat (^) atau underscore (_).

        ${currentImage ? 'Siswa mengirim gambar soal matematika. Analisis gambar tersebut dan bantu siswa memahami cara menyelesaikannya.' : ''}
        ${currentMessage ? `Pertanyaan Siswa: "${currentMessage}"` : ''}
      ` });

      // Add image part if exists
      if (currentImage) {
        const base64Image = await convertToBase64(currentImage);
        parts.push({
          inline_data: {
            mime_type: currentImage.type,
            data: base64Image
          }
        });
      }

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts }]
        })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(`Google menolak (${data.error.code}): ${data.error.message}`);
      }

      if (!data.candidates || !data.candidates[0].content) {
        throw new Error("Tidak ada jawaban dari AI. Coba pertanyaan lain.");
      }

      const aiResponseText = data.candidates[0].content.parts[0].text;
      setChatMessages(prev => [...prev, { role: 'ai', text: aiResponseText, hasImage: !!currentImage }]);

    } catch (error) {
      console.error("Chat Error:", error);
      setChatMessages(prev => [...prev, { role: 'ai', text: `Error: ${error.message}. Tunggu sebentar lalu coba lagi.` }]);
    } finally {
      setIsLoading(false);

      // 3. AKTIFKAN COOLDOWN (Mencegah Spam)
      setIsCoolingDown(true);
      setTimeout(() => {
        setIsCoolingDown(false);
      }, 3000); // Tombol mati selama 3 detik
    }
  };

  // Helper function to convert image to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = error => reject(error);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" onClick={onClose}></div>

      {/* CONTAINER UTAMA: Tinggi dipaku 600px */}
      <div
        className="relative w-full max-w-lg bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
        style={{ height: '600px' }}
      >

        {/* 1. HEADER (Dipaku di Atas) */}
        <div
          className="absolute top-0 left-0 right-0 z-20 px-6 py-4 border-b border-slate-700 flex justify-between items-center bg-slate-900"
          style={{ height: '70px' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400"><Bot className="w-6 h-6" /></div>
            <div><h3 className="text-lg font-bold text-white">AI Tutor</h3><p className="text-slate-400 text-xs">Powered by Gemini</p></div>
          </div>

          <div className="flex gap-2">
            {/* Tombol Hapus Chat */}
            <button onClick={handleClearChat} className="p-2 hover:bg-red-500/20 text-slate-400 hover:text-red-400 rounded-full transition-colors" title="Hapus Riwayat Chat">
              <Trash2 className="w-5 h-5" />
            </button>
            {/* Tombol Close */}
            <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
          </div>
        </div>

        {/* 2. AREA CHAT (Dipaku di Tengah) */}
        <div
          className="absolute left-0 right-0 z-10 bg-slate-800/50 overflow-y-auto p-6 space-y-4"
          style={{
            top: '70px',
            bottom: '80px'
          }}
        >
          {chatMessages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl text-sm leading-relaxed overflow-hidden ${msg.role === 'user' ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-slate-700 text-slate-200 rounded-bl-none'}`}>
                {/* Show image if exists (user messages) */}
                {msg.image && (
                  <div className="p-2">
                    <img src={msg.image} alt="Uploaded question" className="rounded-lg max-w-full h-auto" />
                  </div>
                )}

                <div className="p-4">
                  <ReactMarkdown
                    children={msg.text}
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                      p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />
                    }}
                  />
                </div>

                {/* Show calculator button for AI responses that analyzed an image */}
                {msg.role === 'ai' && msg.hasImage && openCalculator && (
                  <div className="px-4 pb-4">
                    <button
                      onClick={() => {
                        openCalculator();
                        onClose();
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-2 px-4 rounded-lg transition-all hover:scale-105"
                    >
                      <Calculator className="w-4 h-4" />
                      Buka Kalkulator
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (<div className="flex justify-start"><div className="bg-slate-700 p-4 rounded-2xl rounded-bl-none flex items-center gap-2 text-slate-400 text-sm"><Loader2 className="w-4 h-4 animate-spin" /> Sedang berpikir...</div></div>)}
          <div ref={chatEndRef}></div>
        </div>

        {/* 3. FOOTER / INPUT (Dipaku di Bawah) */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 bg-slate-900 border-t border-slate-700 p-4"
          style={{ height: imagePreview ? '140px' : '80px' }}
        >
          {/* Image Preview */}
          {imagePreview && (
            <div className="mb-2 relative inline-block">
              <img src={imagePreview} alt="Preview" className="h-12 rounded border border-slate-600" />
              <button
                onClick={handleRemoveImage}
                className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}

          <form onSubmit={handleSendMessage} className="flex gap-3 h-12 items-center">
            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
            />

            {/* Image upload button */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading || isCoolingDown}
              className="h-full px-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors disabled:opacity-50"
              title="Upload gambar soal"
            >
              <ImageIcon className="w-5 h-5 text-slate-400" />
            </button>

            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={isCoolingDown ? "Tunggu sebentar..." : "Ketik soal atau upload gambar..."}
              disabled={isLoading || isCoolingDown}
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none h-full disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={isLoading || (!inputMessage.trim() && !selectedImage) || isCoolingDown}
              className={`h-full px-4 rounded-xl font-bold transition-colors flex items-center justify-center
                ${isLoading || isCoolingDown
                  ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-slate-900'}
              `}
            >
              {isCoolingDown ? <span className="text-xs font-bold">...</span> : <Send className="w-5 h-5" />}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}