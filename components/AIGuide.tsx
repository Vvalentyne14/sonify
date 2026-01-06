
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Archetype, UserScores, Collective } from '../types';

interface AIGuideProps {
  context: 'assessment' | 'results' | 'library' | 'home' | 'collective' | 'planner';
  archetype?: Archetype;
  scores?: UserScores;
  collective?: Collective;
}

const AIGuide: React.FC<AIGuideProps> = ({ context, archetype, scores, collective }) => {
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const generateAdvice = async () => {
    setLoading(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    let prompt = "";
    if (context === 'assessment') {
      prompt = "You are a calm, intelligent music mentor. The user is currently taking a musical intelligence assessment. Give them a 2-sentence encouraging message about how finding their role leads to creative freedom.";
    } else if (context === 'results' && archetype && scores) {
      prompt = `The user's primary musical role is '${archetype.name}'. Their scores are Expression vs Structure: ${scores.EXP_STR}, Emotion vs Technique: ${scores.EMO_TEC}, Spontaneity vs Planning: ${scores.SPO_PLA}. Explain what this means for their creative growth in a warm, encouraging way. Use musical terminology. Keep it under 100 words.`;
    } else if (context === 'collective' && collective) {
      const memberRoles = collective.members.map(m => m.archetypeId).join(", ");
      prompt = `Analyze this band collective called '${collective.name}'. The members have these archetypes: ${memberRoles}. Identify one major strength of this group and one potential creative bottleneck based on these personality roles. Keep it professional, musical, and supportive. Under 100 words.`;
    } else if (context === 'planner' && archetype) {
      prompt = `The user is a ${archetype.name} using the creative planner. Provide a 3-step '30-Day Sprint' strategy specifically tailored to this archetype's strengths and pitfalls. Focus on operational excellence and artistic growth. Under 100 words.`;
    } else {
      prompt = "Give a quick greeting as a music mentor, welcoming the user to the platform.";
    }

    try {
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { systemInstruction: "You are 'Maestro', an AI music guide. You are wise, supportive, and use professional music terms. Avoid being robotic." }
      });
      setResponse(result.text || "I'm here to guide your musical journey.");
    } catch (e) {
      setResponse("Welcome! I'm Maestro, your guide to musical clarity.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateAdvice();
  }, [context, archetype?.id, collective?.members.length]);

  if (!isOpen) return (
    <button 
      onClick={() => setIsOpen(true)}
      className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all z-[60]"
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
    </button>
  );

  return (
    <div className="fixed bottom-6 right-6 w-[350px] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-[60] animate-in slide-in-from-bottom-4">
      <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-xs font-bold">M</span>
          </div>
          <div>
            <h4 className="font-bold text-sm">Maestro AI</h4>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-[10px] text-indigo-100 font-bold uppercase tracking-wider">Strategic Intel</span>
            </div>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <div className="p-6">
        {loading ? (
          <div className="flex gap-2 items-center">
             <div className="flex space-x-1">
               <div className="h-1.5 w-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
               <div className="h-1.5 w-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
               <div className="h-1.5 w-1.5 bg-slate-300 rounded-full animate-bounce"></div>
             </div>
             <span className="text-xs text-slate-400 font-medium">Maestro is optimizing...</span>
          </div>
        ) : (
          <p className="text-slate-600 text-sm leading-relaxed italic">
            "{response}"
          </p>
        )}
      </div>
      <div className="px-6 pb-6 pt-2">
         <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest border-t border-slate-50 pt-4 mb-2">Tactical Focus</div>
         <p className="text-xs font-semibold text-indigo-600">Complete one 'Creative' milestone before noon.</p>
      </div>
    </div>
  );
};

export default AIGuide;
