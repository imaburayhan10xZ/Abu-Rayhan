import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import Hero from '../components/Hero';
import PageTransition from '../components/PageTransition';
import { useContent, Link } from '../context/ContentContext';

const Home: React.FC = () => {
  const { projects, general } = useContent();
  // Select top 2 featured projects
  const featuredProjects = projects.slice(0, 2);

  return (
    <PageTransition>
      <Hero />
      
      {/* Featured Work Teaser */}
      <section className="py-20 container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
           <div>
             <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="gradient-text">Work</span></h2>
             <p className="text-slate-400">A glimpse into my latest creations.</p>
           </div>
           <Link to="/projects" className="hidden md:flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-medium">
             View all projects <ArrowRight className="w-4 h-4" />
           </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           {featuredProjects.map((project: any) => (
              <Link to="/projects" key={project.id} className="group relative rounded-2xl overflow-hidden aspect-video block">
                 <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                 <div className="absolute bottom-0 left-0 p-8">
                    <span className="text-blue-400 text-sm font-bold mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{project.title}</h3>
                    <p className="text-slate-300 text-sm line-clamp-2">{project.description}</p>
                 </div>
              </Link>
           ))}
        </div>
        
        <div className="mt-8 md:hidden">
           <Link to="/projects" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-medium justify-center">
             View all projects <ArrowRight className="w-4 h-4" />
           </Link>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-slate-900/30 border-y border-white/5">
         <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
               <Terminal className="w-12 h-12 text-blue-500 mx-auto" />
               <h2 className="text-3xl md:text-5xl font-bold">More than just code.</h2>
               <p className="text-xl text-slate-400 leading-relaxed">
                 {general.bio_short}
               </p>
               <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold transition-all transform hover:-translate-y-1">
                  Read my story <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 container mx-auto px-6 md:px-12">
         <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 md:p-16 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to start your <br/> next project?</h2>
               <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                 I'm currently available for freelance work and open to full-time opportunities.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-all transform hover:scale-105">
                     Let's Talk
                  </Link>
                  <Link to="/projects" className="px-10 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                     View Portfolio
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </PageTransition>
  );
};

export default Home;