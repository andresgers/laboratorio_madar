import React from 'react';
import { Link } from 'react-router-dom';
import { Dna, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { labInfo } from '../data/labData';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-science-900/60 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-science-700 flex items-center justify-center">
                <Dna className="w-5 h-5 text-science-200" />
              </div>
              <span className="text-lg font-bold text-white font-serif">{labInfo.name}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {labInfo.fullName}. Investigando en la frontera entre la biología molecular computacional y experimental.
            </p>
            <p className="text-xs font-mono text-science-400">
              {labInfo.institution}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider font-mono">Navegación</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/historia" className="hover:text-science-300 transition-colors">Historia Institucional</Link></li>
              <li><Link to="/miembros" className="hover:text-science-300 transition-colors">Miembros y Directorio</Link></li>
              <li><Link to="/grupos-investigacion" className="hover:text-science-300 transition-colors">Grupos de Investigación</Link></li>
              <li><Link to="/investigaciones" className="hover:text-science-300 transition-colors">Proyectos Activos</Link></li>
              <li><Link to="/servicios" className="hover:text-science-300 transition-colors">Servicios y Equipamiento</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources & News */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider font-mono">Divulgación y Ciencia</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/eventos" className="hover:text-science-300 transition-colors">Eventos y Simposios</Link></li>
              <li><Link to="/noticias" className="hover:text-science-300 transition-colors">Revista y Noticias</Link></li>
              <li><a href="#github" onClick={(e) => e.preventDefault()} className="inline-flex items-center space-x-1 hover:text-science-300 transition-colors"><span>Repositorios GitHub</span><ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#orcid" onClick={(e) => e.preventDefault()} className="inline-flex items-center space-x-1 hover:text-science-300 transition-colors"><span>ORCID Consortium</span><ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider font-mono">Contacto</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-science-400 shrink-0 mt-0.5" />
                <span>{labInfo.location}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-science-400 shrink-0" />
                <span>{labInfo.email}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-science-400 shrink-0" />
                <span>{labInfo.phone}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {labInfo.name}. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0 font-mono text-[11px] text-science-400">
            Ciencia abierta • Computación avanzada • Biología molecular
          </p>
        </div>
      </div>
    </footer>
  );
};
