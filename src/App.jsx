import React, { useState, useEffect, useRef } from 'react';
import { 
  Calculator, GraduationCap, BookOpen, PlayCircle, Globe, ChevronRight, 
  Star, X, Menu, BrainCircuit, TrendingUp, Award, ChevronDown, 
  MessageCircle, UserPlus, HelpCircle, Users, Crown, Heart, Trophy, Medal,
  PenTool, CheckCircle, XCircle, AlertCircle, CheckSquare, Square,
  LogIn, LogOut, User, Edit3, Lock, Send, Bot, Loader2
} from 'lucide-react';

/*KONFIGURASI UTAMA*/
const phoneNumber = "6282120648685"; // GANTI NOMOR WA KAMU

const GEMINI_API_KEY = (import.meta && import.meta.env) ? import.meta.env.VITE_GEMINI_API_KEY : "";

/* DATA WALL OF FAME */
const wallOfFameData = {
  founders: [
    { 
      name: "Ahmad Rofi' Izzulhaq", 
      role: "The Architect & Founder", 
      desc: "Pengembang utama, kurator, dan otak di balik MathMaster.",
      color: "from-amber-400 to-orange-600",
      image: "fotoahmad.jpeg" 
    },
    { 
      name: "M. Nabil Fabian", 
      role: "Founder", 
      desc: "Pencetus ide, kurator dan otak di balik MathMaster.",
      color: "from-amber-400 to-orange-600",
      image: "nabil.jpeg" 
    },
    { 
      name: "Ja'far Anafa Pulungan", 
      role: "Founder", 
      desc: "Pencetus ide, kurator dan otak di balik MathMaster.",
      color: "from-amber-400 to-orange-600",
      image: "jafar.jpeg" 
    },
    { 
      name: "Aldi Ahidin", 
      role: "Founder", 
      desc: "Pencetus ide, kurator dan otak di balik MathMaster.",
      color: "from-amber-400 to-orange-600",
      image: "aldi.jpeg" 
    },

  ],
  contributors: [
    { name: "Sedang Dicari !", role: "Content Partner", desc: "Menyumbangkan kurikulum SD/SMP/SMA." },
    { name: "Sedang Dicari !", role: "Video Contributor", desc: "Donasi video pembahasan materi." },
    { name: "Sedang Dicari !", role: "Designer Artist", desc: "Membuat gambar agar lebih menarik anak-anak" },
  ],
  tutors: [
    { name: "Sedang Dicari !", role: "Super Tutor", desc: "Mengajar Materi Sekolah Dasar/Menengah" },
    { name: "Sedang Dicari !", role: "Super Tutor", desc: "Membantu mengejar anak yang tertinggal materi" },
    { name: "Sedang Dicari !", role: "Mentor", desc: "Membimbing anak penyandang disabilitas." },
    { name: "Sedang Dicari !", role: "Mentor", desc: "Membimbing persiapan olimpiade." },
  ]
};

