import React from 'react';
import { BrainCircuit, PenTool, Trophy, Info, History, Menu } from 'lucide-react';

export default function Navbar({ isScrolled, activePage, handleNavClick, setIsMenuOpen }) {
  return (
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
          <button onClick={() => handleNavClick('about')} className={`transition-colors flex items-center gap-2 ${activePage === 'about' ? 'text-blue-400 font-bold' : 'hover:text-blue-400'}`}>
            <Info className="w-4 h-4" /> Tentang Kami
          </button>
          <button onClick={() => handleNavClick('updates')} className={`transition-colors flex items-center gap-2 ${activePage === 'updates' ? 'text-pink-400 font-bold' : 'hover:text-pink-400'}`}>
            <History className="w-4 h-4" /> Update
          </button>
        </div>
        <button className="md:hidden text-slate-300" onClick={() => setIsMenuOpen(true)}><Menu /></button>
      </div>
    </nav>
  );
}