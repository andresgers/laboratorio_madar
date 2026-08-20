import React from 'react';
import { Users, BookOpen, ArrowRight, Dna } from 'lucide-react';
import { researchGroups } from '../data/labData';

export const ResearchGroups = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-science-900/60 border border-science-700/60 text-science-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Dna className="w-4 h-4" />
            <span>Divisiones Científicas</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-6">
            Grupos de Investigación
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Nuestros equipos especializados abordan los desafíos clave de la biología molecular y la bioinformática contemporánea.
          </p>
        </div>

        {/* Groups List / Editorial Blocks */}
        <div className="space-y-16">
          {researchGroups.map((group, idx) => (
            <div 
              key={group.id}
              className={`bg-slate-900/80 rounded-2xl border border-science-900/60 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={`lg:col-span-5 h-72 lg:h-full relative ${idx % 2 === 1 ? 'lg:col-start-8' : ''}`}>
                <img 
                  src={group.image} 
                  alt={group.name} 
                  className="w-full h-full object-cover filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded bg-lab-dark/95 border border-science-700/60 text-science-300 text-xs font-mono uppercase tracking-widest">
                  {group.code}
                </span>
              </div>

              <div className={`lg:col-span-7 p-8 lg:p-12 space-y-6 ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <span className="text-xs font-mono text-science-400 uppercase tracking-widest block mb-2">
                    Líder: {group.lead} ({group.membersCount} investigadores)
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                    {group.name}
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {group.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-science-400 tracking-wider mb-2">Áreas Temáticas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.thematicAreas.map((area, i) => (
                      <span key={i} className="px-3 py-1 rounded bg-slate-950 text-slate-300 text-xs border border-slate-800">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-science-400 tracking-wider mb-2">Líneas de Investigación Asociadas:</h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {group.associatedLines.map((line, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-science-500" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-mono uppercase text-science-400 tracking-wider mb-2">Publicaciones Clave:</h4>
                  <ul className="space-y-1 text-xs text-slate-400 font-mono">
                    {group.keyPublications.map((pub, i) => (
                      <li key={i} className="truncate">• {pub}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
