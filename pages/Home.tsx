
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 sm:pt-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-indigo-50 to-transparent -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10 mb-8 bg-indigo-50">
            <span>New: The 2025 Musical Archetype Framework</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            Discover Your True <br /><span className="text-indigo-600">Role in Music</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
            Most musicians struggle because they are in the wrong seat. 
            Take our free assessment to find your natural archetype and build better bands.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/quiz" 
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all"
            >
              Take the Free Test
            </Link>
            <Link 
              to="/library" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl text-lg border border-slate-200 hover:bg-slate-50 transition-all"
            >
              Explore Musical Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Actionable Insights</h3>
            <p className="text-slate-600">Understand how you interact with others and how to play to your innate strengths.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Fast & Free</h3>
            <p className="text-slate-600">Only takes 5-10 minutes. No registration required to see your primary archetype.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Better Collaboration</h3>
            <p className="text-slate-600">Find the right people for your band by identifying their complementary roles.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
