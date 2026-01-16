import React from 'react';
import { Star, TrendingUp, GraduationCap, ChevronDown, CheckCircle, Square, CheckSquare, ChevronRight, Award } from 'lucide-react';

export default function Home({ activeLevel, setActiveLevel, activeClass, setActiveClass, curriculumData, completedNodes, toggleCompletion, onSelectNode }) {
  
  const levelData = curriculumData[activeLevel];
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
    <>
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
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
        {/* LEVEL SELECTOR (DIPERBAIKI) */}
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
                      onClick={() => onSelectNode(node)} 
                      className="w-full text-left group relative block"
                    >
                      <div className={`absolute inset-0 rounded-2xl transform transition-transform group-hover:-translate-y-1 group-hover:shadow-xl border ${isCompleted ? 'bg-emerald-900/20 border-emerald-500/50 shadow-lg shadow-emerald-900/10' : 'bg-gradient-to-r from-slate-800 to-slate-800/50 border-slate-700 group-hover:border-cyan-500/50'}`}></div>
                      
                      <div className="relative p-6">
                        <div className="absolute top-4 right-4 z-20 flex gap-2">
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
  );
}