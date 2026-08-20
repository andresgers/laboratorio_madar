import React, { useState } from 'react';
import { Microscope, Cpu, Server, CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/labData';

export const ServicesEquipment = () => {
  const [activeTab, setActiveTab] = useState('servicios');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-science-900/60 border border-science-700/60 text-science-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Microscope className="w-4 h-4" />
            <span>Plataforma Científica e Infraestructura</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-6">
            Servicios y Equipamiento
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Capacidades tecnológicas de alta gama y servicios especializados abiertos a la comunidad científica y sector industrial.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-science-900/60">
            <button
              onClick={() => setActiveTab('servicios')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'servicios'
                  ? 'bg-science-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Server className="w-4 h-4" />
              <span>Servicios Científicos</span>
            </button>
            <button
              onClick={() => setActiveTab('equipamiento')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'equipamiento'
                  ? 'bg-science-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Infraestructura y Equipamiento</span>
            </button>
          </div>
        </div>

        {/* Services Section */}
        {activeTab === 'servicios' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {servicesData.services.map((srv, idx) => (
                <div key={idx} className="bg-slate-900/80 rounded-xl border border-science-900/60 p-8 flex flex-col justify-between shadow-xl">
                  <div>
                    <span className="px-3 py-1 rounded bg-science-900/80 text-science-300 text-xs font-mono uppercase border border-science-700/60 inline-block mb-4">
                      {srv.target}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">
                      {srv.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {srv.description}
                    </p>

                    <h4 className="text-xs font-mono uppercase text-science-400 tracking-wider mb-3">Procedimientos Incluidos:</h4>
                    <ul className="space-y-2 mb-6 text-xs text-slate-300">
                      {srv.procedures.map((proc, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-science-400 shrink-0 mt-0.5" />
                          <span>{proc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
                    <span className="font-mono text-science-300 block mb-1">Cómo solicitar:</span>
                    <p>{srv.requestInfo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Equipment Section */}
        {activeTab === 'equipamiento' && (
          <div className="space-y-12 animate-fadeIn">
            {servicesData.equipment.map((eq, idx) => (
              <div key={idx} className="bg-slate-900/80 rounded-2xl border border-science-900/60 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 h-72 lg:h-full relative">
                  <img 
                    src={eq.image} 
                    alt={eq.name} 
                    className="w-full h-full object-cover filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded bg-lab-dark/95 border border-science-700/60 text-science-300 text-xs font-mono uppercase tracking-widest">
                    {eq.model}
                  </span>
                </div>

                <div className="lg:col-span-7 p-8 lg:p-12 space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                      {eq.name}
                    </h2>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {eq.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-science-400 tracking-wider mb-2">Aplicaciones Principales:</h4>
                    <div className="flex flex-wrap gap-2">
                      {eq.applications.map((app, i) => (
                        <span key={i} className="px-3 py-1 rounded bg-slate-950 text-slate-300 text-xs border border-slate-800">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-science-400 tracking-wider mb-2">Capacidades Técnicas:</h4>
                    <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                      {eq.specs.map((spec, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-science-500" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
