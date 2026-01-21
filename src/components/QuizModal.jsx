import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Trophy, X, CheckCircle, XCircle, ChevronRight, Clock, Eye, EyeOff } from 'lucide-react';

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const QUIZ_SIZE = 5;

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export default function QuizModal({ node, onClose }) {
  const selectedQuiz = useMemo(() => {
    return shuffleArray(node.quiz).slice(0, Math.min(QUIZ_SIZE, node.quiz.length));
  }, [node.quiz]);

  const [quizState, setQuizState] = useState({ currentQ: 0, score: 0, showResult: false, selectedOpt: null, isCorrect: null });
  const [elapsedTime, setElapsedTime] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showReview, setShowReview] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  useEffect(() => {
    if (quizState.showResult && timerRef.current) clearInterval(timerRef.current);
  }, [quizState.showResult]);

  const handleAnswerClick = (optIndex) => {
    if (quizState.selectedOpt !== null) return;
    const isCorrect = optIndex === selectedQuiz[quizState.currentQ].correctAnswer;
    setQuizState({ ...quizState, selectedOpt: optIndex, isCorrect, score: isCorrect ? quizState.score + 10 : quizState.score });
    setAnswers(prev => [...prev, {
      question: selectedQuiz[quizState.currentQ].question,
      options: selectedQuiz[quizState.currentQ].options,
      correctAnswer: selectedQuiz[quizState.currentQ].correctAnswer,
      userAnswer: optIndex
    }]);
  };

  const nextQuestion = () => {
    if (quizState.currentQ + 1 < selectedQuiz.length) {
      setQuizState({ ...quizState, currentQ: quizState.currentQ + 1, selectedOpt: null, isCorrect: null });
    } else {
      setQuizState({ ...quizState, showResult: true });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"></div>
      <div className="relative w-full max-w-2xl bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-scale-in flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-700 flex justify-between items-center bg-slate-900">
          <div>
            <h3 className="text-lg font-bold text-emerald-400">Latihan Soal</h3>
            <p className="text-slate-400 text-sm">{node.title}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-600">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-mono font-bold">{formatTime(elapsedTime)}</span>
            </div>
            <button onClick={onClose} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          {!quizState.showResult ? (
            <>
              <div className="w-full bg-slate-700 h-2 rounded-full mb-6">
                <div className="bg-emerald-500 h-2 rounded-full transition-all duration-300" style={{ width: `${((quizState.currentQ + 1) / selectedQuiz.length) * 100}%` }}></div>
              </div>
              <div className="mb-8">
                <span className="text-emerald-500 font-bold text-sm tracking-widest uppercase mb-2 block">Soal {quizState.currentQ + 1} dari {selectedQuiz.length}</span>
                <h4 className="text-2xl font-bold text-white leading-relaxed">{selectedQuiz[quizState.currentQ].question}</h4>
              </div>
              <div className="space-y-3">
                {selectedQuiz[quizState.currentQ].options.map((opt, idx) => {
                  let btnClass = "bg-slate-700 hover:bg-slate-600 text-slate-200";
                  if (quizState.selectedOpt !== null) {
                    if (idx === selectedQuiz[quizState.currentQ].correctAnswer) btnClass = "bg-green-600 text-white ring-2 ring-green-400";
                    else if (idx === quizState.selectedOpt) btnClass = "bg-red-600 text-white";
                    else btnClass = "bg-slate-800 text-slate-500 opacity-50";
                  }
                  return (
                    <button key={idx} onClick={() => handleAnswerClick(idx)} disabled={quizState.selectedOpt !== null} className={`w-full text-left p-4 rounded-xl font-medium transition-all ${btnClass}`}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center text-sm font-bold opacity-70">{String.fromCharCode(65 + idx)}</div>
                        <span>{opt}</span>
                        {quizState.selectedOpt !== null && idx === selectedQuiz[quizState.currentQ].correctAnswer && <CheckCircle className="ml-auto w-5 h-5 text-white" />}
                        {quizState.selectedOpt !== null && idx === quizState.selectedOpt && idx !== selectedQuiz[quizState.currentQ].correctAnswer && <XCircle className="ml-auto w-5 h-5 text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          ) : !showReview ? (
            <div className="text-center py-10">
              <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-12 h-12 text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Latihan Selesai!</h2>
              <p className="text-slate-400 mb-4">Kamu mendapatkan skor:</p>
              <div className="text-6xl font-black text-emerald-400 mb-4">{quizState.score} <span className="text-2xl text-slate-500 font-medium">/ {selectedQuiz.length * 10}</span></div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-700/50 border border-slate-600 mb-8">
                <Clock className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">Waktu pengerjaan:</span>
                <span className="text-emerald-400 font-bold font-mono">{formatTime(elapsedTime)}</span>
              </div>

              <div className="flex gap-3 justify-center">
                <button onClick={() => setShowReview(true)} className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors flex items-center gap-2">
                  <Eye className="w-5 h-5" />Lihat Pembahasan
                </button>
                <button onClick={onClose} className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors">Tutup</button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Pembahasan Soal</h2>
                <button onClick={() => setShowReview(false)} className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300"><EyeOff className="w-5 h-5" /></button>
              </div>
              <div className="space-y-4">
                {answers.map((ans, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border ${ans.userAnswer === ans.correctAnswer ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
                    <div className="flex items-start gap-3 mb-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${ans.userAnswer === ans.correctAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{idx + 1}</span>
                      <p className="text-white font-medium flex-1">{ans.question}</p>
                    </div>
                    <div className="ml-11 space-y-2">
                      <p className="text-sm"><span className="text-slate-400">Jawaban kamu: </span>
                        <span className={ans.userAnswer === ans.correctAnswer ? 'text-green-400' : 'text-red-400'}>{ans.options[ans.userAnswer]}</span>
                      </p>
                      <p className="text-sm"><span className="text-slate-400">Jawaban benar: </span><span className="text-green-400">{ans.options[ans.correctAnswer]}</span></p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <button onClick={onClose} className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors">Tutup</button>
              </div>
            </div>
          )}
        </div>

        {!quizState.showResult && (
          <div className="px-6 py-4 bg-slate-900 border-t border-slate-700 flex justify-between items-center">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Clock className="w-4 h-4" />
              <span className="font-mono">{formatTime(elapsedTime)}</span>
            </div>
            <button onClick={nextQuestion} disabled={quizState.selectedOpt === null} className={`px-6 py-2 rounded-lg font-bold transition-all flex items-center gap-2 ${quizState.selectedOpt !== null ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-900' : 'bg-slate-800 text-slate-600 cursor-not-allowed'}`}>
              {quizState.currentQ + 1 === selectedQuiz.length ? "Lihat Hasil" : "Soal Selanjutnya"} <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}