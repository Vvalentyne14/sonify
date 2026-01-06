
import React, { useState, useMemo } from 'react';
import { ARCHETYPES, PROJECT_TEMPLATES } from '../constants.tsx';
import { UserScores, Archetype, Milestone, ProjectTemplate } from '../types';
import AIGuide from '../components/AIGuide';

interface PlannerProps {
  userScores: UserScores;
  archetypeId: string;
}

const Planner: React.FC<PlannerProps> = ({ userScores, archetypeId }) => {
  const archetype = useMemo(() => ARCHETYPES.find(a => a.id === archetypeId)!, [archetypeId]);
  
  const [activeProject, setActiveProject] = useState<ProjectTemplate | null>(null);
  const [milestones, setMilestones] = useState<Milestone[]>(archetype.growthPath.roleMilestones);
  const [exp, setExp] = useState(350); // Mock experience points
  const level = Math.floor(exp / 100);

  const toggleMilestone = (id: string) => {
    setMilestones(prev => prev.map(m => {
      if (m.id === id) {
        if (!m.isCompleted) setExp(prev => prev + 50);
        else setExp(prev => prev - 50);
        return { ...m, isCompleted: !m.isCompleted };
      }
      return m;
    }));
  };

  const completedCount = milestones.filter(m => m.isCompleted).length;
  const progressPercent = Math.round((completedCount / milestones.length) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 animate-in fade-in duration-700">
      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        
        {/* Profile Sidebar */}
        <div className="lg:w-80 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: archetype.color }} />
            <div className="w-24 h-24 rounded-3xl mx-auto mb-6 overflow-hidden border-4 border-slate-50 shadow-lg">
              <img src={archetype.imageUrl} alt={archetype.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-black text-slate-900 mb-1">{archetype.name}</h2>
            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-6">{archetype.tagline}</p>
            
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-400">Level {level}</span>
                <span className="text-indigo-600">{exp % 100}/100 XP</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 transition-all duration-500" style={{ width: `${exp % 100}%` }} />
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl">
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 opacity-50">Select Project Template</h3>
            <div className="space-y-3">
              {PROJECT_TEMPLATES.map(tp => (
                <button 
                  key={tp.id}
                  onClick={() => setActiveProject(tp)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all ${activeProject?.id === tp.id ? 'bg-indigo-600 border-indigo-400' : 'bg-slate-800 border-slate-700 hover:bg-slate-700'}`}
                >
                  <div className="text-sm font-bold mb-1">{tp.name}</div>
                  <div className="text-[10px] opacity-60 leading-tight line-clamp-2">{tp.description}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 space-y-8">
          <div className="bg-white p-10 sm:p-16 rounded-[3rem] border border-slate-100 shadow-2xl">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-2">Creative Command</h1>
                <p className="text-lg text-slate-400 font-medium italic">Operational roadmap for the {archetype.name}.</p>
              </div>
              <div className="hidden sm:flex flex-col items-end">
                <div className="text-4xl font-black text-indigo-600">{progressPercent}%</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Completion</div>
              </div>
            </div>

            {/* Active Project View */}
            {activeProject ? (
              <div className="mb-16 animate-in slide-in-from-top-4">
                <div className="bg-indigo-50 border border-indigo-100 rounded-[2.5rem] p-8 mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Active Project: {activeProject.name}</h3>
                    <p className="text-slate-500 text-sm">{activeProject.description}</p>
                  </div>
                  <button className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-2xl shadow-md hover:scale-105 transition-all">Export Specs</button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeProject.suggestedMilestones.map((s, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <span className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-xs font-black text-slate-400">{idx + 1}</span>
                        <div className="w-2 h-2 rounded-full bg-slate-200" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">{s}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">Integrated goal for {archetype.name} alignment.</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-20 text-center border-2 border-dashed border-slate-100 rounded-[2.5rem] mb-16">
                 <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <h3 className="text-xl font-bold text-slate-400">Select a project template to begin planning.</h3>
              </div>
            )}

            {/* Mastery Milestones */}
            <section>
              <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                Mastery Milestones
                <span className="text-[10px] bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full uppercase tracking-widest">+50 XP Per Goal</span>
              </h3>
              <div className="space-y-4">
                {milestones.map((m) => (
                  <button 
                    key={m.id} 
                    onClick={() => toggleMilestone(m.id)}
                    className={`w-full flex items-center gap-6 p-6 rounded-3xl border transition-all text-left ${m.isCompleted ? 'bg-emerald-50 border-emerald-100 opacity-75' : 'bg-white border-slate-100 hover:border-indigo-200 shadow-sm'}`}
                  >
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all ${m.isCompleted ? 'bg-emerald-500 text-white' : 'bg-slate-50 text-slate-300'}`}>
                      {m.isCompleted ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        <span className="text-lg font-black">{m.type.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${m.type === 'creative' ? 'bg-purple-100 text-purple-600' : m.type === 'technical' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'}`}>
                          {m.type}
                        </span>
                        <h4 className={`font-bold ${m.isCompleted ? 'text-slate-500 line-through' : 'text-slate-900'}`}>{m.title}</h4>
                      </div>
                      <p className={`text-xs ${m.isCompleted ? 'text-slate-400' : 'text-slate-500'}`}>{m.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <AIGuide context="planner" archetype={archetype} />
    </div>
  );
};

export default Planner;
