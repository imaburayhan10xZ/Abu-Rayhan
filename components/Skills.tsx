import React from 'react';
import Section from './ui/Section';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILLS_DATA } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <Section id="skills" className="bg-slate-950/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="gradient-text">Arsenal</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A balanced proficiency across the entire stack, focusing on modern JavaScript ecosystems.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Radar Chart */}
        <motion.div 
           className="h-[400px] w-full bg-slate-900/50 rounded-3xl border border-white/5 relative overflow-hidden"
           whileHover={{ scale: 1.02 }}
           transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full transform scale-75"></div>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILLS_DATA}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
              <Radar
                name="Proficiency"
                dataKey="A"
                stroke="#3b82f6"
                strokeWidth={3}
                fill="#3b82f6"
                fillOpacity={0.4}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                itemStyle={{ color: '#60a5fa' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Skill Tags/Categories */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-500 rounded-full block"></span>
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Redux', 'Zustand'].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium hover:border-blue-500/50 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-purple-500 rounded-full block"></span>
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'GraphQL', 'Supabase', 'Redis', 'Docker'].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium hover:border-purple-500/50 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-pink-500 rounded-full block"></span>
              Tools & Design
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Figma', 'Git', 'Vercel', 'AWS', 'Jest', 'Cypress', 'Adobe XD'].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium hover:border-pink-500/50 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;