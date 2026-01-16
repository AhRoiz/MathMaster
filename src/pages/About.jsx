import React from 'react';
import { Info, Target, Globe, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen animate-fade-in-up">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
          <Info className="w-4 h-4" /><span>Tentang Kami</span>
        </div>
        <h1 className="text-5xl font-bold mb-6">Misi <span className="text-blue-400">MathMaster</span></h1>
        <p className="text-slate-400 text-lg">Membangun generasi emas Indonesia yang cinta matematika.</p>
      </div>
      
      <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl mb-12 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Target className="w-6 h-6 text-red-500" /> Visi & Misi</h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            MathMaster hadir sebagai solusi atas kesenjangan pendidikan di Indonesia. Kami percaya bahwa setiap anak, di manapun mereka berada, berhak mendapatkan akses ke materi pembelajaran berkualitas tinggi secara gratis. Kami ingin menghapus stigma bahwa matematika itu sulit dan menakutkan, mengubahnya menjadi petualangan yang menyenangkan.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Platform ini dibangun dengan semangat "Open Source" dan kolaborasi. Siapapun bisa berkontribusi, baik itu kode, materi, maupun tenaga pengajar. Karena mencerdaskan bangsa adalah tugas kita bersama.
          </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl text-center">
            <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Akses Tanpa Batas</h4>
            <p className="text-slate-400 text-sm">Gratis selamanya. Tanpa login, tanpa paywall, tanpa iklan yang mengganggu.</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl text-center">
            <Users className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Komunitas Peduli</h4>
            <p className="text-slate-400 text-sm">Didukung oleh relawan pengajar dan kontributor dari seluruh Indonesia.</p>
          </div>
      </div>
    </section>
  );
}