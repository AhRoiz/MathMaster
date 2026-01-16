import React from 'react';
import { PenTool } from 'lucide-react';

export default function Practice({ activeLevel, setActiveLevel, activeClass, setActiveClass, curriculumData, onStartQuiz }) {
  
  const levelData = curriculumData[activeLevel];
  // PENCEGAHAN ERROR: Pakai 'safeClass' untuk menghindari akses ke data yang undefined
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