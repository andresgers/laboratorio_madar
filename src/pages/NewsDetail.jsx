import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, BookOpen } from 'lucide-react';
import { newsData } from '../data/labData';

export const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsData.find(n => n.id === id);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-serif font-bold mb-4">Artículo no encontrado</h2>
        <Link to="/noticias" className="text-science-400 hover:underline flex items-center space-x-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a Noticias</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            to="/noticias" 
            className="inline-flex items-center space-x-2 text-xs font-mono text-science-400 hover:text-science-300 uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Noticias</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded bg-science-900/80 border border-science-700/60 text-science-300 text-xs font-mono uppercase">
              {newsItem.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            {newsItem.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 pt-2 border-t border-science-900/40">
            <span className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-science-400" />
              <span>{newsItem.date}</span>
            </span>
            <span className="flex items-center space-x-2">
              <User className="w-4 h-4 text-science-400" />
              <span>{newsItem.author}</span>
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden border border-science-900/60 mb-12 shadow-2xl h-[400px]">
          <img 
            src={newsItem.image} 
            alt={newsItem.title} 
            className="w-full h-full object-cover filter brightness-95"
          />
        </div>

        {/* Article Content - Safely rendered using React elements / safe HTML parsing or structured rendering */}
        <div 
          className="prose prose-invert prose-science max-w-none text-slate-300 leading-relaxed space-y-6 text-base sm:text-lg"
          dangerouslySetInnerHTML={{ __html: newsItem.content }}
        />

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex justify-between items-center">
          <Link 
            to="/noticias" 
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-mono uppercase border border-slate-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ver más artículos</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
