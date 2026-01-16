import React from 'react';
import { History, Calendar, Rocket, Map } from 'lucide-react';
import { updateLog, futureRoadmap } from '../data/constants';

export default function Updates() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen animate-fade-in-up">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-sm font-medium mb-6">
          <History className="w-4 h-4" /><span>Update Log</span>
        </div>
        <h1 className="text-5xl font-bold mb-6">Catatan <span className="text-pink-400">Perubahan</span></h1>
        <p className="text-slate-400 text-lg">Perjalanan kami mengembangkan MathMaster dari waktu ke waktu.</p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {updateLog.map((log, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-800 group-[.is-active]:bg-pink-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-white">{log.title}</div>
                  <time className="font-caveat font-medium text-pink-400">{log.date}</time>
                </div>
                <div className="text-slate-400 text-sm">{log.desc}</div>
              </div>
            </div>
          ))}
      </div>

      {/* ROADMAP MASA DEPAN */}
      <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3"><Rocket className="w-6 h-6 text-orange-500" /> Rencana Kedepan (Roadmap)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {futureRoadmap.map((plan, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex items-center gap-3">
                  <Map className="w-5 h-5 text-orange-400" />
                  <span className="text-slate-300 font-medium">{plan}</span>
                </div>
            ))}
          </div>
      </div>
    </section>
  );
}