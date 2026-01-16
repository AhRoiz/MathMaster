import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export default function ChatModal({ isOpen, onClose }) {
  const [chatMessages, setChatMessages] = useState([
    { role: 'ai', text: 'Halo! Saya AI MathMaster. Ada soal matematika yang bikin bingung? Tanyakan saja di sini!' }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  // Auto scroll
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    if (!GEMINI_API_KEY) {
      alert("ERROR: API Key tidak ditemukan! Pastikan file .env sudah benar.");
      return;
    }

    const newUserMsg = { role: 'user', text: inputMessage };
    setChatMessages(prev => [...prev, newUserMsg]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Kamu adalah asisten matematika untuk siswa sekolah (SD-SMA). 
        Jawablah pertanyaan ini: "${inputMessage}".
        
        ATURAN PENTING FORMAT MATEMATIKA:
        1. Jika menulis rumus, WAJIB gunakan format LaTeX.
        2. Gunakan tanda $ untuk rumus inline (contoh: $x^2$).
        3. Gunakan tanda $$ untuk rumus baris baru (contoh: $$\\frac{1}{2}$$).
        4. JANGAN gunakan backslash sebelum tanda pangkat (^) atau underscore (_). Contoh SALAH: \\^, \\_. Contoh BENAR: ^, _.
        5. Jelaskan dengan bahasa Indonesia yang ramah dan mudah dimengerti. 
        6. Sesuaikan cara pemaparan dan pembahasan sesuai jenjang yang bertanya.` }] }]
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
      setChatMessages(prev => [...prev, { role: 'ai', text: aiResponseText }]);

    } catch (error) {
      console.error("Chat Error:", error);
      setChatMessages(prev => [...prev, { role: 'ai', text: `Error: ${error.message}. Coba lagi nanti.` }]);
    } finally {
      setIsLoading(false);
    }
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
          <div><h3 className="text-lg font-bold text-white">AI Tutor MathMaster</h3><p className="text-slate-400 text-xs">Powered by Gemini</p></div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
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
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed overflow-hidden ${msg.role === 'user' ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-slate-700 text-slate-200 rounded-bl-none'}`}>
              <ReactMarkdown
                children={msg.text}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />
                }}
              />
            </div>
          </div>
        ))}
        {isLoading && (<div className="flex justify-start"><div className="bg-slate-700 p-4 rounded-2xl rounded-bl-none flex items-center gap-2 text-slate-400 text-sm"><Loader2 className="w-4 h-4 animate-spin" /> Sedang berpikir...</div></div>)}
        <div ref={chatEndRef}></div>
      </div>

      {/* 3. FOOTER / INPUT (Dipaku di Bawah) */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-20 bg-slate-900 border-t border-slate-700 p-4"
        style={{ height: '80px' }} 
      >
        <form onSubmit={handleSendMessage} className="flex gap-3 h-full items-center">
          <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} placeholder="Ketik soal matematika di sini..." className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none h-full" />
          <button type="submit" disabled={isLoading || !inputMessage.trim()} className="h-full px-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"><Send className="w-5 h-5" /></button>
        </form>
      </div>

    </div>
  </div>
  );
}