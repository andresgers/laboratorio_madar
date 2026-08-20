import React, { useState } from 'react';
import { Microscope, Filter, Search, Calendar, Users } from 'lucide-react';
import { researchProjects } from '../data/labData';

export const CurrentResearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('Todos');
  const [selectedStatus, setSelectedStatus] = useState('Todos');

  const groups = ['Todos', ...new Set(researchProjects.map(p => p.researchGroup))];
  const statuses = ['Todos', ...new Set(researchProjects.map(p => p.status))];

  const filteredProjects = researchProjects.filter(proj => {
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesGroup = selectedGroup === 'Todos' || proj.researchGroup === selectedGroup;
    const matchesStatus = selectedStatus === 'Todos' || proj.status === selectedStatus;
    return matchesSearch && matchesGroup && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-science-900/60 border border-science-700/60 text-science-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Microscope className="w-4 h-4" />
            <span>Innovación en Desarrollo</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-6">
            Investigaciones en Curso
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Explora los proyectos científicos activos del laboratorio, sus líneas temáticas y consorcios colaborativos.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-slate-900/80 p-6 rounded-2xl border border-science-900/60 mb-12 shadow-xl space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:gap-6">
          
          {/* Search input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por título, resumen o palabras clave (ej: Deep Learning, Single-Cell)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-science-500"
            />
          </div>

          {/* Group Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-science-400 shrink-0" />
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-science-500"
              >
                <option value="Todos">Todos los Grupos</option>
                {groups.filter(g => g !== 'Todos').map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-science-500"
            >
              <option value="Todos">Todos los Estados</option>
              {statuses.filter(s => s !== 'Todos').map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id}
              className="bg-slate-900/80 rounded-xl border border-science-900/60 p-8 flex flex-col justify-between hover:border-science-600/50 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded text-xs font-mono uppercase ${
                    proj.status === 'En curso' 
                      ? 'bg-science-900/80 text-science-300 border border-science-700/60' 
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    {proj.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-science-400" />
                    <span>{proj.year}</span>
                  </span>
                </div>

                <span className="text-xs font-mono text-science-400 uppercase tracking-widest block mb-1">
                  {proj.scientificArea}
                </span>

                <h3 className="text-xl font-serif font-bold text-white mb-3 leading-snug">
                  {proj.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {proj.summary}
                </p>

                <div className="space-y-3 mb-6 text-xs text-slate-300">
                  <div>
                    <span className="text-slate-500 font-mono block mb-0.5">Grupo Responsable:</span>
                    <strong className="text-white">{proj.researchGroup}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 font-mono block mb-0.5">Participantes:</span>
                    <span className="text-slate-300">{proj.participants.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-mono block mb-0.5">Colaboradores:</span>
                    <span className="text-slate-300">{proj.collaborators.join(' • ')}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {proj.keywords.map((kw, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 text-[11px] font-mono border border-slate-800/80">
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800">
              <p className="text-slate-400 text-sm font-mono">No se encontraron proyectos que coincidan con los criterios de búsqueda.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
