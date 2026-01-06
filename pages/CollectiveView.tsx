
import React, { useState, useMemo } from 'react';
import { ARCHETYPES } from '../constants.tsx';
import { UserScores, Archetype, Member, Collective } from '../types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import AIGuide from '../components/AIGuide';

interface CollectiveViewProps {
  userScores: UserScores;
}

const CollectiveView: React.FC<CollectiveViewProps> = ({ userScores }) => {
  // Mock data for initial members
  const [bandName, setBandName] = useState("The Sonic Syndicate");
  const [members, setMembers] = useState<Member[]>([
    {
      id: 'current-user',
      name: 'You (Leader)',
      archetypeId: ARCHETYPES.find(a => true)?.id || 'lead-voice', // Simplified finding logic for default
      scores: userScores,
      isCurrentUser: true
    },
    {
      id: 'member-2',
      name: 'Alex R.',
      archetypeId: 'rhythm-driver',
      scores: ARCHETYPES.find(a => a.id === 'rhythm-driver')!.profile,
    }
  ]);

  const addMember = (archetypeId: string) => {
    const archetype = ARCHETYPES.find(a => a.id === archetypeId)!;
    const names = ["Jordan P.", "Sam K.", "Taylor W.", "Casey M."];
    const newMember: Member = {
      id: Math.random().toString(),
      name: names[Math.floor(Math.random() * names.length)],
      archetypeId: archetypeId,
      scores: archetype.profile
    };
    setMembers([...members, newMember]);
  };

  const removeMember = (id: string) => {
    if (members.length > 1) {
      setMembers(members.filter(m => m.id !== id));
    }
  };

  const radarData = useMemo(() => {
    const subjects = [
      { key: 'EXP_STR', label: 'Expression' },
      { key: 'EMO_TEC', label: 'Emotion' },
      { key: 'SPO_PLA', label: 'Spontaneity' },
      { key: 'LEA_SUP', label: 'Leadership' },
      { key: 'PER_CRE', label: 'Creation' },
      { key: 'COL_IND', label: 'Collaboration' },
    ];

    return subjects.map(sub => {
      const dataPoint: any = { subject: sub.label };
      members.forEach(member => {
        dataPoint[member.name] = Math.round(member.scores[sub.key as keyof UserScores]);
      });
      return dataPoint;
    });
  }, [members]);

  const currentCollective: Collective = {
    id: 'collective-1',
    name: bandName,
    members: members
  };

  const memberColors = ['#6366f1', '#10b981', '#f43f5e', '#f59e0b', '#8b5cf6', '#06b6d4'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 animate-in fade-in duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
        <div className="flex-1">
          <span className="text-indigo-600 font-black tracking-widest uppercase text-xs mb-2 block">Phase 3: Group Collective</span>
          <input 
            value={bandName}
            onChange={(e) => setBandName(e.target.value)}
            className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tighter mb-4 bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-indigo-100 rounded-xl"
          />
          <p className="text-xl text-slate-500 max-w-xl">Visualize the synergy of your band. Identify gaps in your creative DNA and optimize your workflow.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl w-full lg:w-96">
          <h3 className="font-black text-slate-900 mb-6 uppercase text-xs tracking-widest">Add Member Profile</h3>
          <div className="grid grid-cols-1 gap-2">
            {ARCHETYPES.filter(a => !members.find(m => m.archetypeId === a.id)).slice(0, 5).map(archetype => (
              <button 
                key={archetype.id}
                onClick={() => addMember(archetype.id)}
                className="flex items-center gap-3 p-3 rounded-xl border border-slate-50 hover:border-indigo-200 hover:bg-indigo-50 transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ backgroundColor: archetype.color + '20', color: archetype.color }}>
                  {archetype.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-slate-900">{archetype.name}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{archetype.tagline}</div>
                </div>
                <svg className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-8 bg-white p-10 sm:p-16 rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
            <svg className="w-96 h-96" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/></svg>
          </div>
          <h3 className="text-3xl font-black mb-12 tracking-tight flex items-center gap-4">
            Group DNA Overlay
            <span className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full uppercase tracking-widest font-bold">Live Synergy</span>
          </h3>
          <div className="h-[500px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 'bold' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} axisLine={false} tick={false} />
                {members.map((member, idx) => (
                  <Radar 
                    key={member.id}
                    name={member.name} 
                    dataKey={member.name} 
                    stroke={memberColors[idx % memberColors.length]} 
                    fill={memberColors[idx % memberColors.length]} 
                    fillOpacity={0.1} 
                    strokeWidth={3}
                  />
                ))}
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '40px' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-6 px-4">Active Roster</h3>
          {members.map((member, idx) => {
            const role = ARCHETYPES.find(a => a.id === member.archetypeId)!;
            return (
              <div key={member.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg flex items-center justify-between group hover:border-indigo-200 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden bg-slate-100 border-2 border-white shadow-sm" style={{ borderColor: memberColors[idx % memberColors.length] }}>
                    <img src={role.imageUrl} alt={role.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900">{member.name}</h4>
                    <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">{role.name}</p>
                  </div>
                </div>
                {!member.isCurrentUser && (
                  <button 
                    onClick={() => removeMember(member.id)}
                    className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                )}
              </div>
            );
          })}

          <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
               <h4 className="font-bold text-lg mb-4">Invite Real Mates</h4>
               <p className="text-slate-400 text-sm mb-6 leading-relaxed">Send a unique link to your band mates to have them take the assessment and join your collective.</p>
               <button className="w-full py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-900/40">
                 Copy Invite Link
               </button>
             </div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      <AIGuide context="collective" collective={currentCollective} />
    </div>
  );
};

export default CollectiveView;
