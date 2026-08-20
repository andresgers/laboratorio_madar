import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { History } from './pages/History';
import { Members } from './pages/Members';
import { ResearchGroups } from './pages/ResearchGroups';
import { CurrentResearch } from './pages/CurrentResearch';
import { ServicesEquipment } from './pages/ServicesEquipment';
import { Events } from './pages/Events';
import { News } from './pages/News';
import { NewsDetail } from './pages/NewsDetail';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-science-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<History />} />
            <Route path="/miembros" element={<Members />} />
            <Route path="/grupos-investigacion" element={<ResearchGroups />} />
            <Route path="/investigaciones" element={<CurrentResearch />} />
            <Route path="/servicios" element={<ServicesEquipment />} />
            <Route path="/eventos" element={<Events />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/noticias/:id" element={<NewsDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