/* DATA KURIKULUM + SOAL LATIHAN (QUIZ) */
const curriculumData = {
  SD: {
    theme: "from-green-400 to-emerald-600",
    text: "text-emerald-400",
    bg: "bg-emerald-500",
    icon: <Calculator className="w-6 h-6" />,
    description: "Membangun fondasi logika dan aritmatika dasar sesuai jenjang kelas.",
    hasClasses: true,
    classes: {
      1: {
        title: "Kelas 1: Fondasi Dasar",
        nodes: [
          {
            id: "sd1-1",
            title: "Mengenal Bilangan Cacah",
            desc: "Membaca dan menulis lambang bilangan 1-20 hingga 99.",
            difficulty: "Beginner",
            resources: [
              {type : "youtube", title : " Belajar angka", url :"https://youtu.be/2gjsxrhwYaE?si=0wPJ9qYrn_V_123u"}
                ],
            quiz: [
              { question: "Lambang bilangan dari sepuluh adalah...", options: ["1", "10", "100", "01"], correctAnswer: 1 },
              { question: "Angka setelah 5 adalah...", options: ["4", "7", "6", "3"], correctAnswer: 2 },
              { question: "Manakah yang lebih besar: 8 atau 3?", options: ["8", "3", "Sama saja", "Tidak tahu"], correctAnswer: 0 }
            ]
          },
          { id: "sd1-2", title: "Operasi Hitung Sederhana", desc: "Penjumlahan & pengurangan dasar.", difficulty: "Easy", resources: [], quiz: [] },
          { id: "sd1-3", title: "Pengukuran Tidak Baku", desc: "Jengkal & langkah.", difficulty: "Easy", resources: [], quiz: [] },
          { id: "sd1-4", title: "Geometri Dasar", desc: "Segitiga, segiempat, lingkaran.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "sd1-5", title: "Waktu & Jam", desc: "Nama hari & jam utuh.", difficulty: "Medium", resources: [], quiz: [] }
        ]
      },
      2: {
        title: "Kelas 2: Pengembangan Operasi",
        nodes: [
          { id: "sd2-1", title: "Bilangan sampai 999", desc: "Nilai tempat ratusan.", difficulty: "Easy", resources: [], quiz: [] },
          { id: "sd2-2", title: "Penjumlahan Bersusun", desc: "Teknik menyimpan.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "sd2-3", title: "Perkalian & Pembagian", desc: "Penjumlahan berulang.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd2-4", title: "Pengukuran Baku", desc: "Panjang (cm) & Berat (kg).", difficulty: "Medium", resources: [], quiz: [] },
          { id: "sd2-5", title: "Uang & Waktu", desc: "Rupiah & durasi.", difficulty: "Medium", resources: [], quiz: [] }
        ]
      },
      3: {
        title: "Kelas 3: Pecahan & Sifat Bangun",
        nodes: [
          { id: "sd3-1", title: "Operasi Ribuan", desc: "Hitung campuran.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "sd3-2", title: "Pecahan Sederhana", desc: "Mengenal 1/2, 1/4.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "sd3-3", title: "Simetri & Sudut", desc: "Simetri lipat.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd3-4", title: "Keliling & Luas Persegi", desc: "Hitung keliling.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd3-5", title: "Data Sederhana", desc: "Diagram batang.", difficulty: "Medium", resources: [], quiz: [] }
        ]
      },
      4: {
        title: "Kelas 4: Bilangan Besar",
        nodes: [
          { id: "sd4-1", title: "Bilangan Besar", desc: "Jutaan.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "sd4-2", title: "KPK & FPB", desc: "Faktor & Kelipatan.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd4-3", title: "Pecahan Senilai", desc: "Desimal & Persen.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd4-4", title: "Geometri Sudut", desc: "Busur derajat.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd4-5", title: "Luas Segitiga", desc: "Alas x Tinggi / 2.", difficulty: "Expert", resources: [], quiz: [] }
        ]
      },
      5: {
        title: "Kelas 5: Perbandingan",
        nodes: [
          { id: "sd5-1", title: "Operasi Pecahan", desc: "Kali bagi pecahan.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd5-2", title: "Skala & Kecepatan", desc: "Jarak peta.", difficulty: "Expert", resources: [], quiz: [] },
          { id: "sd5-3", title: "Bangun Ruang", desc: "Kubus & Balok.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd5-4", title: "Volume", desc: "Pangkat tiga.", difficulty: "Expert", resources: [], quiz: [] }
        ]
      },
      6: {
        title: "Kelas 6: Persiapan SMP",
        nodes: [
          { id: "sd6-1", title: "Bilangan Bulat Negatif", desc: "Positif & Negatif.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd6-2", title: "Lingkaran", desc: "Luas & Keliling Pi.", difficulty: "Expert", resources: [], quiz: [] },
          { id: "sd6-3", title: "Geometri Gabungan", desc: "Volume gabungan.", difficulty: "Expert", resources: [], quiz: [] },
          { id: "sd6-4", title: "Statistika", desc: "Mean, Median, Modus.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd6-5", title: "Sistem Koordinat", desc: "Titik pada koordinat Kartesius.", difficulty: "Medium", resources: [], quiz: [] }
        ]
      }
    }
  },
  SMP: {
    theme: "from-blue-400 to-indigo-600",
    text: "text-blue-400",
    bg: "bg-blue-500",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Transisi ke pemikiran aljabar abstrak.",
    hasClasses: true,
    classes: {
      7: {
        title: "Kelas 7: Pengenalan Aljabar",
        nodes: [
          { 
            id: "smp7-1", title: "Bilangan & Himpunan", desc: "Bilangan bulat & Diagram Venn.", difficulty: "Beginner", resources: [],
            quiz: [
              { question: "Hasil dari -5 + 12 adalah...", options: ["-7", "7", "17", "-17"], correctAnswer: 1 },
              { question: "Kumpulan hewan berkaki empat adalah contoh...", options: ["Himpunan", "Bukan Himpunan", "Bilangan", "Aljabar"], correctAnswer: 0 }
            ]
          },
          { id: "smp7-2", title: "Aljabar Dasar", desc: "Variabel & Konstanta.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "smp7-3", title: "PLSV", desc: "Persamaan Linear.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "smp7-4", title: "Aritmetika Sosial", desc: "Untung Rugi.", difficulty: "Easy", resources: [], quiz: [] },
          { id: "smp7-5", title: "Garis & Sudut", desc: "Hubungan antar sudut.", difficulty: "Hard", resources: [], quiz: [] }
        ]
      },
      8: {
        title: "Kelas 8: Relasi & Geometri",
        nodes: [
          { id: "smp8-1", title: "Pola Bilangan", desc: "Barisan aritmatika.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "smp8-2", title: "Koordinat Kartesius", desc: "Sumbu X dan Y.", difficulty: "Easy", resources: [], quiz: [] },
          { id: "smp8-3", title: "Relasi Fungsi", desc: "Domain Kodomain.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "smp8-4", title: "Persamaan Garis", desc: "Gradien.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "smp8-5", title: "Pythagoras", desc: "Segitiga siku-siku.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "smp8-6", title: "Lingkaran", desc: "Sudut pusat.", difficulty: "Expert", resources: [], quiz: [] }
        ]
      },
      9: {
        title: "Kelas 9: Pangkat & Ruang",
        nodes: [
          { id: "smp9-1", title: "Pangkat & Akar", desc: "Eksponen.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "smp9-2", title: "Persamaan Kuadrat", desc: "Akar persamaan.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "smp9-3", title: "Transformasi", desc: "Refleksi Rotasi.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "smp9-4", title: "Kesebangunan", desc: "Kongruen.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "smp9-5", title: "Bangun Lengkung", desc: "Tabung Kerucut.", difficulty: "Expert", resources: [], quiz: [] }
        ]
      }
    }
  },
  SMA: {
    theme: "from-purple-500 to-fuchsia-600",
    text: "text-purple-400",
    bg: "bg-purple-500",
    icon: <GraduationCap className="w-6 h-6" />,
    description: "Matematika lanjut & Kalkulus.",
    hasClasses: true,
    classes: {
      10: {
        title: "Kelas 10: Fondasi Lanjut",
        nodes: [
          { 
            id: "sma10-1", title: "Eksponen & Logaritma", desc: "Sifat pangkat.", difficulty: "Medium", resources: [],
            quiz: [
              { question: "2 pangkat 3 sama dengan...", options: ["6", "8", "9", "5"], correctAnswer: 1 },
              { question: "Invers dari eksponen adalah...", options: ["Logaritma", "Matriks", "Vektor", "Limit"], correctAnswer: 0 }
            ]
          },
          { id: "sma10-2", title: "SPLTV", desc: "3 Variabel.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sma10-3", title: "Fungsi Komposisi", desc: "f(g(x)).", difficulty: "Medium", resources: [], quiz: [] },
          { id: "sma10-4", title: "Trigonometri", desc: "Sin Cos Tan.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sma10-5", title: "Vektor", desc: "Dot product.", difficulty: "Medium", resources: [], quiz: [] }
        ]
      },
      11: {
        title: "Kelas 11: Kalkulus Dasar",
        nodes: [
          { id: "sma11-1", title: "Matriks", desc: "Determinan.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "sma11-2", title: "Barisan Deret", desc: "Tak hingga.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "sma11-3", title: "Limit", desc: "Mendekati nilai.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sma11-4", title: "Turunan", desc: "Diferensial.", difficulty: "Expert", resources: [], quiz: [] },
          { id: "sma11-5", title: "Lingkaran Analitik", desc: "Persamaan lingkaran.", difficulty: "Expert", resources: [], quiz: [] }
        ]
      },
      12: {
        title: "Kelas 12: Kalkulus Lanjut",
        nodes: [
          { id: "sma12-1", title: "Dimensi Tiga", desc: "Jarak titik bidang.", difficulty: "Expert", resources: [], quiz: [] },
          { id: "sma12-2", title: "Integral", desc: "Luas daerah.", difficulty: "God Tier", resources: [], quiz: [] },
          { id: "sma12-3", title: "Statistika", desc: "Data kelompok.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sma12-4", title: "Peluang", desc: "Kombinasi.", difficulty: "Hard", resources: [], quiz: [] }
        ]
      }
    }
  }
};

export default function MathMaster() {
  const [activePage, setActivePage] = useState("home"); // 'home', 'practice', 'wall'
  const [activeLevel, setActiveLevel] = useState("SD");
  const [activeClass, setActiveClass] = useState(1);
  const [selectedNode, setSelectedNode] = useState(null);
  const [quizNode, setQuizNode] = useState(null); 
  const [quizState, setQuizState] = useState({ currentQ: 0, score: 0, showResult: false, selectedOpt: null, isCorrect: null });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [completedNodes, setCompletedNodes] = useState({});

  // STATE LOGIN
  const [user, setUser] = useState(null); // { name: "Budi", role: "student" | "mentor" }
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ name: "", role: "student" });

  // STATE CHAT AI
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'ai', text: 'Halo! Saya AI MathMaster. Ada soal matematika yang bikin bingung? Tanyakan saja di sini!' }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // EFFECT: Load data dari LocalStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('mathmaster_progress');
    if (savedProgress) setCompletedNodes(JSON.parse(savedProgress));

    const savedUser = localStorage.getItem('mathmaster_user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // EFFECT: Auto scroll chat ke bawah
  useEffect(() => {
    if (isChatOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isChatOpen]);

  const toggleCompletion = (nodeId) => {
    const newProgress = { ...completedNodes, [nodeId]: !completedNodes[nodeId] };
    setCompletedNodes(newProgress);
    localStorage.setItem('mathmaster_progress', JSON.stringify(newProgress));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginForm.name) return alert("Nama harus diisi!");
    
    // Simpan user ke state dan local storage
    setUser(loginForm);
    localStorage.setItem('mathmaster_user', JSON.stringify(loginForm));
    setIsLoginModalOpen(false);
    // Reset form
    setLoginForm({ name: "", role: "student" });
  };

  const handleLogout = () => {
    if(window.confirm("Yakin ingin keluar?")) {
      setUser(null);
      localStorage.removeItem('mathmaster_user');
      window.location.reload(); // Refresh agar bersih
    }
  };

  // LOGIKA CHAT DENGAN GEMINI API
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newUserMsg = { role: 'user', text: inputMessage };
    setChatMessages(prev => [...prev, newUserMsg]);
    setInputMessage("");
    setIsLoading(true);

    try {
      if (!GEMINI_API_KEY) {
        throw new Error("API Key belum disetting!");
      }

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Jawablah pertanyaan matematika ini dengan bahasa Indonesia yang ramah dan mudah dimengerti untuk siswa sekolah: ${inputMessage}` }] }]
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message);
      }

      const aiResponseText = data.candidates[0].content.parts[0].text;
      setChatMessages(prev => [...prev, { role: 'ai', text: aiResponseText }]);

    } catch (error) {
      console.error("Error AI:", error);
      setChatMessages(prev => [...prev, { role: 'ai', text: "Maaf, fitur AI sedang gangguan atau API Key belum disetting. Cek file .env Anda." }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLevelChange = (level) => {
    setActiveLevel(level);
    if (level === "SD") setActiveClass(1);
    if (level === "SMP") setActiveClass(7);
    if (level === "SMA") setActiveClass(10);
  };

  const getClassOptions = () => {
    if (activeLevel === "SD") return [1, 2, 3, 4, 5, 6];
    if (activeLevel === "SMP") return [7, 8, 9];
    if (activeLevel === "SMA") return [10, 11, 12];
    return [];
  };

  const handleNavClick = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = (type) => {
    let message = "";
    if (type === "tutor") message = "Halo Admin MathMaster, saya tertarik untuk mencari Tutor Privat Matematika. Bisa minta infonya?";
    else if (type === "join") message = "Halo Admin, saya ingin berkontribusi untuk MathMaster.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // LOGIKA KUIS
  const startQuiz = (node) => {
    if (node.quiz && node.quiz.length > 0) {
      setQuizNode(node);
      setQuizState({ currentQ: 0, score: 0, showResult: false, selectedOpt: null, isCorrect: null });
    } else {
      alert("Maaf, soal untuk materi ini belum tersedia. Tim kami sedang menyusunnya!");
    }
  };

  const handleAnswerClick = (optIndex) => {
    if (quizState.selectedOpt !== null) return; 
    const isCorrect = optIndex === quizNode.quiz[quizState.currentQ].correctAnswer;
    setQuizState({ ...quizState, selectedOpt: optIndex, isCorrect: isCorrect, score: isCorrect ? quizState.score + 10 : quizState.score });
  };

  const nextQuestion = () => {
    if (quizState.currentQ + 1 < quizNode.quiz.length) {
      setQuizState({ ...quizState, currentQ: quizState.currentQ + 1, selectedOpt: null, isCorrect: null });
    } else {
      setQuizState({ ...quizState, showResult: true });
    }
  };

  const levelData = curriculumData[activeLevel];
  const currentNodes = levelData.hasClasses ? levelData.classes[activeClass].nodes : levelData.nodes;
  const currentTitle = levelData.hasClasses ? levelData.classes[activeClass].title : `${activeLevel} Mastery Road`;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <BrainCircuit className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Math<span className="text-cyan-400">Master</span></span>
          </div>
          
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400 items-center">
            <button onClick={() => handleNavClick('home')} className={`transition-colors ${activePage === 'home' ? 'text-cyan-400 font-bold' : 'hover:text-cyan-400'}`}>Beranda</button>
            <button onClick={() => { handleNavClick('home'); setTimeout(() => document.getElementById('roadmap')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="hover:text-cyan-400 transition-colors">Peta Belajar</button>
            
            <button onClick={() => handleNavClick('practice')} className={`transition-colors flex items-center gap-2 ${activePage === 'practice' ? 'text-emerald-400 font-bold' : 'hover:text-emerald-400'}`}>
              <PenTool className="w-4 h-4" /> Latihan Soal
            </button>

            <button onClick={() => handleNavClick('wall')} className={`transition-colors flex items-center gap-2 ${activePage === 'wall' ? 'text-yellow-400 font-bold' : 'hover:text-yellow-400'}`}>
              <Trophy className="w-4 h-4" /> Wall of Fame
            </button>

            {/* STATUS USER / LOGIN BUTTON */}
            <div className="ml-4 pl-4 border-l border-slate-700">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="text-right hidden lg:block">
                    <div className="text-white font-bold text-xs">{user.name}</div>
                    <div className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full inline-block ${user.role === 'mentor' ? 'bg-purple-500 text-white' : 'bg-emerald-500 text-slate-900'}`}>
                      {user.role === 'mentor' ? 'Mentor' : 'Siswa'}
                    </div>
                  </div>
                  <button onClick={handleLogout} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-red-400 transition-colors" title="Logout">
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsLoginModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full border border-slate-600 transition-all text-xs font-bold"
                >
                  <LogIn className="w-4 h-4" /> Masuk
                </button>
              )}
            </div>
          </div>
          <button className="md:hidden text-slate-300"><Menu /></button>
        </div>
      </nav>

      {/* --- HALAMAN UTAMA (HOME / PETA BELAJAR) --- */}
      {activePage === 'home' && (
        <>
          <header className="relative pt-32 pb-20 px-6 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -z-10"></div>
            <div className="max-w-4xl mx-auto text-center">
              {user && (
                <div className="mb-6 animate-fade-in-up">
                  <span className="text-xl font-light text-slate-400">Halo, {user.role === 'mentor' ? 'Mentor' : 'Siswa'} <span className="text-white font-bold">{user.name}</span>! 👋</span>
                </div>
              )}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-medium mb-6 animate-fade-in-up">
                <Star className="w-4 h-4 fill-cyan-400" />
                <span>100% Gratis untuk Pelajar Indonesia</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Kuasai Matematika <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Langkah Demi Langkah</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">Pilih jenjangmu, tentukan kelasmu, dan ikuti peta belajarnya.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button onClick={() => document.getElementById('roadmap').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl shadow-lg transition-all transform hover:scale-105 flex items-center gap-2">Mulai Petualangan <TrendingUp className="w-5 h-5" /></button>
              </div>
            </div>
          </header>

          <section id="roadmap" className="py-20 px-4 md:px-6 max-w-5xl mx-auto min-h-[800px]">
            {/* LEVEL SELECTOR */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
              {Object.keys(curriculumData).map((level) => (
                <button key={level} onClick={() => handleLevelChange(level)} className={`relative px-8 py-4 rounded-2xl font-bold text-lg w-full md:w-auto transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden group border border-slate-700 ${activeLevel === level ? `bg-gradient-to-r ${curriculumData[level].theme} text-white shadow-xl scale-105 border-transparent` : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'}`}>
                  {curriculumData[level].icon}<span>Tingkat {level}</span>
                </button>
              ))}
            </div>
            {/* CLASS DROPDOWN */}
            <div className="flex justify-center mb-16 animate-scale-in">
              <div className="relative group w-full max-w-md">
                <div className={`absolute inset-0 bg-gradient-to-r ${levelData.theme} rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity`}></div>
                <div className="relative bg-slate-800 border border-slate-700 rounded-xl p-1 flex items-center">
                  <div className="p-3 bg-slate-900 rounded-lg mr-3"><GraduationCap className={`${levelData.text} w-6 h-6`} /></div>
                  <select value={activeClass} onChange={(e) => setActiveClass(Number(e.target.value))} className="w-full bg-transparent text-white font-bold text-lg outline-none cursor-pointer appearance-none py-2 pr-8">
                    {getClassOptions().map(num => <option key={num} value={num} className="bg-slate-800 text-slate-200">Kelas {num} {activeLevel}</option>)}
                  </select>
                  <div className="absolute right-4 pointer-events-none"><ChevronDown className="text-slate-400 w-5 h-5" /></div>
                </div>
              </div>
            </div>
            {/* ROADMAP TREE */}
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-36 w-1 md:-ml-0.5 bg-slate-800 rounded-full"><div className={`h-full w-full bg-gradient-to-b ${levelData.theme} opacity-30`}></div></div>
              
              <div className="space-y-12">
                {currentNodes.map((node, index) => {
                  const isCompleted = completedNodes[node.id];
                  
                  return (
                    <div key={node.id} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className="hidden md:block w-5/12"></div>
                      
                      <div className={`absolute left-4 md:left-1/2 w-8 h-8 -ml-4 rounded-full border-4 z-10 flex items-center justify-center transition-all ${isCompleted ? 'border-emerald-500 bg-emerald-500 scale-110 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'border-slate-900 bg-slate-700'}`}>
                        {isCompleted ? <CheckCircle className="w-4 h-4 text-white" /> : <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${levelData.theme}`}></div>}
                      </div>

                      <div className="ml-12 md:ml-0 w-full md:w-5/12">
                        <button 
                          onClick={() => setSelectedNode(node)} 
                          className="w-full text-left group relative block"
                        >
                          <div className={`absolute inset-0 rounded-2xl transform transition-transform group-hover:-translate-y-1 group-hover:shadow-xl border ${isCompleted ? 'bg-emerald-900/20 border-emerald-500/50 shadow-lg shadow-emerald-900/10' : 'bg-gradient-to-r from-slate-800 to-slate-800/50 border-slate-700 group-hover:border-cyan-500/50'}`}></div>
                          
                          <div className="relative p-6">
                            <div className="absolute top-4 right-4 z-20 flex gap-2">
                              {/* MENTOR ONLY BUTTON */}
                              {user?.role === 'mentor' && (
                                <div className="p-2 rounded-full bg-purple-500/20 text-purple-400" title="Edit Materi (Khusus Mentor)">
                                  <Edit3 className="w-4 h-4" />
                                </div>
                              )}
                              <button
                                onClick={(e) => { e.stopPropagation(); toggleCompletion(node.id); }}
                                className={`p-2 rounded-full transition-all ${isCompleted ? 'text-emerald-400 bg-emerald-900/50 hover:bg-emerald-900' : 'text-slate-600 hover:text-slate-300 hover:bg-slate-700'}`}
                                title={isCompleted ? "Tandai Belum Selesai" : "Tandai Selesai"}
                              >
                                {isCompleted ? <CheckSquare className="w-6 h-6" /> : <Square className="w-6 h-6" />}
                              </button>
                            </div>

                            <div className="flex justify-between items-start mb-2 pr-16">
                              <span className={`text-xs font-bold px-2 py-1 rounded ${isCompleted ? 'bg-emerald-500 text-white' : 'bg-slate-900/50 text-slate-300'} border border-slate-700`}>Step {index + 1}</span>
                              <span className={`text-xs font-bold uppercase tracking-wider ${node.difficulty === 'Beginner' ? 'text-green-400' : 'text-yellow-400'}`}>{node.difficulty}</span>
                            </div>
                            <h3 className={`text-xl font-bold mb-1 transition-colors ${isCompleted ? 'text-emerald-400' : 'text-white group-hover:text-cyan-400'}`}>{node.title}</h3>
                            <p className="text-sm text-slate-400 mb-4">{node.desc}</p>
                            <div className={`flex items-center gap-2 text-xs font-medium transition-colors ${isCompleted ? 'text-emerald-500' : 'text-slate-500 group-hover:text-slate-300'}`}>
                              <span>{isCompleted ? 'Materi Selesai!' : 'Klik untuk Belajar'}</span>
                              <ChevronRight className="w-4 h-4 ml-auto" />
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  );
                })}
                
                <div className="relative flex justify-center pt-16 pb-8 animate-fade-in-up">
                  <div className="flex flex-col items-center gap-4 z-10 relative group cursor-default">
                    <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-600 p-1 shadow-2xl transform group-hover:scale-110 transition-transform duration-500 flex items-center justify-center border-4 border-yellow-200">
                      <div className="w-full h-full rounded-full bg-yellow-500 flex items-center justify-center border border-yellow-600 shadow-inner">
                        <Award className="w-12 h-12 text-white drop-shadow-md" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-yellow-400 drop-shadow-lg tracking-wide uppercase">Garis Finish</h4>
                      <p className="text-slate-400 text-sm">Kamu telah melihat semua peta!</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </>
      )}

      {/* --- HALAMAN LATIHAN SOAL (PRACTICE) --- */}
      {activePage === 'practice' && (
        <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen animate-fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
              <PenTool className="w-4 h-4" />
              <span>Zona Ujian & Latihan</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Uji <span className="text-emerald-400">Kemampuanmu</span></h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Pilih materi sesuai kelasmu dan kerjakan soal latihan interaktif untuk mengasah pemahaman.</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl mb-12 flex flex-col md:flex-row gap-6 justify-center items-center">
             <div className="flex gap-2">
                {Object.keys(curriculumData).map((level) => (
                  <button key={level} onClick={() => handleLevelChange(level)} className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${activeLevel === level ? 'bg-emerald-500 text-white shadow-lg' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>{level}</button>
                ))}
             </div>
             <div className="relative">
                <select value={activeClass} onChange={(e) => setActiveClass(Number(e.target.value))} className="bg-slate-900 border border-slate-600 text-white text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 pr-8">
                  {getClassOptions().map(num => <option key={num} value={num}>Kelas {num}</option>)}
                </select>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentNodes.map((node, idx) => (
              <div key={idx} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/50 transition-all flex flex-col h-full group">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${levelData.theme} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <PenTool className="text-white w-6 h-6" />
                  </div>
                  {node.quiz && node.quiz.length > 0 ? (
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded font-bold">Siap Dikerjakan</span>
                  ) : (
                    <span className="bg-slate-700 text-slate-400 text-xs px-2 py-1 rounded font-bold">Belum Tersedia</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{node.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">{node.desc}</p>
                
                {/* BUTTON START QUIZ (CONDITIONAL FOR STUDENT) */}
                <button 
                  onClick={() => startQuiz(node)}
                  disabled={!node.quiz || node.quiz.length === 0}
                  className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2
                    ${node.quiz && node.quiz.length > 0 
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20' 
                      : 'bg-slate-700 text-slate-500 cursor-not-allowed'}
                  `}
                >
                  {node.quiz && node.quiz.length > 0 ? 'Mulai Latihan' : 'Segera Hadir'}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* --- HALAMAN WALL OF FAME (FULL VERSION) --- */}
      {activePage === 'wall' && (
        <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen animate-fade-in-up">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-medium mb-6">
              <Crown className="w-4 h-4" /><span>Hall of Heroes</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Wall of <span className="text-yellow-400">Fame</span></h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Dedikasi untuk para pahlawan edukasi.</p>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-slate-800 pb-4"><Medal className="text-yellow-500" /> The Architect</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wallOfFameData.founders.map((person, idx) => (
                <div key={idx} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${person.color} blur opacity-20 group-hover:opacity-40 transition-opacity rounded-2xl`}></div>
                  <div className="relative bg-slate-800 border border-yellow-500/30 p-8 rounded-2xl text-center h-full flex flex-col items-center hover:transform hover:scale-105 transition-all overflow-hidden">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${person.color} p-1 mb-6 shadow-xl overflow-hidden relative z-10`}>
                      {person.image ? <img src={person.image} alt={person.name} className="w-full h-full object-cover rounded-full border-2 border-slate-900" /> : <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center"><BrainCircuit className="w-10 h-10 text-white" /></div>}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-1 relative z-10">{person.name}</h4>
                    <span className="text-yellow-400 font-medium text-sm tracking-widest uppercase mb-4 relative z-10">{person.role}</span>
                    <p className="text-slate-400 text-sm leading-relaxed relative z-10">{person.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
             <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-slate-800 pb-4"><Heart className="text-pink-500" /> Komunitas & Kontributor</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wallOfFameData.contributors.map((person, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex items-start gap-4 hover:bg-slate-800 transition-colors">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center flex-shrink-0"><Users className="w-6 h-6 text-pink-500" /></div>
                  <div><h5 className="text-lg font-bold text-white">{person.name}</h5><p className="text-xs text-pink-400 font-bold mb-1">{person.role}</p><p className="text-slate-400 text-sm">{person.desc}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
             <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-slate-800 pb-4"><GraduationCap className="text-cyan-500" /> Para Mentor (Tutor)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wallOfFameData.tutors.map((person, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl text-center hover:border-cyan-500/50 transition-colors">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4"><GraduationCap className="w-8 h-8 text-cyan-500" /></div>
                  <h5 className="text-lg font-bold text-white mb-1">{person.name}</h5><p className="text-xs text-cyan-400 font-bold mb-2">{person.role}</p><p className="text-slate-400 text-xs">{person.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-slate-400 mb-4">Ingin namamu ada di sini dan membantu ribuan pelajar?</p>
              <button onClick={() => handleWhatsAppClick('join')} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full border border-slate-600 transition-all flex items-center gap-2 mx-auto"><UserPlus className="w-4 h-4" /> Gabung Jadi Kontributor</button>
            </div>
          </div>
        </section>
      )}

      {/* FLOATING ACTION MENU */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-3">
        {isMenuOpen && (
          <div className="flex flex-col gap-3 animate-fade-in-up">
             <button onClick={() => handleWhatsAppClick("tutor")} className="flex items-center gap-3 px-5 py-3 bg-white text-slate-900 font-bold rounded-full shadow-lg hover:bg-slate-200 transition-colors"><span>Cari Tutor Privat</span><UserPlus className="w-5 h-5" /></button>
             {/* TOMBOL AI CHAT */}
             <button onClick={() => { setIsChatOpen(true); setIsMenuOpen(false); }} className="flex items-center gap-3 px-5 py-3 bg-white text-slate-900 font-bold rounded-full shadow-lg hover:bg-slate-200 transition-colors"><span>Tanya Soal (AI)</span><MessageCircle className="w-5 h-5" /></button>
          </div>
        )}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 ${isMenuOpen ? 'bg-red-500 rotate-45' : 'bg-cyan-500'}`}><span className="text-white font-bold text-2xl">{isMenuOpen ? <X /> : <HelpCircle />}</span></button>
      </div>

      {/* --- MODAL CHAT AI --- */}
      {isChatOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" onClick={() => setIsChatOpen(false)}></div>
          <div className="relative w-full max-w-lg bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-scale-in flex flex-col h-[600px]">
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-700 flex justify-between items-center bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400">
                  <Bot className="w-6 h-6" />
                </div>
                <div><h3 className="text-lg font-bold text-white">AI Tutor MathMaster</h3><p className="text-slate-400 text-xs">Powered by Gemini</p></div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="p-2 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-800/50">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-slate-700 text-slate-200 rounded-bl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-700 p-4 rounded-2xl rounded-bl-none flex items-center gap-2 text-slate-400 text-sm">
                    <Loader2 className="w-4 h-4 animate-spin" /> Sedang berpikir...
                  </div>
                </div>
              )}
              <div ref={chatEndRef}></div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 bg-slate-900 border-t border-slate-700 flex gap-3">
              <input 
                type="text" 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ketik soal matematika di sini..."
                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
              />
              <button type="submit" disabled={isLoading || !inputMessage.trim()} className="p-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- MODAL MATERI --- */}
      {selectedNode && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSelectedNode(null)}></div>
          <div className="relative w-full max-w-lg bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
            <div className={`px-6 py-8 bg-gradient-to-r ${levelData.theme} relative overflow-hidden`}>
              <button onClick={() => setSelectedNode(null)} className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"><X className="w-5 h-5" /></button>
              <h3 className="text-2xl font-bold text-white relative z-10">{selectedNode.title}</h3>
              <p className="text-white/80 mt-2 relative z-10 text-sm">{selectedNode.desc}</p>
            </div>
            <div className="p-6">
              {selectedNode.resources.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center"><Globe className="w-8 h-8 text-slate-400" /></div>
                  <div><h4 className="text-lg font-bold text-white">Materi Segera Hadir</h4><p className="text-slate-400 text-sm mt-1 max-w-xs mx-auto">Link materi ini sedang dikurasi oleh tim kami agar kamu mendapatkan yang terbaik.</p></div>
                </div>
              ) : (
                <div className="space-y-3">
                  {selectedNode.resources.map((res, idx) => (
                    <a key={idx} href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500 hover:bg-slate-700/50 transition-all group">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${res.type === 'youtube' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'}`}>
                        {res.type === 'youtube' ? <PlayCircle className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
                      </div>
                      <div className="flex-1"><h5 className="font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors line-clamp-1">{res.title}</h5><span className="text-xs text-slate-500 capitalize">{res.type} Source</span></div>
                      <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL QUIZ --- */}
      {quizNode && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"></div>
          <div className="relative w-full max-w-2xl bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-scale-in flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 border-b border-slate-700 flex justify-between items-center bg-slate-900">
              <div><h3 className="text-lg font-bold text-emerald-400">Latihan Soal</h3><p className="text-slate-400 text-sm">{quizNode.title}</p></div>
              <button onClick={() => setQuizNode(null)} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-6 overflow-y-auto">
              {!quizState.showResult ? (
                <>
                  <div className="w-full bg-slate-700 h-2 rounded-full mb-6"><div className="bg-emerald-500 h-2 rounded-full transition-all duration-300" style={{ width: `${((quizState.currentQ + 1) / quizNode.quiz.length) * 100}%` }}></div></div>
                  <div className="mb-8"><span className="text-emerald-500 font-bold text-sm tracking-widest uppercase mb-2 block">Soal {quizState.currentQ + 1} dari {quizNode.quiz.length}</span><h4 className="text-2xl font-bold text-white leading-relaxed">{quizNode.quiz[quizState.currentQ].question}</h4></div>
                  <div className="space-y-3">
                    {quizNode.quiz[quizState.currentQ].options.map((opt, idx) => {
                      let btnClass = "bg-slate-700 hover:bg-slate-600 text-slate-200";
                      if (quizState.selectedOpt !== null) {
                        if (idx === quizNode.quiz[quizState.currentQ].correctAnswer) btnClass = "bg-green-600 text-white ring-2 ring-green-400";
                        else if (idx === quizState.selectedOpt) btnClass = "bg-red-600 text-white";
                        else btnClass = "bg-slate-800 text-slate-500 opacity-50";
                      }
                      return (
                        <button key={idx} onClick={() => handleAnswerClick(idx)} disabled={quizState.selectedOpt !== null} className={`w-full text-left p-4 rounded-xl font-medium transition-all ${btnClass}`}>
                          <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full border border-current flex items-center justify-center text-sm font-bold opacity-70">{String.fromCharCode(65 + idx)}</div><span>{opt}</span>
                            {quizState.selectedOpt !== null && idx === quizNode.quiz[quizState.currentQ].correctAnswer && <CheckCircle className="ml-auto w-5 h-5 text-white" />}
                            {quizState.selectedOpt !== null && idx === quizState.selectedOpt && idx !== quizNode.quiz[quizState.currentQ].correctAnswer && <XCircle className="ml-auto w-5 h-5 text-white" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6"><Trophy className="w-12 h-12 text-emerald-400" /></div>
                  <h2 className="text-3xl font-bold text-white mb-2">Latihan Selesai!</h2>
                  <p className="text-slate-400 mb-8">Kamu mendapatkan skor:</p>
                  <div className="text-6xl font-black text-emerald-400 mb-8">{quizState.score} <span className="text-2xl text-slate-500 font-medium">/ {quizNode.quiz.length * 10}</span></div>
                  <button onClick={() => setQuizNode(null)} className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors">Tutup & Pilih Materi Lain</button>
                </div>
              )}
            </div>
            {!quizState.showResult && (
              <div className="px-6 py-4 bg-slate-900 border-t border-slate-700 flex justify-end">
                <button onClick={nextQuestion} disabled={quizState.selectedOpt === null} className={`px-6 py-2 rounded-lg font-bold transition-all flex items-center gap-2 ${quizState.selectedOpt !== null ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-900' : 'bg-slate-800 text-slate-600 cursor-not-allowed'}`}>
                  {quizState.currentQ + 1 === quizNode.quiz.length ? "Lihat Hasil" : "Soal Selanjutnya"} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- MODAL LOGIN --- */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" onClick={() => setIsLoginModalOpen(false)}></div>
          <div className="relative w-full max-w-sm bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-scale-in p-6">
            <button onClick={() => setIsLoginModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Masuk ke MathMaster</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-slate-400 text-sm mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  value={loginForm.name}
                  onChange={(e) => setLoginForm({...loginForm, name: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                  placeholder="Contoh: Budi Santoso"
                  required 
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">Masuk Sebagai</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    type="button"
                    onClick={() => setLoginForm({...loginForm, role: 'student'})}
                    className={`p-3 rounded-lg border flex flex-col items-center gap-2 transition-all ${loginForm.role === 'student' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-slate-900 border-slate-700 text-slate-500 hover:border-slate-500'}`}
                  >
                    <User className="w-6 h-6" />
                    <span className="text-sm font-bold">Siswa</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setLoginForm({...loginForm, role: 'mentor'})}
                    className={`p-3 rounded-lg border flex flex-col items-center gap-2 transition-all ${loginForm.role === 'mentor' ? 'bg-purple-500/20 border-purple-500 text-purple-400' : 'bg-slate-900 border-slate-700 text-slate-500 hover:border-slate-500'}`}
                  >
                    <GraduationCap className="w-6 h-6" />
                    <span className="text-sm font-bold">Mentor</span>
                  </button>
                </div>
              </div>
              <button type="submit" className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-lg shadow-lg transition-all mt-4">
                Mulai Belajar
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
        @keyframes scale-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-scale-in { animation: scale-in 0.2s ease-out forwards; }
      `}</style>
    </div>
  );
}