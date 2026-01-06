
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-slate-200">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">Sonify</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link to="/planner" className="text-slate-500 hover:text-slate-900 font-bold uppercase text-[11px] tracking-widest transition-colors">Planner</Link>
            <Link to="/library" className="text-slate-500 hover:text-slate-900 font-bold uppercase text-[11px] tracking-widest transition-colors">Library</Link>
            <Link to="/blog" className="text-slate-500 hover:text-slate-900 font-bold uppercase text-[11px] tracking-widest transition-colors">Learning</Link>
            <Link to="/quiz" className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black uppercase text-[11px] tracking-widest hover:scale-105 transition-all shadow-xl shadow-slate-100">Take Assessment</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
