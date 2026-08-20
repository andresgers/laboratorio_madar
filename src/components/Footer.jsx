import React from 'react';
import { Link } from 'react-router-dom';
import { Dna, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { labInfo } from '../data/labData';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-science-900/60 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Identity & Logos */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/laboratorio_madar/unam-logo.jpg" 
                alt="Logo UNaM" 
                className="w-8 h-8 object-contain rounded bg-white p-0.5"
                onError={(e) => { e.target.src = '/unam-logo.jpg'; }}
              />
              <img 
                src="/laboratorio_madar/madar-logo.jpg" 
                alt="Logo MADAR" 
                className="w-8 h-8 object-cover rounded"
                onError={(e) => { e.target.src = '/madar-logo.jpg'; }}
              />
              <span className="text-lg font-bold text-white font-serif">{labInfo.name}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {labInfo.fullName}. Universidad Nacional de Misiones (UNaM). Espacio de I+D+i BSL 2+.
            </p>
            <p className="text-xs font-mono text-science-400">
              Inaugurado el 17 de noviembre de 2021.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider font-mono">Navegación</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/historia" className="hover:text-science-300 transition-colors">Inauguración e Historia</Link></li>
              <li><Link to="/miembros" className="hover:text-science-300 transition-colors">Directorio de Miembros</Link></li>
              <li><Link to="/grupos-investigacion" className="hover:text-science-300 transition-colors">Grupos de Investigación</Link></li>
              <li><Link to="/investigaciones" className="hover:text-science-300 transition-colors">Proyectos Activos</Link></li>
              <li><Link to="/servicios" className="hover:text-science-300 transition-colors">Servicios y Equipamiento</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources & News */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider font-mono">Institucional UNaM</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/eventos" className="hover:text-science-300 transition-colors">Eventos y Jornadas</Link></li>
              <li><Link to="/noticias" className="hover:text-science-300 transition-colors">Revista y Novedades</Link></li>
              <li><a href="https://unam.edu.ar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 hover:text-science-300 transition-colors"><span>Portal UNaM</span><ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://www.youtube.com/watch?v=Ojp1TC5JnlU" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 hover:text-science-300 transition-colors"><span>Video Institucional Inauguración</span><ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider font-mono">Contacto UNaM</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-science-400 shrink-0 mt-0.5" />
                <span>Campus Universitario, Ruta Nac. Nº 12 Km 7 y 1/2, CP 3300, Posadas, Misiones, Argentina</span>
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
          <p>© {new Date().getFullYear()} {labInfo.name} — Universidad Nacional de Misiones (UNaM). Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0 font-mono text-[11px] text-science-400">
            Red de Laboratorios UNaM • Bioseguridad BSL 2+ • Investigación y Desarrollo
          </p>
        </div>
      </div>
    </footer>
  );
};
