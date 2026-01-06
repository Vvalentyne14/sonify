
import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ARCHETYPES } from '../constants.tsx';
import { UserScores, Archetype, Dimension, VocalData } from '../types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import AIGuide from '../components/AIGuide';

interface ResultsProps {
  scores: UserScores;
  vocalData: VocalData;
}

const Results: React.FC<ResultsProps> = ({ scores, vocalData }) => {
  const navigate = useNavigate();
  // Find the primary and secondary roles based on score proximity
  const { primaryRole, secondaryRole } = useMemo(() => {
    const rolesWithDistances = ARCHETYPES.map(role => {
      let distance = 0;
      (Object.keys(scores) as Dimension[]).forEach(dim => {
        distance += Math.pow(scores[dim] - role.profile[dim], 2);
      });
      return { role, distance };
    }).sort((a, b) => a.distance - b.distance);

    return {
      primaryRole: rolesWithDistances[0].role,
      secondaryRole: rolesWithDistances[1].role
    };
  }, [scores]);

  const radarData = [
    { subject: 'Expression', A: Math.round(scores.EXP_STR), fullMark: 100 },
    { subject: 'Emotion', A: Math.round(scores.EMO_TEC), fullMark: 100 },
    { subject: 'Spontaneity', A: Math.round(scores.SPO_PLA), fullMark: 100 },
    { subject: 'Leadership', A: Math.round(scores.LEA_SUP), fullMark: 100 },
    { subject: 'Creation', A: Math.round(scores.PER_CRE), fullMark: 100 },
    { subject: 'Collaboration', A: Math.round(scores.COL_IND), fullMark: 100 },
  ];

  // Derived personality summary
  const personalitySummary = useMemo(() => {
    const traits = [];
    if (scores.EXP_STR < 40) traits.push("Highly Expressive");
    else if (scores.EXP_STR > 60) traits.push("Extremely Structured");

    if (scores.EMO_TEC < 40) traits.push("Emotionally Driven");
    else if (scores.EMO_TEC > 60) traits.push("Technically Proficient");

    if (scores.SPO_PLA < 40) traits.push("Spontaneous");
    else if (scores.SPO_PLA > 60) traits.push("Highly Organized");

    if (scores.COL_IND < 40) traits.push("Collaborator");
    else if (scores.COL_IND > 60) traits.push("Independent Thinker");

    return traits.join(" • ") || "Balanced Creative";
  }, [scores]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        
        {/* Main Result Card */}
        <div className="lg:col-span-7 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className={`h-4 w-full`} style={{ backgroundColor: primaryRole.color }} />
          <div className="p-8 sm:p-12">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-2 block">Primary Identity</span>
                <h1 className="text-5xl sm:text-7xl font-black text-slate-900 leading-tight mb-2 tracking-tighter">{primaryRole.name}</h1>
                <p className="text-2xl text-slate-400 font-medium italic mb-6">"{primaryRole.tagline}"</p>
                
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Supporting Role:</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-600 border border-slate-200">{secondaryRole.name}</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="w-24 h-24 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-4xl shadow-sm">
                  {vocalData.isVocalist ? '🎤' : '🎹'}
                </div>
              </div>
            </div>
            
            <div className="prose prose-slate max-w-none">
              <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl mb-10">
                <h4 className="text-indigo-900 font-black text-sm uppercase tracking-widest mb-2">Personality Summary</h4>
                <p className="text-indigo-800 text-lg font-bold">{personalitySummary}</p>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed mb-10">{primaryRole.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100">
                  <h3 className="text-emerald-800 font-bold text-lg mb-4">Core Strengths</h3>
                  <div className="space-y-2">
                    {primaryRole.strengths.map(s => <div key={s} className="bg-white/80 px-4 py-2 rounded-xl text-emerald-900 text-sm font-bold shadow-sm">{s}</div>)}
                  </div>
                </div>
                <div className="bg-rose-50/50 p-8 rounded-3xl border border-rose-100">
                  <h3 className="text-rose-800 font-bold text-lg mb-4">Growth Gaps</h3>
                  <div className="space-y-2">
                    {primaryRole.pitfalls.map(p => <div key={p} className="bg-white/80 px-4 py-2 rounded-xl text-rose-900 text-sm font-bold shadow-sm">{p}</div>)}
                  </div>
                </div>
              </div>

              <div className="space-y-8 border-t border-slate-100 pt-10">
                <section>
                  <h3 className="font-bold text-slate-900 text-lg mb-3">Synergy Profile</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">As a <strong>{primaryRole.name}</strong> supported by <strong>{secondaryRole.name}</strong> energy, you bridge the gap between {primaryRole.tagline.toLowerCase()} and the tactical needs of {secondaryRole.tagline.toLowerCase()}.</p>
                  <h4 className="font-bold text-slate-900 text-sm mb-3">Best Collaborators</h4>
                  <div className="flex flex-wrap gap-3">
                    {primaryRole.idealMatches.map(m => (
                      <span key={m} className="bg-indigo-600 text-white px-5 py-2 rounded-2xl text-sm font-bold shadow-md shadow-indigo-100">{m}</span>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Analytics */}
        <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-right-8 duration-700 delay-150">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl">
            <h3 className="text-2xl font-black mb-8 tracking-tight">Musical DNA Chart</h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11, fontWeight: 'bold' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} axisLine={false} tick={false} />
                  <Radar name="User" dataKey="A" stroke="#4f46e5" fill="#6366f1" fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-slate-200">
            <h3 className="text-2xl font-bold mb-6">Group Collective</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">Most conflict in bands comes from role confusion. Invite your members to see your collective DNA balance.</p>
            <button 
              onClick={() => navigate('/collective')}
              className="w-full py-5 bg-white text-slate-900 font-black rounded-2xl mb-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
            >
              Analyze Band Balance
            </button>
          </div>
        </div>
      </div>

      {/* Growth Path */}
      <section className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4">Growth Path</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">Personalized roadmap to evolve from {primaryRole.name} to a Musical Master.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            </div>
            <h4 className="font-bold text-xl mb-4 text-slate-900">Practice</h4>
            <ul className="space-y-3">
              {primaryRole.growthPath.practiceAreas.map(item => (
                <li key={item} className="flex gap-3 text-sm text-slate-600 leading-tight">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg">
            <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
            </div>
            <h4 className="font-bold text-xl mb-4 text-slate-900">Study</h4>
            <div className="space-y-4">
              {primaryRole.growthPath.recommendedArtists.map(artist => (
                <div key={artist.name}>
                  <p className="text-sm font-bold text-slate-900">{artist.name}</p>
                  <p className="text-xs text-slate-500 leading-normal">{artist.why}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h4 className="font-bold text-xl mb-4 text-slate-900">Follow</h4>
            <ul className="space-y-3">
              {primaryRole.growthPath.mentorsToFollow.map(item => (
                <li key={item} className="flex gap-3 text-sm text-slate-600 leading-tight">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg">
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <h4 className="font-bold text-xl mb-4 text-slate-900">Genres</h4>
            <div className="flex flex-wrap gap-2">
              {primaryRole.growthPath.suggestedGenres.map(genre => (
                <span key={genre} className="bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-500 uppercase">{genre}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-20">
        <Link to="/blog" className="block p-10 bg-slate-900 rounded-[2.5rem] text-white overflow-hidden relative group">
           <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="text-center md:text-left">
               <h3 className="text-3xl font-bold mb-2">Learning Hub</h3>
               <p className="text-slate-400 text-lg">Deep dive into articles tailored to the {primaryRole.name} archetype.</p>
             </div>
             <div className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black group-hover:scale-110 transition-transform">
               Explore Content
             </div>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        </Link>
      </div>
      
      <AIGuide context="results" archetype={primaryRole} scores={scores} />
    </div>
  );
};

export default Results;
