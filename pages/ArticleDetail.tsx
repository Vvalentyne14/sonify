
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_ARTICLES } from '../constants.tsx';

const ArticleDetail: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const article = BLOG_ARTICLES.find(a => a.id === articleId);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [articleId]);

  if (!article) return <div className="p-20 text-center font-black">Article not found.</div>;

  const relatedArticles = BLOG_ARTICLES.filter(a => a.id !== article.id).slice(0, 2);

  return (
    <div className="bg-white min-h-screen">
      {/* Progress Bar */}
      <div className="fixed top-20 left-0 w-full h-1 z-[60] bg-slate-50">
        <div 
          className="h-full bg-indigo-600 transition-all duration-150" 
          style={{ width: `${scrollProgress}%` }} 
        />
      </div>

      {/* Header Image Section */}
      <header className="relative h-[60vh] overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 sm:p-20">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 font-bold mb-8 hover:text-white transition-colors uppercase text-xs tracking-widest">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7" /></svg>
              Back to Learning Hub
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-indigo-600 text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest">{article.category}</span>
              <span className="text-white/60 text-xs font-bold">{new Date(article.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <h1 className="text-4xl sm:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-4">{article.title}</h1>
            <p className="text-xl text-white/80 max-w-2xl font-medium italic">{article.excerpt}</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Article Body */}
          <article className="lg:col-span-8">
            <div 
              className="prose prose-slate prose-xl max-w-none 
                prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-900
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-blockquote:border-l-4 prose-blockquote:border-indigo-600 prose-blockquote:bg-slate-50 prose-blockquote:p-8 prose-blockquote:rounded-r-3xl prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:font-bold
                prose-strong:text-slate-900 prose-strong:font-black
                prose-ul:list-disc prose-li:text-slate-600"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4">
                 <button className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                    <svg className="w-6 h-6 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/></svg>
                 </button>
                 <button className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                    <svg className="w-6 h-6 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                 </button>
              </div>
              <button className="flex items-center gap-2 font-black text-indigo-600 uppercase text-xs tracking-widest hover:gap-4 transition-all">
                Bookmark Insight
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
              </button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl sticky top-32">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="font-black text-xl">M</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Maestro's Take</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 italic">"Musical intelligence isn't just about playing the notes; it's about the space you leave for others to contribute."</p>
              <div className="space-y-4">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/5">
                  <h4 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-1">Practical Tip</h4>
                  <p className="text-xs font-medium">Try recording your next rehearsal to audit where the 'role friction' actually happens.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
               <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-6">Continue Reading</h3>
               {relatedArticles.map(rel => (
                 <Link to={`/blog/${rel.id}`} key={rel.id} className="block group">
                    <div className="flex gap-4 items-center">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                        <img src={rel.imageUrl} alt={rel.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight mb-1">{rel.title}</h4>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{rel.category}</span>
                      </div>
                    </div>
                 </Link>
               ))}
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
