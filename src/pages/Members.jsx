import React, { useState } from 'react';
import { Users, Mail, ExternalLink, Filter } from 'lucide-react';
import { membersData } from '../data/labData';

export const Members = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Dirección', 'Investigadores', 'Becarios', 'Estudiantes', 'Personal técnico', 'Colaboradores'];

  const filteredMembers = selectedCategory === 'Todos'
    ? membersData
    : membersData.filter(m => m.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-science-900/60 border border-science-700/60 text-science-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Users className="w-4 h-4" />
            <span>Talento Científico</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-6">
            Miembros del Laboratorio
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Un equipo multidisciplinario de investigadores, becarios y profesionales unidos por la excelencia científica.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all uppercase tracking-wider ${
                selectedCategory === cat
                  ? 'bg-science-600 text-white shadow-lg shadow-science-900/40 border border-science-400/40'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-slate-900/80 rounded-xl border border-science-900/60 p-6 flex flex-col justify-between hover:border-science-600/50 transition-all shadow-xl group"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded bg-science-900/80 text-science-300 text-[11px] font-mono uppercase">
                      {member.category}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white mt-2 group-hover:text-science-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-science-400 mt-1">{member.role}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 font-serif font-bold text-lg">
                    {member.name.split(' ').pop().charAt(0)}
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-xs text-slate-300">
                  <div>
                    <span className="text-slate-500 font-mono block mb-0.5">Área / Grupo:</span>
                    <span className="font-medium text-slate-200">{member.group}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-mono block mb-0.5">Especialidad:</span>
                    <span className="text-slate-300">{member.researchArea}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed pt-2 border-t border-slate-800">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center space-x-1.5 text-science-400 hover:text-science-300 font-medium"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contacto</span>
                </a>
                <span className="text-slate-500 font-mono text-[11px]">{member.email}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
