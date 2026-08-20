import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, User, ChevronRight } from 'lucide-react';
import { newsData } from '../data/labData';

export const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', 'Investigación', 'Publicaciones', 'Institucional', 'Formación'];

  const filteredNews = selectedCategory === 'Todas'
    ? newsData
    : newsData.filter(n => n.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-science-900/60 border border-science-700/60 text-science-300 text-xs font-mono uppercase tracking-widest mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Revista Científica Institucional</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-6">
            Noticias y Novedades
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Avances de investigación, publicaciones recientes, comunicados institucionales y divulgación científica del Laboratorio MADAR.
          </p>
        </div>

        {/* Categories Filter */}
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

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredNews.map((news) => (
            <div 
              key={news.id}
              className="bg-slate-900/80 rounded-2xl border border-science-900/60 overflow-hidden flex flex-col justify-between hover:border-science-600/60 transition-all shadow-xl group"
            >
              <div>
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded bg-lab-dark/95 border border-science-700/60 text-science-300 text-xs font-mono uppercase">
                    {news.category}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 text-xs font-mono text-slate-400 mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-science-400" />
                      <span>{news.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <User className="w-3.5 h-3.5 text-science-400" />
                      <span>{news.author}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4 group-hover:text-science-300 transition-colors leading-snug">
                    {news.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {news.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-0">
                <Link
                  to={`/noticias/${news.id}`}
                  className="inline-flex items-center space-x-2 text-xs font-semibold text-science-400 hover:text-science-300 uppercase tracking-wider"
                >
                  <span>Leer artículo completo</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
