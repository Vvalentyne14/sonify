
import React, { useState, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import Library from './pages/Library';
import RoleDetail from './pages/RoleDetail';
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';
import CollectiveView from './pages/CollectiveView';
import Planner from './pages/Planner';
import { UserScores, VocalData, Archetype, Dimension } from './types';
import { ARCHETYPES } from './constants.tsx';

const App: React.FC = () => {
  const [results, setResults] = useState<UserScores | null>(null);
  const [vocalData, setVocalData] = useState<VocalData | null>(null);

  const primaryArchetypeId = useMemo(() => {
    if (!results) return null;
    let minDistance = Infinity;
    let closestId = ARCHETYPES[0].id;
    ARCHETYPES.forEach(role => {
      let distance = 0;
      (Object.keys(results) as Dimension[]).forEach(dim => {
        distance += Math.pow(results[dim] - role.profile[dim], 2);
      });
      if (distance < minDistance) {
        minDistance = distance;
        closestId = role.id;
      }
    });
    return closestId;
  }, [results]);

  const handleFinishQuiz = (scores: UserScores, vocal: VocalData) => {
    setResults(scores);
    setVocalData(vocal);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz onFinish={handleFinishQuiz} />} />
            <Route 
              path="/results" 
              element={(results && vocalData) ? <Results scores={results} vocalData={vocalData} /> : <Navigate to="/" />} 
            />
            <Route path="/library" element={<Library />} />
            <Route path="/library/:roleId" element={<RoleDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:articleId" element={<ArticleDetail />} />
            <Route 
              path="/collective" 
              element={results ? <CollectiveView userScores={results} /> : <Navigate to="/" />} 
            />
            <Route 
              path="/planner" 
              element={results && primaryArchetypeId ? <Planner userScores={results} archetypeId={primaryArchetypeId} /> : <Navigate to="/quiz" />} 
            />
          </Routes>
        </main>
        <footer className="bg-white border-t border-slate-100 py-20">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            <div className="md:col-span-2">
              <h4 className="text-2xl font-black tracking-tighter mb-4">Sonify</h4>
              <p className="text-slate-500 max-w-sm italic">The world's leading musical intelligence platform for individuals and collectives. Discover your voice, build your team.</p>
            </div>
            <div>
              <h5 className="font-black text-slate-900 mb-6 uppercase text-xs tracking-widest">Platform</h5>
              <ul className="text-slate-500 space-y-4 text-sm font-bold">
                <li><Link to="/planner" className="hover:text-indigo-600 transition-colors">Creative Planner</Link></li>
                <li><Link to="/library" className="hover:text-indigo-600 transition-colors">Roles Library</Link></li>
                <li><Link to="/blog" className="hover:text-indigo-600 transition-colors">Learning Hub</Link></li>
                <li><Link to="/quiz" className="hover:text-indigo-600 transition-colors">Assessment</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-slate-900 mb-6 uppercase text-xs tracking-widest">Community</h5>
              <ul className="text-slate-500 space-y-4 text-sm font-bold">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Support</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 text-center mt-20 border-t border-slate-50 pt-12">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
              &copy; {new Date().getFullYear()} Sonify Music Intelligence &bull; Phase 4 Deployment
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
