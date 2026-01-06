
import React from 'react';
import { Link } from 'react-router-dom';
import { ARCHETYPES } from '../constants.tsx';

const Library: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-4 leading-none">Roles Library</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto italic">
          Every musical ecosystem needs balance. Explore the 12 core archetypes of the modern creative.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARCHETYPES.map((role) => (
          <Link 
            to={`/library/${role.id}`}
            key={role.id} 
            className="group bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={role.imageUrl} 
                alt={role.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              <div className="absolute bottom-6 left-8">
                <span className="text-white text-[10px] font-black uppercase tracking-[0.2em] bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">Archetype</span>
              </div>
            </div>
            <div className="p-10 flex-grow">
              <h3 className="text-3xl font-black text-slate-900 mb-2 leading-none">{role.name}</h3>
              <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-6 italic">"{role.tagline}"</p>
              <p className="text-slate-500 leading-relaxed mb-8 line-clamp-3">
                {role.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {role.strengths.slice(0, 3).map(s => (
                  <span key={s} className="bg-slate-50 text-[10px] font-black text-slate-400 px-3 py-1 rounded-lg border border-slate-100 uppercase tracking-widest">{s}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Library;
