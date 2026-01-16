import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FloatingMenu from './components/FloatingMenu';
import ChatModal from './components/ChatModal';
import QuizModal from './components/QuizModal';
import MaterialModal from './components/MaterialModal';

// Pages
import Home from './pages/Home';
import Practice from './pages/Practice';
import WallOfFame from './pages/WallOfFame';
import About from './pages/About';
import Updates from './pages/Updates';

// Data
import { curriculumData } from './data/curriculum';

export default function App() {
  const [activePage, setActivePage] = useState("home"); 
  const [activeLevel, setActiveLevel] = useState("SD");
  const [activeClass, setActiveClass] = useState(1);
  const [selectedNode, setSelectedNode] = useState(null); // Untuk Material
  const [quizNode, setQuizNode] = useState(null);         // Untuk Quiz
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [completedNodes, setCompletedNodes] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  // Effects
  useEffect(() => {
    const saved = localStorage.getItem('mathmaster_progress');
    if (saved) setCompletedNodes(JSON.parse(saved));
    
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCompletion = (nodeId) => {
    const newProgress = { ...completedNodes, [nodeId]: !completedNodes[nodeId] };
    setCompletedNodes(newProgress);
    localStorage.setItem('mathmaster_progress', JSON.stringify(newProgress));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-20">
      
      {/* 1. Navbar */}
      <Navbar 
        isScrolled={isScrolled} 
        activePage={activePage} 
        handleNavClick={setActivePage} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      {/* 2. Main Content (Routing Sederhana) */}
      <main>
        {activePage === 'home' && (
          <Home 
            activeLevel={activeLevel} setActiveLevel={setActiveLevel}
            activeClass={activeClass} setActiveClass={setActiveClass}
            curriculumData={curriculumData}
            completedNodes={completedNodes} toggleCompletion={toggleCompletion}
            onSelectNode={setSelectedNode}
          />
        )}
        
        {activePage === 'practice' && (
           <Practice 
             activeLevel={activeLevel} setActiveLevel={setActiveLevel}
             activeClass={activeClass} setActiveClass={setActiveClass}
             curriculumData={curriculumData}
             onStartQuiz={setQuizNode}
           />
        )}

        {activePage === 'wall' && <WallOfFame />}
        {activePage === 'about' && <About />}
        {activePage === 'updates' && <Updates />}
      </main>

      {/* 3. Global Components */}
      <FloatingMenu 
        isOpen={isMenuOpen} 
        setIsOpen={setIsMenuOpen} 
        openChat={() => setIsChatOpen(true)} 
      />

      {/* 4. Modals */}
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      
      {selectedNode && (
        <MaterialModal node={selectedNode} onClose={() => setSelectedNode(null)} />
      )}
      
      {quizNode && (
        <QuizModal node={quizNode} onClose={() => setQuizNode(null)} />
      )}

      {/* Global Styles */}
      <style>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
        @keyframes scale-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-scale-in { animation: scale-in 0.2s ease-out forwards; }
      `}</style>
    </div>
  );
}