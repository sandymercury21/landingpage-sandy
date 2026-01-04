
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', 'Banking', 'Healthcare', 'Government', 'Industrial'];
  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Portofolio Terpilih</h2>
            <p className="text-slate-600 max-w-xl">
              Daftar beberapa aplikasi yang telah saya kembangkan selama satu dekade terakhir untuk berbagai instansi dan perusahaan besar.
            </p>
          </div>
          
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
              <div className="p-8 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <ExternalLink size={18} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-slate-400 border border-slate-100 px-2 py-1 rounded">
                      #{tag.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
