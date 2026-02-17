import React from 'react';
import { Terminal, Cpu, Globe, Coffee, BookOpen, Heart } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* Header */}
          <div className="space-y-6 text-center md:text-left">
             <h1 className="text-4xl md:text-6xl font-bold leading-tight">
               Crafting digital experiences with <br/>
               <span className="gradient-text">Passion & Precision</span>
             </h1>
             <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
               I am Abu Rayhan, a multidisciplinary developer based in San Francisco. I stand at the intersection of design and engineering, where aesthetics meet functionality.
             </p>
          </div>

          {/* Bio Grid */}
          <div className="grid md:grid-cols-2 gap-12">
             <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                <p>
                  My journey began 5 years ago when I wrote my first line of code. What started as a curiosity quickly turned into an obsession with building things that live on the web.
                </p>
                <p>
                  I believe that great software is not just about writing clean code—it's about understanding the human sitting on the other side of the screen. This philosophy drives me to create interfaces that are intuitive, accessible, and delightful to use.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new coffee shops, reading about cognitive psychology, or hiking the trails of the Bay Area.
                </p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                   <Coffee className="w-8 h-8 text-blue-400 mb-4" />
                   <h3 className="font-bold text-white text-lg">Fuel</h3>
                   <p className="text-slate-400 text-sm mt-2">Powered by espresso and curiosity.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
                   <BookOpen className="w-8 h-8 text-purple-400 mb-4" />
                   <h3 className="font-bold text-white text-lg">Learning</h3>
                   <p className="text-slate-400 text-sm mt-2">Always reading, always growing.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-pink-500/30 transition-colors">
                   <Heart className="w-8 h-8 text-pink-400 mb-4" />
                   <h3 className="font-bold text-white text-lg">Passion</h3>
                   <p className="text-slate-400 text-sm mt-2">Loving what I do every single day.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors">
                   <Globe className="w-8 h-8 text-green-400 mb-4" />
                   <h3 className="font-bold text-white text-lg">Remote</h3>
                   <p className="text-slate-400 text-sm mt-2">Available for global collaboration.</p>
                </div>
             </div>
          </div>

          {/* Philosophy Section */}
          <div className="pt-10">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
               <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
               My Philosophy
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
               <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                  <Terminal className="w-10 h-10 text-blue-400 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-3">Clean Code</h3>
                  <p className="text-slate-400">
                    I write scalable, maintainable, and self-documenting code. Future-proofing is not an option; it's a standard.
                  </p>
               </div>

               <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                  <Cpu className="w-10 h-10 text-purple-400 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-3">Performance</h3>
                  <p className="text-slate-400">
                    Speed is a feature. I optimize every byte to ensure silky smooth 60fps animations and instant load times.
                  </p>
               </div>

               <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-20 h-20 bg-pink-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                  <Globe className="w-10 h-10 text-pink-400 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-3">Accessibility</h3>
                  <p className="text-slate-400">
                    The web is for everyone. I build inclusive experiences that work for all users, regardless of device or ability.
                  </p>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </PageTransition>
  );
};

export default About;