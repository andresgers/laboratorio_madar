import React from 'react';
import { Link } from 'react-router-dom';
import { Dna, ArrowRight, Microscope, Cpu, Users, Award, BookOpen, ChevronRight } from 'lucide-react';
import { labInfo, historyData, researchGroups, researchProjects, newsData } from '../data/labData';

export const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      
      {/* 1. Hero Principal with Background Image */}
      <section className="relative overflow-hidden py-24 lg:py-32 border-b border-science-900/40">
        {/* Background Image with Dark Scientific Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity filter brightness-75 scale-105 pointer-events-none"
          style={{ backgroundImage: `url('/laboratorio_madar/new_bg.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-science-900/60 border border-science-700/60 text-science-300 text-xs font-mono uppercase tracking-widest mb-6 shadow-sm">
              <Dna className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
              <span>{labInfo.institution}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6">
              {labInfo.name}
            </h1>

            <p className="text-xl sm:text-2xl text-science-200 font-light leading-relaxed mb-8 max-w-3xl">
              {labInfo.tagline}
            </p>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed mb-10 max-w-3xl">
              {labInfo.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/grupos-investigacion"
                className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-lg bg-science-600 hover:bg-science-500 text-white font-semibold text-sm transition-all shadow-lg shadow-science-900/50 border border-science-400/30 group"
              >
                <span>Explorar Grupos de Investigación</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/investigaciones"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-slate-200 hover:text-white font-medium text-sm transition-all border border-slate-700/60"
              >
                <Microscope className="w-4 h-4 text-science-400" />
                <span>Proyectos Activos</span>
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-science-900/50">
            <div className="bg-slate-900/40 p-6 rounded-xl border border-science-900/40 backdrop-blur-sm">
              <div className="text-3xl font-serif font-bold text-science-300 mb-1">{labInfo.stats.biosafety}</div>
              <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Nivel de Bioseguridad</div>
            </div>
            <div className="bg-slate-900/40 p-6 rounded-xl border border-science-900/40 backdrop-blur-sm">
              <div className="text-3xl font-serif font-bold text-science-300 mb-1">{labInfo.stats.funding}</div>
              <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Subsidio Ministerio de Ciencia</div>
            </div>
            <div className="bg-slate-900/40 p-6 rounded-xl border border-science-900/40 backdrop-blur-sm">
              <div className="text-3xl font-serif font-bold text-science-300 mb-1">{labInfo.stats.teamPerNode}</div>
              <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Investigadores por Nodo (2 genetistas + 2 bioquímicos)</div>
            </div>
            <div className="bg-slate-900/40 p-6 rounded-xl border border-science-900/40 backdrop-blur-sm">
              <div className="text-3xl font-serif font-bold text-science-300 mb-1">{labInfo.stats.conicet}</div>
              <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Investigadores y Becarios CONICET en Misiones</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Historia breve / Narrativa Institucional */}
      <section className="py-24 bg-slate-950 border-b border-science-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-science-400 text-xs font-mono uppercase tracking-widest">
                <Award className="w-4 h-4" />
                <span>Origen y Evolución Institucional</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                De un contenedor móvil a un centro de investigación inédito en la región
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {historyData.origins}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {historyData.evolution}
              </p>
              <div className="pt-4">
                <Link
                  to="/historia"
                  className="inline-flex items-center space-x-2 text-science-400 hover:text-science-300 font-semibold text-sm group"
                >
                  <span>Conocer la línea temporal completa y hitos</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-900/60 p-8 rounded-2xl border border-science-950 shadow-2xl relative">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-science-600/20 rounded-full blur-xl pointer-events-none" />
              <h3 className="text-xl font-serif font-semibold text-white mb-6 border-b border-science-900/60 pb-4">
                Pilares Científicos de MADAR
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-science-900/80 text-science-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold border border-science-700/40">01</div>
                  <div>
                    <strong className="text-white block mb-1">Bioseguridad BSL 2+</strong>
                    <span>Único laboratorio de su categoría en Misiones: nivel 2 plus, apenas un escalón antes del nivel 3, que permite trabajar con patógenos aéreos y agentes virales.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-science-900/80 text-science-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold border border-science-700/40">02</div>
                  <div>
                    <strong className="text-white block mb-1">Cultivo Celular y Ensayos In Vitro</strong>
                    <span>Tecnología que hasta el momento no había en la provincia: células vivas (líneas VERO) para aislar virus, ensayar antivirales y producir proteínas.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-science-900/80 text-science-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold border border-science-700/40">03</div>
                  <div>
                    <strong className="text-white block mb-1">Vigilancia Genómica y Diagnóstico Molecular</strong>
                    <span>PCR, amplificación génica y secuenciación de genomas para detectar variantes del SARS-CoV-2 y estudiar dengue, zika, chikungunya, HPV y leucemia.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Grupos de Investigación (Protagonismo en la Home) */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-lab-dark to-slate-950 border-b border-science-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="inline-flex items-center space-x-2 text-science-400 text-xs font-mono uppercase tracking-widest mb-3">
                <Users className="w-4 h-4" />
                <span>Estructura de Investigación</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Grupos de Investigación
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="/grupos-investigacion"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-science-300 hover:text-science-200 group"
              >
                <span>Ver todos los grupos y equipos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {researchGroups.map((group) => (
              <div 
                key={group.id}
                className="bg-slate-900/80 rounded-xl border border-science-900/60 overflow-hidden flex flex-col justify-between hover:border-science-600/60 transition-all group shadow-xl"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={group.image} 
                      alt={group.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded bg-lab-dark/95 border border-science-700/60 text-science-300 text-xs font-mono uppercase tracking-widest">
                      {group.code}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-science-300 transition-colors">
                      {group.name}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {group.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <span className="text-xs font-mono uppercase text-science-400 tracking-wider block">Áreas Temáticas:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {group.thematicAreas.map((area, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded bg-slate-950 text-slate-300 text-xs border border-slate-800">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-slate-400 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <span>Líder: <strong className="text-slate-200">{group.lead}</strong></span>
                      <span className="font-mono text-science-400">{group.membersCount} investigadores</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <Link
                    to={`/grupos-investigacion`}
                    className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded bg-science-900/60 hover:bg-science-800/80 text-science-200 font-medium text-sm transition-all border border-science-700/40"
                  >
                    <span>Conocer más sobre el grupo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Proyectos Destacados Preview */}
      <section className="py-24 bg-slate-950 border-b border-science-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="inline-flex items-center space-x-2 text-science-400 text-xs font-mono uppercase tracking-widest mb-3">
                <Microscope className="w-4 h-4" />
                <span>Investigación Activa</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Proyectos en Curso
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="/investigaciones"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-science-300 hover:text-science-200 group"
              >
                <span>Ver catálogo completo con filtros</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchProjects.slice(0, 2).map((proj) => (
              <div key={proj.id} className="bg-slate-900/60 p-8 rounded-xl border border-science-900/60 flex flex-col justify-between hover:border-science-600/50 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded bg-science-900/80 text-science-300 text-xs font-mono border border-science-700/40">
                      {proj.scientificArea}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{proj.year}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {proj.summary}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Grupo: <strong className="text-slate-300">{proj.researchGroup}</strong></span>
                  <Link to="/investigaciones" className="text-science-400 hover:underline font-medium inline-flex items-center space-x-1">
                    <span>Detalles</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Noticias Científicas Preview */}
      <section className="py-24 bg-lab-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="inline-flex items-center space-x-2 text-science-400 text-xs font-mono uppercase tracking-widest mb-3">
                <BookOpen className="w-4 h-4" />
                <span>Revista Científica Institucional</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Últimas Noticias y Publicaciones
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="/noticias"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-science-300 hover:text-science-200 group"
              >
                <span>Ver todas las publicaciones</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsData.slice(0, 3).map((news) => (
              <div key={news.id} className="bg-slate-900/80 rounded-xl border border-science-900/60 overflow-hidden flex flex-col justify-between group">
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-lab-dark/95 border border-science-700/60 text-science-300 text-xs font-mono uppercase">
                      {news.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-mono text-slate-400 mb-2">{news.date} • {news.author}</div>
                    <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-science-300 transition-colors leading-snug">
                      {news.title}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                      {news.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-0">
                  <Link
                    to={`/noticias/${news.id}`}
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-science-400 hover:text-science-300"
                  >
                    <span>Leer artículo completo</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
