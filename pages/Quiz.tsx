
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUESTIONS } from '../constants.tsx';
import LikertScale from '../components/LikertScale';
import AIGuide from '../components/AIGuide';
import { UserScores, VocalData } from '../types';

interface QuizProps {
  onFinish: (scores: UserScores, vocalData: VocalData) => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish }) => {
  const [step, setStep] = useState<'onboarding' | 'assessment' | 'vocal'>('onboarding');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [vocalChoice, setVocalChoice] = useState<boolean | null>(null);
  const [recording, setRecording] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (val: number) => {
    const q = QUESTIONS[currentIndex];
    setAnswers(prev => ({ ...prev, [q.id]: val }));
    
    setTimeout(() => {
      if (currentIndex < QUESTIONS.length - 1) {
        setCurrentIndex(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setStep('vocal');
      }
    }, 200);
  };

  const calculateResults = () => {
    const totals: Record<string, number[]> = {
      EXP_STR: [], EMO_TEC: [], SPO_PLA: [], LEA_SUP: [], PER_CRE: [], COL_IND: []
    };

    QUESTIONS.forEach(q => {
      let score = answers[q.id] || 0;
      if (q.invert) score = -score;
      totals[q.dimension].push(score);
    });

    const normalize = (vals: number[]) => {
      const sum = vals.reduce((a, b) => a + b, 0);
      const maxPossible = vals.length * 3;
      return ((sum + maxPossible) / (2 * maxPossible)) * 100;
    };

    const userScores: UserScores = {
      EXP_STR: normalize(totals.EXP_STR),
      EMO_TEC: normalize(totals.EMO_TEC),
      SPO_PLA: normalize(totals.SPO_PLA),
      LEA_SUP: normalize(totals.LEA_SUP),
      PER_CRE: normalize(totals.PER_CRE),
      COL_IND: normalize(totals.COL_IND),
    };

    onFinish(userScores, { isVocalist: !!vocalChoice });
    navigate('/results');
  };

  if (step === 'onboarding') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center animate-in fade-in slide-in-from-bottom-8">
        <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Before we start...</h1>
        <p className="text-lg text-slate-600 mb-10">This assessment measures 6 key creative dimensions to map your unique musical DNA. Answer honestly; there are no wrong musical profiles.</p>
        <button 
          onClick={() => setStep('assessment')}
          className="px-12 py-4 bg-indigo-600 text-white font-bold rounded-2xl text-xl shadow-xl shadow-indigo-100 hover:scale-105 transition-all"
        >
          Begin Assessment
        </button>
        <AIGuide context="home" />
      </div>
    );
  }

  if (step === 'vocal') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center animate-in fade-in slide-in-from-bottom-8">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">The Vocal Layer</h2>
        <p className="text-lg text-slate-600 mb-10">Do you sing or use your voice musically in your creative work?</p>
        <div className="grid grid-cols-2 gap-4 mb-12">
          <button 
            onClick={() => setVocalChoice(true)}
            className={`p-8 rounded-3xl border-2 transition-all ${vocalChoice === true ? 'border-indigo-600 bg-indigo-50 shadow-lg' : 'border-slate-100 bg-white hover:border-slate-300'}`}
          >
            <div className="text-3xl mb-2">🎤</div>
            <div className="font-bold">Yes, I'm a vocalist</div>
          </button>
          <button 
            onClick={() => { setVocalChoice(false); calculateResults(); }}
            className={`p-8 rounded-3xl border-2 transition-all ${vocalChoice === false ? 'border-rose-600 bg-rose-50 shadow-lg' : 'border-slate-100 bg-white hover:border-slate-300'}`}
          >
            <div className="text-3xl mb-2">🎹</div>
            <div className="font-bold">No, I'm instrumental</div>
          </button>
        </div>

        {vocalChoice && (
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 animate-in fade-in scale-95 duration-300">
             <h3 className="text-xl font-bold mb-4">Optional: Voice Texture Sample</h3>
             <p className="text-sm text-slate-500 mb-6">Record a 15-second snippet of you humming or singing a simple scale to help Maestro analyze your vocal texture. (Privacy-first: not stored on servers)</p>
             <button 
               onMouseDown={() => setRecording(true)}
               onMouseUp={() => { setRecording(false); calculateResults(); }}
               className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${recording ? 'bg-rose-500 text-white animate-pulse' : 'bg-white border-2 border-indigo-600 text-indigo-600'}`}
             >
               {recording ? 'Recording... Release to Finish' : 'Hold to Record (15s)'}
             </button>
             <button onClick={calculateResults} className="mt-4 text-slate-400 text-sm font-medium hover:underline">Skip and see results</button>
          </div>
        )}
      </div>
    );
  }

  const currentQuestion = QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-24">
      <div className="mb-12">
        <div className="flex justify-between items-end mb-2">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Question {currentIndex + 1} of {QUESTIONS.length}</span>
          <span className="text-sm font-bold text-indigo-600">{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
          <div className="bg-indigo-600 h-full transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-100 min-h-[400px] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-12 leading-tight">
          {currentQuestion.text}
        </h2>
        <LikertScale value={answers[currentQuestion.id] ?? 0} onChange={handleAnswer} />
      </div>

      <div className="mt-8 flex justify-between items-center opacity-60 hover:opacity-100 transition-opacity">
        <button onClick={() => currentIndex > 0 && setCurrentIndex(prev => prev - 1)} disabled={currentIndex === 0} className="flex items-center gap-2 font-bold disabled:opacity-30">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Previous
        </button>
        <button onClick={() => setCurrentIndex(prev => prev + 1)} disabled={answers[currentQuestion.id] === undefined} className="flex items-center gap-2 font-bold disabled:opacity-30 text-indigo-600">
          Next
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <AIGuide context="assessment" />
    </div>
  );
};

export default Quiz;
