
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARCHETYPES } from '../constants.tsx';

const RoleDetail: React.FC = () => {
  const { roleId } = useParams<{ roleId: string }>();
  const role = ARCHETYPES.find(r => r.id === roleId);

  if (!role) return <div className="p-20 text-center">Role not found.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-500">
      <Link to="/library" className="inline-flex items-center gap-2 text-slate-500 font-bold mb-12 hover:text-indigo-600 transition-colors">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7" /></svg>
        Back to Library
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="rounded-[3rem] overflow-hidden shadow-2xl">
          <img src={role.imageUrl} alt={role.name} className="w-full aspect-square object-cover" />
        </div>
        <div>
          <span className="text-indigo-600 font-black tracking-widest uppercase text-sm mb-4 block">{role.tagline}</span>
          <h1 className="text-6xl sm:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">{role.name}</h1>
          <p className="text-2xl text-slate-600 leading-relaxed mb-10">{role.description}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/quiz" className="px-10 py-5 bg-indigo-600 text-white font-black rounded-[2rem] shadow-xl shadow-indigo-100 hover:scale-105 transition-all">
              Test your match
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
          <h3 className="text-2xl font-bold mb-6">Mastery Path</h3>
          <p className="text-slate-600 leading-relaxed mb-8">Every {role.name} needs a roadmap. Here are your primary focus areas for the next 12 months.</p>
          <div className="space-y-4">
            {role.growthPath.practiceAreas.map(p => (
              <div key={p} className="flex items-center gap-4 text-slate-900 font-bold">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                {p}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
          <h3 className="text-2xl font-bold mb-6">Sonic Influences</h3>
          <p className="text-slate-600 leading-relaxed mb-8">Study these masters to understand the full potential of your role.</p>
          <div className="space-y-6">
            {role.growthPath.recommendedArtists.map(artist => (
              <div key={artist.name}>
                <h4 className="font-black text-lg text-slate-900">{artist.name}</h4>
                <p className="text-sm text-slate-500">{artist.why}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
          <h3 className="text-2xl font-bold mb-6">Technical Arsenal</h3>
          <p className="text-slate-600 leading-relaxed mb-8">These genres are where the {role.name} truly shines and finds their voice.</p>
          <div className="flex flex-wrap gap-3">
            {role.growthPath.suggestedGenres.map(g => (
              <span key={g} className="bg-slate-50 border border-slate-100 px-5 py-2 rounded-2xl text-xs font-bold text-slate-600 uppercase tracking-widest">{g}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleDetail;
