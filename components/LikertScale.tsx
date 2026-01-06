
import React from 'react';

interface LikertScaleProps {
  value: number; // -3 to 3
  onChange: (value: number) => void;
}

const LikertScale: React.FC<LikertScaleProps> = ({ value, onChange }) => {
  const options = [
    { label: 'Disagree', val: -3, size: 'w-12 h-12', color: 'border-rose-400 bg-rose-50' },
    { label: '', val: -2, size: 'w-10 h-10', color: 'border-rose-300 bg-rose-50' },
    { label: '', val: -1, size: 'w-8 h-8', color: 'border-rose-200 bg-rose-50' },
    { label: '', val: 0, size: 'w-6 h-6', color: 'border-slate-300 bg-slate-50' },
    { label: '', val: 1, size: 'w-8 h-8', color: 'border-indigo-200 bg-indigo-50' },
    { label: '', val: 2, size: 'w-10 h-10', color: 'border-indigo-300 bg-indigo-50' },
    { label: 'Agree', val: 3, size: 'w-12 h-12', color: 'border-indigo-400 bg-indigo-50' },
  ];

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <div className="flex items-center justify-between w-full max-w-md gap-2">
        <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">Disagree</span>
        <div className="flex items-center justify-center gap-3 sm:gap-6 flex-grow">
          {options.map((opt) => (
            <button
              key={opt.val}
              onClick={() => onChange(opt.val)}
              className={`
                ${opt.size} rounded-full border-2 transition-all duration-200 flex items-center justify-center
                ${value === opt.val 
                  ? (opt.val < 0 ? 'bg-rose-500 border-rose-600 scale-110 shadow-lg' : opt.val > 0 ? 'bg-indigo-500 border-indigo-600 scale-110 shadow-lg' : 'bg-slate-400 border-slate-500 scale-110 shadow-lg')
                  : opt.color + ' hover:border-slate-400'
                }
              `}
            >
              {value === opt.val && (
                 <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              )}
            </button>
          ))}
        </div>
        <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Agree</span>
      </div>
    </div>
  );
};

export default LikertScale;
