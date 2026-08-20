import React from 'react';
import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import { eventsData } from '../data/labData';

export const Events = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-science-900/60 border border-science-700/60 text-science-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Calendar className="w-4 h-4" />
            <span>Agenda Académica</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-6">
            Eventos Destacados
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Los hitos más importantes del Laboratorio MADAR: su inauguración con el ministro Daniel Filmus, la recorrida oficial y la puesta en marcha de sus investigaciones.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {eventsData.map((ev) => (
            <div 
              key={ev.id}
              className={`bg-slate-900/80 rounded-2xl border overflow-hidden shadow-2xl flex flex-col justify-between transition-all ${
                ev.isHighlighted 
                  ? 'border-science-500/60 ring-1 ring-science-500/30' 
                  : 'border-science-900/60'
              }`}
            >
              <div>
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={ev.image} 
                    alt={ev.title} 
                    className="w-full h-full object-cover filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded bg-lab-dark/95 border border-science-700/60 text-science-300 text-xs font-mono uppercase">
                      {ev.category}
                    </span>
                    {ev.isHighlighted && (
                      <span className="px-3 py-1 rounded bg-science-600 text-white text-xs font-mono uppercase font-bold">
                        Destacado
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-science-400 mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{ev.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{ev.location}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-white mb-4 leading-snug">
                    {ev.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {ev.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-0">
                <a
                  href={ev.linkUrl}
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-science-900/80 hover:bg-science-800 text-science-200 font-semibold text-xs uppercase tracking-wider transition-all border border-science-700/50"
                >
                  <span>{ev.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
