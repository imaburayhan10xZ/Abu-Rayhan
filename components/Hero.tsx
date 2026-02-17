import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Twitter, Facebook, Instagram, Github } from 'lucide-react';
import { useContent, Link } from '../context/ContentContext';

const Hero: React.FC = () => {
  const { general } = useContent();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                {general.available_status || "Available for freelance work"}
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                I am <br />
                <span className="gradient-text">{general.name}</span>
              </h1>
              <p className="mt-6 text-xl text-slate-400 max-w-2xl leading-relaxed">
                {general.bio_short}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to="/projects"
                className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 transition-all flex items-center gap-2 transform hover:-translate-y-1"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6 pt-4"
            >
              {general.github_link && (
                <a href={general.github_link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                  <Github className="w-6 h-6" />
                </a>
              )}
              {general.linkedin_link && (
                <a href={general.linkedin_link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
              {general.twitter_link && (
                <a href={general.twitter_link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                  <Twitter className="w-6 h-6" />
                </a>
              )}
              {general.facebook_link && (
                <a href={general.facebook_link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors hover:scale-110 transform duration-200">
                  <Facebook className="w-6 h-6" />
                </a>
              )}
              {general.instagram_link && (
                <a href={general.instagram_link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors hover:scale-110 transform duration-200">
                  <Instagram className="w-6 h-6" />
                </a>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-lg md:max-w-none relative"
          >
             <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] rotate-6 opacity-30 blur-2xl animate-pulse"></div>
                <div className="absolute inset-0 bg-slate-900 border border-white/10 rounded-[2rem] overflow-hidden">
                   <img 
                     src={general.hero_image} 
                     alt={general.name} 
                     className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700 ease-out"
                   />
                </div>
                
                {/* Float Cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -right-4 top-10 glass-card p-4 rounded-xl border border-white/10 z-20"
                >
                  <span className="text-sm font-bold text-white">100%</span>
                  <span className="text-xs text-slate-400 block">Client Satisfaction</span>
                </motion.div>

                <motion.div 
                   animate={{ y: [0, 10, 0] }}
                   transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                   className="absolute -left-4 bottom-20 glass-card p-4 rounded-xl border border-white/10 z-20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-bold text-white">5+ Years</span>
                  </div>
                  <span className="text-xs text-slate-400 block ml-5">Experience</span>
                </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;