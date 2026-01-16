import React, { useState } from 'react';
import { Trophy, X, CheckCircle, XCircle, ChevronRight } from 'lucide-react';

export default function QuizModal({ node, onClose }) {
  const [quizState, setQuizState] = useState({ currentQ: 0, score: 0, showResult: false, selectedOpt: null, isCorrect: null });
  
  const handleAnswerClick = (optIndex) => {
    if (quizState.selectedOpt !== null) return; 
    const isCorrect = optIndex === node.quiz[quizState.currentQ].correctAnswer;
    setQuizState({ ...quizState, selectedOpt: optIndex, isCorrect: isCorrect, score: isCorrect ? quizState.score + 10 : quizState.score });
  };

  const nextQuestion = () => {
    if (quizState.currentQ + 1 < node.quiz.length) {
      setQuizState({ ...quizState, currentQ: quizState.currentQ + 1, selectedOpt: null, isCorrect: null });
    } else {
      setQuizState({ ...quizState, showResult: true });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"></div>
      <div className="relative w-full max-w-2xl bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-scale-in flex flex-col max-h-[90vh]">
        <div className="px-6 py-4 border-b border-slate-700 flex justify-between items-center bg-slate-900">
          <div><h3 className="text-lg font-bold text-emerald-400">Latihan Soal</h3><p className="text-slate-400 text-sm">{node.title}</p></div>
          <button onClick={onClose} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-6 overflow-y-auto">
          {!quizState.showResult ? (
            <>
              <div className="w-full bg-slate-700 h-2 rounded-full mb-6"><div className="bg-emerald-500 h-2 rounded-full transition-all duration-300" style={{ width: `${((quizState.currentQ + 1) / node.quiz.length) * 100}%` }}></div></div>
              <div className="mb-8"><span className="text-emerald-500 font-bold text-sm tracking-widest uppercase mb-2 block">Soal {quizState.currentQ + 1} dari {node.quiz.length}</span><h4 className="text-2xl font-bold text-white leading-relaxed">{node.quiz[quizState.currentQ].question}</h4></div>
              <div className="space-y-3">
                {node.quiz[quizState.currentQ].options.map((opt, idx) => {
                  let btnClass = "bg-slate-700 hover:bg-slate-600 text-slate-200";
                  if (quizState.selectedOpt !== null) {
                    if (idx === node.quiz[quizState.currentQ].correctAnswer) btnClass = "bg-green-600 text-white ring-2 ring-green-400";
                    else if (idx === quizState.selectedOpt) btnClass = "bg-red-600 text-white";
                    else btnClass = "bg-slate-800 text-slate-500 opacity-50";
                  }
                  return (
                    <button key={idx} onClick={() => handleAnswerClick(idx)} disabled={quizState.selectedOpt !== null} className={`w-full text-left p-4 rounded-xl font-medium transition-all ${btnClass}`}>
                      <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full border border-current flex items-center justify-center text-sm font-bold opacity-70">{String.fromCharCode(65 + idx)}</div><span>{opt}</span>
                        {quizState.selectedOpt !== null && idx === node.quiz[quizState.currentQ].correctAnswer && <CheckCircle className="ml-auto w-5 h-5 text-white" />}
                        {quizState.selectedOpt !== null && idx === quizState.selectedOpt && idx !== node.quiz[quizState.currentQ].correctAnswer && <XCircle className="ml-auto w-5 h-5 text-white" />}
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
              <div className="text-6xl font-black text-emerald-400 mb-8">{quizState.score} <span className="text-2xl text-slate-500 font-medium">/ {node.quiz.length * 10}</span></div>
              <button onClick={onClose} className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors">Tutup & Pilih Materi Lain</button>
            </div>
          )}
        </div>
        {!quizState.showResult && (
          <div className="px-6 py-4 bg-slate-900 border-t border-slate-700 flex justify-end">
            <button onClick={nextQuestion} disabled={quizState.selectedOpt === null} className={`px-6 py-2 rounded-lg font-bold transition-all flex items-center gap-2 ${quizState.selectedOpt !== null ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-900' : 'bg-slate-800 text-slate-600 cursor-not-allowed'}`}>
              {quizState.currentQ + 1 === node.quiz.length ? "Lihat Hasil" : "Soal Selanjutnya"} <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}