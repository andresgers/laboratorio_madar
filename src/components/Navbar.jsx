import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dna, Menu, X, ChevronRight, Microscope } from 'lucide-react';
import { labInfo } from '../data/labData';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/historia', label: 'Historia' },
    { path: '/miembros', label: 'Miembros' },
    { path: '/grupos-investigacion', label: 'Grupos' },
    { path: '/investigaciones', label: 'Investigaciones' },
    { path: '/servicios', label: 'Servicios y Equipos' },
    { path: '/eventos', label: 'Eventos' },
    { path: '/noticias', label: 'Noticias' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-lab-dark/95 backdrop-blur-md border-b border-science-900/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand with UNaM and MADAR Logos */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center space-x-2">
              <img 
                src="/laboratorio_madar/unam-logo.jpg" 
                alt="Logo UNaM" 
                className="w-9 h-9 object-contain rounded bg-white p-0.5 border border-science-500/40"
                onError={(e) => { e.target.src = '/unam-logo.jpg'; }}
              />
              <img 
                src="/laboratorio_madar/madar-logo.jpg" 
                alt="Logo MADAR" 
                className="w-9 h-9 object-cover rounded border border-science-500/40"
                onError={(e) => { e.target.src = '/madar-logo.jpg'; }}
              />
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-wider text-white font-serif group-hover:text-science-300 transition-colors">
                {labInfo.name}
              </span>
              <span className="block text-[11px] text-science-400 tracking-wider font-mono">
                UNaM • BSL 2+
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-science-900/60 text-science-200 border border-science-700/50 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/80'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action / Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/servicios"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider bg-science-600 hover:bg-science-500 text-white transition-all shadow-md shadow-science-900/30 border border-science-500/40"
            >
              <Microscope className="w-4 h-4" />
              <span>Plataforma</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-950 focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-lab-dark border-b border-science-900/60 px-4 pt-2 pb-6 space-y-1 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                  active
                    ? 'bg-science-900/80 text-science-200 border-l-4 border-science-500 pl-4'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className={`w-4 h-4 ${active ? 'text-science-400' : 'text-slate-600'}`} />
              </Link>
            );
          })}
          <div className="pt-4 border-t border-slate-800">
            <Link
              to="/servicios"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider bg-science-600 hover:bg-science-500 text-white transition-all shadow-md"
            >
              <Microscope className="w-4 h-4" />
              <span>Plataforma y Servicios</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
