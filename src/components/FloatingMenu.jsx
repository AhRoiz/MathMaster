import React from 'react';
import { UserPlus, MessageCircle, X, HelpCircle, Calculator } from 'lucide-react';
import { phoneNumber } from '../data/constants';

export default function FloatingMenu({ isOpen, setIsOpen, openChat, openCalculator }) {

  const handleWhatsAppClick = () => {
    let message = "Halo Admin MathMaster, saya tertarik untuk mencari Tutor Privat Matematika. Bisa minta infonya?";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex flex-col gap-3 animate-fade-in-up">
          <button onClick={handleWhatsAppClick} className="flex items-center gap-3 px-5 py-3 bg-white text-slate-900 font-bold rounded-full shadow-lg hover:bg-slate-200 transition-colors"><span>Cari Tutor Privat</span><UserPlus className="w-5 h-5" /></button>
          {/* TOMBOL KALKULATOR */}
          <button onClick={() => { openCalculator(); setIsOpen(false); }} className="flex items-center gap-3 px-5 py-3 bg-white text-slate-900 font-bold rounded-full shadow-lg hover:bg-slate-200 transition-colors"><span>Kalkulator Scientific</span><Calculator className="w-5 h-5" /></button>
          {/* TOMBOL AI CHAT */}
          <button onClick={() => { openChat(); setIsOpen(false); }} className="flex items-center gap-3 px-5 py-3 bg-white text-slate-900 font-bold rounded-full shadow-lg hover:bg-slate-200 transition-colors"><span>Tanya Soal (AI)</span><MessageCircle className="w-5 h-5" /></button>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 ${isOpen ? 'bg-red-500 rotate-45' : 'bg-cyan-500'}`}><span className="text-white font-bold text-2xl">{isOpen ? <X /> : <HelpCircle />}</span></button>
    </div>
  );
}