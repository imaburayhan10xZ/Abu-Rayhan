import React from 'react';
import Section from './ui/Section';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="bg-slate-900/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Client <span className="gradient-text">Stories</span></h2>
        <p className="text-slate-400">Don't just take my word for it.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="glass-card p-8 rounded-2xl relative border border-white/5 hover:border-blue-500/20 transition-all duration-300 group">
            <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12 group-hover:text-blue-500/10 transition-colors" />
            
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            
            <p className="text-slate-300 mb-8 leading-relaxed">"{t.content}"</p>
            
            <div className="flex items-center gap-4">
              <img src={t.avatarUrl} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10" />
              <div>
                <h4 className="font-bold text-white text-sm">{t.name}</h4>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;