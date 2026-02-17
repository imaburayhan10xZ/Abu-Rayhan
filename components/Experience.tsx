import React from 'react';
import Section from './ui/Section';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Work <span className="gradient-text">History</span></h2>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 transform md:-translate-x-1/2"></div>
        
        <div className="space-y-12">
          {EXPERIENCE.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 transform md:-translate-x-1/2 translate-y-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10"></div>
              
              <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <span className="text-sm font-bold text-blue-400 mb-1 block">{item.period}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
                <h4 className="text-lg text-slate-400 mb-4 flex items-center gap-2 md:inline-flex">
                   <Briefcase className="w-4 h-4 inline md:hidden" /> 
                   {item.company}
                </h4>
                <div className={`glass-card p-6 rounded-xl border-l-2 ${index % 2 === 0 ? 'border-l-blue-500 md:border-l-0 md:border-r-2 md:border-r-blue-500' : 'border-l-blue-500'}`}>
                  <ul className={`space-y-2 text-slate-300 text-sm list-disc ${index % 2 === 0 ? 'md:list-none' : 'ml-4'}`}>
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;