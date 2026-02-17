import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useContent } from '../context/ContentContext';
import { Experience as ExperienceType } from '../types';

const Experience: React.FC = () => {
  const { experience } = useContent();

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
           <h1 className="text-4xl md:text-6xl font-bold mb-6">My <span className="gradient-text">Journey</span></h1>
           <p className="text-slate-400 max-w-2xl mx-auto text-lg">
             A timeline of my professional career, education, and achievements.
           </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
           {/* Main Timeline */}
           <div className="lg:col-span-2 space-y-12">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
                 <Briefcase className="w-6 h-6 text-blue-500" />
                 Work Experience
              </h2>
              
              <div className="relative border-l border-slate-800 ml-3 space-y-12 pb-12">
                 {experience.map((item: ExperienceType, index: number) => (
                    <div key={item.id} className="relative pl-8 md:pl-12">
                       {/* Dot */}
                       <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                       
                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white">{item.role}</h3>
                          <span className="text-blue-400 font-mono text-sm bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 w-fit mt-2 sm:mt-0">{item.period}</span>
                       </div>
                       
                       <h4 className="text-lg text-slate-400 mb-6 font-medium">{item.company}</h4>
                       
                       <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                          <ul className="space-y-3">
                             {item.description.map((desc, i) => (
                                <li key={i} className="flex gap-3 text-slate-300 leading-relaxed">
                                   <span className="text-blue-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                   {desc}
                                </li>
                             ))}
                          </ul>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Sidebar: Education & Certs */}
           <div className="space-y-12">
              <div>
                 <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
                    <GraduationCap className="w-6 h-6 text-purple-500" />
                    Education
                 </h2>
                 <div className="space-y-6">
                    <div className="glass-card p-6 rounded-2xl border-l-4 border-l-purple-500">
                       <h3 className="text-lg font-bold text-white">BS Computer Science</h3>
                       <p className="text-purple-400 text-sm mb-2">University of Technology</p>
                       <p className="text-slate-500 text-sm">2014 - 2018</p>
                    </div>
                 </div>
              </div>

              <div>
                 <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
                    <Award className="w-6 h-6 text-pink-500" />
                    Certifications
                 </h2>
                 <div className="space-y-4">
                    <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex gap-4 items-center hover:border-pink-500/30 transition-colors">
                       <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-500 font-bold text-xs">AWS</div>
                       <div>
                          <h3 className="font-bold text-white text-sm">Solutions Architect</h3>
                          <p className="text-slate-500 text-xs">Amazon Web Services</p>
                       </div>
                    </div>
                    <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex gap-4 items-center hover:border-pink-500/30 transition-colors">
                       <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 font-bold text-xs">META</div>
                       <div>
                          <h3 className="font-bold text-white text-sm">Advanced React</h3>
                          <p className="text-slate-500 text-xs">Coursera</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Experience;