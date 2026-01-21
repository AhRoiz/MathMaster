import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Trophy, X, CheckCircle, XCircle, ChevronRight, Award, Medal, Star, Sparkles, Clock, Timer, Settings, Eye, EyeOff } from 'lucide-react';

// Shuffle array using Fisher-Yates algorithm
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const QUIZ_SIZE = 10;
const DEFAULT_TIME_LIMIT = 20;

const levelThemes = {
    SD: { gradient: "from-emerald-500 to-green-600", text: "text-emerald-400" },
    SMP: { gradient: "from-blue-500 to-indigo-600", text: "text-blue-400" },
    SMA: { gradient: "from-purple-500 to-fuchsia-600", text: "text-purple-400" }
};

export default function OlympiadQuizModal({ level, quizData, onClose }) {
    const [showSettings, setShowSettings] = useState(true);
    const [timeLimit, setTimeLimit] = useState(DEFAULT_TIME_LIMIT);
    const [quizStarted, setQuizStarted] = useState(false);
    const [showReview, setShowReview] = useState(false);

    const selectedQuiz = useMemo(() => {
        return shuffleArray(quizData).slice(0, Math.min(QUIZ_SIZE, quizData.length));
    }, [quizData]);

    const [quizState, setQuizState] = useState({
        currentQ: 0, score: 0, showResult: false, selectedOpt: null, isCorrect: null, timedOut: false
    });

    const [timeLeft, setTimeLeft] = useState(timeLimit);
    const [answers, setAnswers] = useState([]); // Track all answers for review
    const timerRef = useRef(null);
    const questionRef = useRef(quizState.currentQ);

    const theme = levelThemes[level] || levelThemes.SD;

    // Update question ref when it changes
    useEffect(() => {
        questionRef.current = quizState.currentQ;
    }, [quizState.currentQ]);

    // Timer effect - only runs countdown
    useEffect(() => {
        if (!quizStarted || quizState.showResult) return;

        // Clear any existing timer
        if (timerRef.current) clearInterval(timerRef.current);

        // Only start timer if no answer selected yet
        if (quizState.selectedOpt === null) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        // Time up - handle timeout
                        clearInterval(timerRef.current);
                        handleTimeoutInternal();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [quizStarted, quizState.showResult, quizState.currentQ, quizState.selectedOpt]);

    const handleTimeoutInternal = () => {
        const currentQuestion = questionRef.current;
        setQuizState(prev => ({
            ...prev,
            selectedOpt: -1,
            isCorrect: false,
            timedOut: true,
            score: prev.score - 5
        }));
        // Record timeout answer
        setAnswers(prev => [...prev, {
            question: selectedQuiz[currentQuestion].question,
            options: selectedQuiz[currentQuestion].options,
            correctAnswer: selectedQuiz[currentQuestion].correctAnswer,
            userAnswer: -1,
            timedOut: true
        }]);
    };

    const handleAnswerClick = (optIndex) => {
        if (quizState.selectedOpt !== null) return;
        if (timerRef.current) clearInterval(timerRef.current);

        const isCorrect = optIndex === selectedQuiz[quizState.currentQ].correctAnswer;
        setQuizState({
            ...quizState,
            selectedOpt: optIndex,
            isCorrect: isCorrect,
            timedOut: false,
            score: isCorrect ? quizState.score + 10 : quizState.score - 5
        });
        // Record answer
        setAnswers(prev => [...prev, {
            question: selectedQuiz[quizState.currentQ].question,
            options: selectedQuiz[quizState.currentQ].options,
            correctAnswer: selectedQuiz[quizState.currentQ].correctAnswer,
            userAnswer: optIndex,
            timedOut: false
        }]);
    };

    const nextQuestion = () => {
        if (quizState.currentQ + 1 < selectedQuiz.length) {
            setTimeLeft(timeLimit); // Reset timer BEFORE state change
            setQuizState(prev => ({
                ...prev,
                currentQ: prev.currentQ + 1,
                selectedOpt: null,
                isCorrect: null,
                timedOut: false
            }));
        } else {
            setQuizState(prev => ({ ...prev, showResult: true }));
        }
    };

    const startQuiz = () => {
        setQuizStarted(true);
        setShowSettings(false);
        setTimeLeft(timeLimit);
        setAnswers([]);
    };

    const getMedalInfo = () => {
        const maxScore = selectedQuiz.length * 10;
        const percentage = (quizState.score / maxScore) * 100;
        if (percentage >= 80) return { icon: Trophy, color: "text-yellow-400", label: "EMAS", bg: "bg-yellow-500/20", border: "border-yellow-500" };
        if (percentage >= 60) return { icon: Medal, color: "text-slate-300", label: "PERAK", bg: "bg-slate-400/20", border: "border-slate-400" };
        if (percentage >= 40) return { icon: Award, color: "text-orange-400", label: "PERUNGGU", bg: "bg-orange-500/20", border: "border-orange-500" };
        return { icon: Star, color: "text-blue-400", label: "PESERTA", bg: "bg-blue-500/20", border: "border-blue-500" };
    };

    const medal = getMedalInfo();
    const MedalIcon = medal.icon;
    const getTimerColor = () => timeLeft <= 5 ? "text-red-500 animate-pulse" : timeLeft <= 10 ? "text-orange-400" : "text-emerald-400";

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md"></div>
            <div className="relative w-full max-w-2xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-500/50 rounded-2xl shadow-2xl overflow-hidden animate-scale-in flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className={`px-6 py-4 border-b border-amber-500/30 flex justify-between items-center bg-gradient-to-r ${theme.gradient}`}>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-lg"><Sparkles className="w-6 h-6 text-white" /></div>
                        <div>
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                Tantangan Olimpiade {level}
                                <span className="text-xs px-2 py-0.5 bg-amber-400 text-slate-900 rounded-full font-black">OSN</span>
                            </h3>
                            <p className="text-white/80 text-sm">Mode Time Attack</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto flex-1">
                    {/* Settings Screen */}
                    {showSettings && (
                        <div className="text-center py-8">
                            <div className="w-20 h-20 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 border-amber-500/50">
                                <Settings className="w-10 h-10 text-amber-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Pengaturan Time Attack</h2>
                            <p className="text-slate-400 mb-8">Atur waktu per soal (dalam detik)</p>

                            <div className="flex items-center justify-center gap-4 mb-8">
                                <button onClick={() => setTimeLimit(prev => Math.max(5, prev - 5))} className="w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xl">-</button>
                                <div className="w-24 h-16 bg-slate-800 rounded-xl flex items-center justify-center border-2 border-amber-500">
                                    <span className="text-3xl font-black text-amber-400">{timeLimit}</span>
                                </div>
                                <button onClick={() => setTimeLimit(prev => Math.min(60, prev + 5))} className="w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xl">+</button>
                            </div>

                            <div className="bg-slate-800/50 rounded-xl p-4 mb-8 text-left">
                                <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Timer className="w-4 h-4 text-amber-400" />Aturan Time Attack</h4>
                                <ul className="text-slate-400 text-sm space-y-1">
                                    <li>✓ Jawaban benar: <span className="text-green-400 font-bold">+10 poin</span></li>
                                    <li>✗ Jawaban salah: <span className="text-red-400 font-bold">-5 poin</span></li>
                                    <li>⏰ Waktu habis: <span className="text-red-400 font-bold">-5 poin</span></li>
                                </ul>
                            </div>

                            <button onClick={startQuiz} className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold rounded-xl transition-all shadow-lg flex items-center gap-2 mx-auto">
                                <Trophy className="w-5 h-5" />Mulai Tantangan!
                            </button>
                        </div>
                    )}

                    {/* Quiz Questions */}
                    {quizStarted && !quizState.showResult && (
                        <>
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden flex-1 mr-4">
                                    <div className={`bg-gradient-to-r ${theme.gradient} h-3 rounded-full transition-all duration-500`} style={{ width: `${((quizState.currentQ + 1) / selectedQuiz.length) * 100}%` }}></div>
                                </div>
                                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 border-2 ${timeLeft <= 5 ? 'border-red-500' : 'border-slate-600'}`}>
                                    <Clock className={`w-5 h-5 ${getTimerColor()}`} />
                                    <span className={`text-xl font-black ${getTimerColor()}`}>{timeLeft}s</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`${theme.text} font-bold text-sm tracking-widest uppercase`}>Soal {quizState.currentQ + 1} dari {selectedQuiz.length}</span>
                                    <span className="text-green-400 text-xs px-2 py-0.5 bg-green-400/20 rounded-full">+10</span>
                                    <span className="text-red-400 text-xs px-2 py-0.5 bg-red-400/20 rounded-full">-5</span>
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold text-white leading-relaxed">{selectedQuiz[quizState.currentQ].question}</h4>
                            </div>

                            {quizState.timedOut && (
                                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-center">
                                    <span className="text-red-400 font-bold">⏰ Waktu Habis! -5 poin</span>
                                </div>
                            )}

                            <div className="space-y-3">
                                {selectedQuiz[quizState.currentQ].options.map((opt, idx) => {
                                    let btnClass = "bg-slate-700/80 hover:bg-slate-600 text-slate-200 border border-slate-600 hover:border-slate-500";
                                    if (quizState.selectedOpt !== null) {
                                        if (idx === selectedQuiz[quizState.currentQ].correctAnswer) btnClass = "bg-green-600 text-white ring-2 ring-green-400 border-green-400";
                                        else if (idx === quizState.selectedOpt && !quizState.timedOut) btnClass = "bg-red-600 text-white border-red-400";
                                        else btnClass = "bg-slate-800 text-slate-500 opacity-40 border-slate-700";
                                    }
                                    return (
                                        <button key={idx} onClick={() => handleAnswerClick(idx)} disabled={quizState.selectedOpt !== null} className={`w-full text-left p-4 rounded-xl font-medium transition-all ${btnClass}`}>
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">{String.fromCharCode(65 + idx)}</div>
                                                <span className="flex-1">{opt}</span>
                                                {quizState.selectedOpt !== null && idx === selectedQuiz[quizState.currentQ].correctAnswer && <CheckCircle className="w-5 h-5 text-white" />}
                                                {quizState.selectedOpt !== null && idx === quizState.selectedOpt && idx !== selectedQuiz[quizState.currentQ].correctAnswer && !quizState.timedOut && <XCircle className="w-5 h-5 text-white" />}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </>
                    )}

                    {/* Results Screen */}
                    {quizState.showResult && !showReview && (
                        <div className="text-center py-8">
                            <div className={`w-28 h-28 ${medal.bg} ${medal.border} border-2 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce`}>
                                <MedalIcon className={`w-14 h-14 ${medal.color}`} />
                            </div>
                            <div className="mb-2"><span className={`text-sm font-bold ${medal.color} tracking-widest uppercase`}>Medali {medal.label}</span></div>
                            <h2 className="text-3xl font-bold text-white mb-2">Tantangan Olimpiade Selesai!</h2>
                            <p className="text-slate-400 mb-6">Hasil kompetisi mu:</p>
                            <div className={`text-6xl font-black ${quizState.score >= 0 ? theme.text : 'text-red-400'} mb-2`}>
                                {quizState.score}<span className="text-2xl text-slate-500 font-medium">/ {selectedQuiz.length * 10}</span>
                            </div>
                            <p className="text-slate-400 text-sm mb-8">
                                {quizState.score >= 80 ? "Luar biasa! Kamu siap untuk OSN!" : quizState.score >= 60 ? "Hebat! Terus berlatih untuk raih emas!" : quizState.score >= 40 ? "Bagus! Kamu sudah di jalur yang tepat." : "Jangan menyerah! Latihan membuat sempurna."}
                            </p>
                            <div className="flex gap-3 justify-center">
                                <button onClick={() => setShowReview(true)} className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition-colors flex items-center gap-2">
                                    <Eye className="w-5 h-5" />Lihat Pembahasan
                                </button>
                                <button onClick={onClose} className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors">Tutup</button>
                            </div>
                        </div>
                    )}

                    {/* Review Screen */}
                    {showReview && (
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
                                            {ans.timedOut && <p className="text-red-400 text-sm">⏰ Waktu habis</p>}
                                            <p className="text-sm"><span className="text-slate-400">Jawaban kamu: </span>
                                                <span className={ans.userAnswer === ans.correctAnswer ? 'text-green-400' : 'text-red-400'}>
                                                    {ans.userAnswer === -1 ? 'Tidak dijawab' : ans.options[ans.userAnswer]}
                                                </span>
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

                {/* Footer */}
                {quizStarted && !quizState.showResult && (
                    <div className="px-6 py-4 bg-gradient-to-r from-slate-900 to-slate-800 border-t border-amber-500/30 flex justify-between items-center">
                        <div className="text-slate-400 text-sm">Skor: <span className={`font-bold ${quizState.score >= 0 ? theme.text : 'text-red-400'}`}>{quizState.score}</span></div>
                        <button onClick={nextQuestion} disabled={quizState.selectedOpt === null} className={`px-6 py-2 rounded-lg font-bold transition-all flex items-center gap-2 ${quizState.selectedOpt !== null ? `bg-gradient-to-r ${theme.gradient} hover:opacity-90 text-white` : 'bg-slate-800 text-slate-600 cursor-not-allowed'}`}>
                            {quizState.currentQ + 1 === selectedQuiz.length ? "Lihat Hasil" : "Soal Selanjutnya"}<ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
