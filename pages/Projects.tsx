import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';
import { Project } from '../types';
import PageTransition from '../components/PageTransition';
import { useContent } from '../context/ContentContext';

const Projects: React.FC = () => {
  const { projects, general } = useContent();
  const [activeCategory, setActiveCategory] = useState('All');

  // Dynamically get categories from the data
  const Categories = ['All', ...new Set(projects.map((p: Project) => p.category))];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter((p: Project) => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Selected <span className="gradient-text">Works</span></h1>
            <p className="text-slate-400 text-lg">
               A showcase of projects where I pushed the boundaries of performance, design, and user experience.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/50 p-2 rounded-2xl border border-white/5 backdrop-blur-sm">
             <Filter className="w-5 h-5 text-slate-500 ml-2" />
             <div className="h-6 w-px bg-white/10 mx-2"></div>
             <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
               {Categories.map((cat: any) => (
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                     activeCategory === cat 
                       ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                       : 'text-slate-400 hover:text-white hover:bg-white/5'
                   }`}
                 >
                   {cat}
                 </button>
               ))}
             </div>
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project: Project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group rounded-3xl bg-slate-900 border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <span className="px-3 py-1 text-xs font-semibold bg-white/5 rounded-full text-slate-300 border border-white/5 uppercase tracking-wider">{project.category}</span>
                  </div>
                  
                  <p className="text-slate-400 mb-8 leading-relaxed flex-1">{project.description}</p>
                  
                  <div className="pt-6 border-t border-white/5">
                     <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Technologies</p>
                     <div className="flex flex-wrap gap-2">
                       {project.tags.map(tag => (
                         <span key={tag} className="text-sm text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20">
                            {tag}
                         </span>
                       ))}
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Projects;