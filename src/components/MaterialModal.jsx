import React from 'react';
import { X, Globe, PlayCircle, ChevronRight } from 'lucide-react';

export default function MaterialModal({ node, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-lg bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
        <div className="px-6 py-8 bg-gradient-to-r from-cyan-600 to-blue-600 relative overflow-hidden">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"><X className="w-5 h-5" /></button>
          <h3 className="text-2xl font-bold text-white relative z-10">{node.title}</h3>
          <p className="text-white/80 mt-2 relative z-10 text-sm">{node.desc}</p>
        </div>
        <div className="p-6">
          {node.resources.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center"><Globe className="w-8 h-8 text-slate-400" /></div>
              <div><h4 className="text-lg font-bold text-white">Materi Segera Hadir</h4><p className="text-slate-400 text-sm mt-1 max-w-xs mx-auto">Link materi ini sedang dikurasi oleh tim kami agar kamu mendapatkan yang terbaik.</p></div>
            </div>
          ) : (
            <div className="space-y-3">
              {node.resources.map((res, idx) => (
                <a key={idx} href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500 hover:bg-slate-700/50 transition-all group">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${res.type === 'youtube' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'}`}>
                    {res.type === 'youtube' ? <PlayCircle className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
                  </div>
                  <div className="flex-1"><h5 className="font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors line-clamp-1">{res.title}</h5><span className="text-xs text-slate-500 capitalize">{res.type} Source</span></div>
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}