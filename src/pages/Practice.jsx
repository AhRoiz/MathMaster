import React from 'react';
import { PenTool, Trophy, Sparkles } from 'lucide-react';

export default function Practice({ activeLevel, setActiveLevel, activeClass, setActiveClass, curriculumData, onStartQuiz, onStartOlympiad }) {

  const levelData = curriculumData[activeLevel];
  // Pakai 'safeClass' untuk menghindari akses ke data yang undefined
  const safeClass = levelData.classes[activeClass] ? activeClass : Object.keys(levelData.classes)[0];
  const currentNodes = levelData.hasClasses ? levelData.classes[safeClass].nodes : levelData.nodes;

  const getClassOptions = () => {
    if (activeLevel === "SD") return [1, 2, 3, 4, 5, 6];
    if (activeLevel === "SMP") return [7, 8, 9];
    if (activeLevel === "SMA") return [10, 11, 12];
    return [];
  };

  const handleLevelChange = (level) => {
    setActiveLevel(level);
    if (level === "SD") setActiveClass(1);
    if (level === "SMP") setActiveClass(7);
    if (level === "SMA") setActiveClass(10);
  };

  return (
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

      {/* OSN/Olympiad Challenge Section */}
      {levelData.olympiadQuiz && (
        <div className="mb-12 relative overflow-hidden">
          <div className={`bg-gradient-to-r ${levelData.theme} p-1 rounded-2xl`}>
            <div className="bg-slate-900 rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-amber-500/20 rounded-2xl flex items-center justify-center border-2 border-amber-500/50">
                    <Trophy className="w-10 h-10 text-amber-400" />
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span className="text-amber-400 font-bold text-sm tracking-widest uppercase">Mode Olimpiade</span>
                    <span className="px-2 py-0.5 bg-amber-400 text-slate-900 text-xs font-black rounded-full">OSN</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Tantangan Olimpiade {activeLevel}</h3>
                  <p className="text-slate-400 text-sm md:text-base">
                    Uji kemampuanmu dengan soal-soal setara Olimpiade Sains Nasional.
                    Raih medali emas dengan skor tertinggi!
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => onStartOlympiad(activeLevel, levelData.olympiadQuiz)}
                    className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-amber-900/30 flex items-center gap-2"
                  >
                    <Trophy className="w-5 h-5" />
                    Mulai Tantangan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section Header for Chapter Quizzes */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">Latihan Per Bab - Kelas {activeClass}</h2>
        <p className="text-slate-400 text-sm">Pilih materi untuk berlatih soal-soal sesuai bab</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentNodes.map((node, idx) => (
          <div key={idx} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/50 transition-all flex flex-col h-full group">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${levelData.theme} opacity-80 group-hover:opacity-100 transition-opacity`}>
                <PenTool className="text-white w-6 h-6" />
              </div>
              {node.quiz && node.quiz.length > 0 ? (
                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded font-bold">{node.quiz.length} Soal</span>
              ) : (
                <span className="bg-slate-700 text-slate-400 text-xs px-2 py-1 rounded font-bold">Belum Tersedia</span>
              )}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{node.title}</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">{node.desc}</p>

            <button
              onClick={() => onStartQuiz(node)}
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
  );
}
