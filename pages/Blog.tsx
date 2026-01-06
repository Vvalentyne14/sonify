
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_ARTICLES } from '../constants.tsx';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = ['all', 'growth', 'vocal', 'groups', 'productivity'];

  const filteredArticles = activeCategory === 'all' 
    ? BLOG_ARTICLES 
    : BLOG_ARTICLES.filter(a => a.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-20">
        <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-4 leading-none">Learning Hub</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto italic">Practical wisdom for the modern music collective.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-2xl font-bold uppercase text-xs tracking-widest transition-all ${
              activeCategory === cat 
              ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' 
              : 'bg-white text-slate-500 border border-slate-100 hover:border-indigo-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {filteredArticles.map(article => (
          <Link to={`/blog/${article.id}`} key={article.id} className="group cursor-pointer">
            <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-500">
              <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="px-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-lg">{article.category}</span>
                <span className="text-xs text-slate-400 font-medium">{new Date(article.date).toLocaleDateString()}</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">{article.title}</h2>
              <p className="text-slate-500 leading-relaxed mb-6 line-clamp-2">{article.excerpt}</p>
              <div className="flex items-center gap-2 text-indigo-600 font-bold group-hover:gap-4 transition-all">
                Read Article
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="mt-32 pt-20 border-t border-slate-100">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 bg-white rounded-[2rem] border border-slate-100">
            <h4 className="font-bold text-lg mb-2">How accurate is the assessment?</h4>
            <p className="text-sm text-slate-500">Our framework is built on decades of collective music experience and psychometric principles. While it is highly accurate, you are the final judge of your creative voice.</p>
          </div>
          <div className="p-8 bg-white rounded-[2rem] border border-slate-100">
            <h4 className="font-bold text-lg mb-2">Can I retake the test?</h4>
            <p className="text-sm text-slate-500">Yes! We recommend retaking it after a major project or tour, as roles can evolve with experience.</p>
          </div>
          <div className="p-8 bg-white rounded-[2rem] border border-slate-100">
            <h4 className="font-bold text-lg mb-2">Is my data private?</h4>
            <p className="text-sm text-slate-500">Completely. We do not store personal audio samples or identifying data unless you choose to create a profile (Phase 3).</p>
          </div>
          <div className="p-8 bg-white rounded-[2rem] border border-slate-100">
            <h4 className="font-bold text-lg mb-2">What is a "Collective"?</h4>
            <p className="text-sm text-slate-500">In Phase 3, we enable band leaders to invite members to a shared space where Maestro AI analyzes the synergy of the group DNA.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
