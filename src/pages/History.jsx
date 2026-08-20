import React from 'react';
import { Award, Calendar, CheckCircle2, Milestone } from 'lucide-react';
import { labInfo, historyData } from '../data/labData';

export const History = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-science-900/60 border border-science-700/60 text-science-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Milestone className="w-4 h-4" />
            <span>Memoria Institucional</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-6">
            Historia y Evolución del Laboratorio MADAR
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            La crónica de construcción de una institución científica dedicada a la vanguardia en biología molecular y computación avanzada.
          </p>
        </div>

        {/* Narrative Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="bg-slate-900/60 p-8 rounded-2xl border border-science-900/60">
            <h3 className="text-xl font-serif font-bold text-white mb-4 flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-science-500" />
              <span>Origen e Institucionalización</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              {historyData.origins}
            </p>
          </div>
          <div className="bg-slate-900/60 p-8 rounded-2xl border border-science-900/60">
            <h3 className="text-xl font-serif font-bold text-white mb-4 flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-science-400" />
              <span>Evolución Tecnológica y Científica</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              {historyData.evolution}
            </p>
          </div>
        </div>

        {/* Visual Timeline */}
        <div className="relative border-l-2 border-science-800/80 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
          <h2 className="text-2xl font-serif font-bold text-white mb-8 -ml-6 md:-ml-32">
            Hitos Científicos e Institucionales
          </h2>

          {historyData.milestones.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-science-500 flex items-center justify-center group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 rounded-full bg-science-300" />
              </div>

              {/* Year badge for desktop (left aligned) */}
              <div className="hidden md:block absolute -left-32 top-1 text-right w-20 font-mono font-bold text-science-400 text-lg">
                {milestone.year}
              </div>

              <div className="bg-slate-900/80 p-6 rounded-xl border border-science-900/60 shadow-lg hover:border-science-600/60 transition-all">
                <span className="md:hidden inline-block px-2.5 py-1 rounded bg-science-900/80 text-science-300 text-xs font-mono font-bold mb-2">
                  {milestone.year}
                </span>
                <h3 className="text-lg font-serif font-bold text-white mb-2">
                  {milestone.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
