import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useContent } from '../context/ContentContext';

const Skills: React.FC = () => {
  const { skills } = useContent();

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-6xl font-bold mb-6">Technical <span className="gradient-text">Arsenal</span></h1>
           <p className="text-slate-400 max-w-2xl mx-auto text-lg">
             A comprehensive overview of my technical proficiency and the tools I use to build world-class digital products.
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
           {/* Radar Chart Section */}
           <motion.div 
             className="sticky top-32"
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
           >
              <div className="bg-slate-900/50 rounded-3xl border border-white/5 p-4 md:p-8 relative overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full transform scale-75"></div>
                 <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skills}>
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
                 </div>
                 <div className="text-center mt-4">
                    <p className="text-sm text-slate-500">Proficiency Visualization</p>
                 </div>
              </div>
           </motion.div>

           {/* Detailed Categories */}
           <div className="space-y-12">
              
              <div className="space-y-6">
                 <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
                    Frontend Ecosystem
                 </h2>
                 <p className="text-slate-400">
                    My core expertise lies in building performant, accessible, and beautiful user interfaces using the React ecosystem.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                       { name: 'React', level: 'Expert', desc: 'Hooks, Context, Patterns' },
                       { name: 'Next.js 14', level: 'Expert', desc: 'App Router, SSR, RSC' },
                       { name: 'TypeScript', level: 'Advanced', desc: 'Strict typing, Generics' },
                       { name: 'Tailwind CSS', level: 'Expert', desc: 'Responsive, Custom Config' },
                       { name: 'Framer Motion', level: 'Advanced', desc: 'Complex Animations' },
                       { name: 'Three.js', level: 'Intermediate', desc: '3D Web Experiences' }
                    ].map((skill, i) => (
                       <div key={i} className="bg-slate-900 border border-slate-800 p-4 rounded-xl hover:border-blue-500/30 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                             <h3 className="font-bold text-white">{skill.name}</h3>
                             <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full">{skill.level}</span>
                          </div>
                          <p className="text-xs text-slate-500">{skill.desc}</p>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="space-y-6">
                 <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-1 h-8 bg-purple-500 rounded-full"></span>
                    Backend & Infrastructure
                 </h2>
                 <p className="text-slate-400">
                    I build robust scalable APIs and handle database architecture to support heavy-duty applications.
                 </p>
                 <div className="flex flex-wrap gap-3">
                    {['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'GraphQL', 'Supabase', 'Redis', 'Docker', 'AWS Lambda'].map(skill => (
                       <span key={skill} className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium hover:border-purple-500/50 transition-colors cursor-default">
                          {skill}
                       </span>
                    ))}
                 </div>
              </div>

              <div className="space-y-6">
                 <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-1 h-8 bg-pink-500 rounded-full"></span>
                    Design & Tools
                 </h2>
                 <p className="text-slate-400">
                    Bridging the gap between design and code is my specialty. I use professional tools to prototype and version control.
                 </p>
                 <div className="flex flex-wrap gap-3">
                    {['Figma', 'Adobe XD', 'Git', 'Vercel', 'Jest', 'Cypress', 'CI/CD Pipelines'].map(skill => (
                       <span key={skill} className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium hover:border-pink-500/50 transition-colors cursor-default">
                          {skill}
                       </span>
                    ))}
                 </div>
              </div>

           </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;