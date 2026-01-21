import React from 'react';
import { Crown, Medal, Heart, Users, GraduationCap, UserPlus, BrainCircuit } from 'lucide-react';
import { wallOfFameData, phoneNumber } from '../data/constants';

export default function WallOfFame() {
  const handleJoin = () => {
    let message = "Halo Admin, saya ingin berkontribusi untuk MathMaster.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen animate-fade-in-up">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-medium mb-6">
          <Crown className="w-4 h-4" /><span>Hall of Heroes</span>
        </div>
        <h1 className="text-5xl font-bold mb-6">Wall of <span className="text-yellow-400">Fame</span></h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Dedikasi untuk para pahlawan edukasi.</p>
      </div>

      {/* Founders */}
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

      {/* Contributors */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-slate-800 pb-4"><Heart className="text-pink-500" /> Komunitas & Kontributor</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wallOfFameData.contributors.map((person, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex items-start gap-4 hover:bg-slate-800 transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full p-0.5 flex-shrink-0 overflow-hidden">
                {person.image ? (
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover rounded-full border-2 border-slate-900" />
                ) : (
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                    <Users className="w-6 h-6 text-pink-500" />
                  </div>
                )}
              </div>
              <div><h5 className="text-lg font-bold text-white">{person.name}</h5><p className="text-xs text-pink-400 font-bold mb-1">{person.role}</p><p className="text-slate-400 text-sm">{person.desc}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* Tutors */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-slate-800 pb-4"><GraduationCap className="text-cyan-500" /> Para Mentor (Tutor)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wallOfFameData.tutors.map((person, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl text-center hover:border-cyan-500/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-full p-0.5 mx-auto mb-4 overflow-hidden">
                {person.image ? (
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover rounded-full border-2 border-slate-900" />
                ) : (
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-cyan-500" />
                  </div>
                )}
              </div>
              <h5 className="text-lg font-bold text-white mb-1">{person.name}</h5><p className="text-xs text-cyan-400 font-bold mb-2">{person.role}</p><p className="text-slate-400 text-xs">{person.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-slate-400 mb-4">Ingin namamu ada di sini dan membantu ribuan pelajar?</p>
          <button onClick={handleJoin} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full border border-slate-600 transition-all flex items-center gap-2 mx-auto"><UserPlus className="w-4 h-4" /> Gabung Jadi Kontributor</button>
        </div>
      </div>
    </section>
  );
}