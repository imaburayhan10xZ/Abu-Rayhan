import React, { useState, useRef } from 'react';
import { Send, Mail, MapPin, Phone, MessageSquare, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useContent } from '../context/ContentContext';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { general } = useContent();
  const form = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    setSuccess(false);

    if (form.current) {
      emailjs
        .sendForm(
          'service_t5zubg6', 
          'template_fsvz4c3', 
          form.current, 
          {
            publicKey: 'Y1qWBBSZ3iyGGn9l1',
          }
        )
        .then(
          () => {
            setIsSubmitting(false);
            setSuccess(true);
            setFormState({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSuccess(false), 5000);
          },
          (error) => {
            console.error('FAILED...', error.text);
            setIsSubmitting(false);
            setError(true);
          },
        );
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 md:px-12">
         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <div>
               <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's start a <br /><span className="gradient-text">Conversation</span></h1>
               <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                  Interested in working together? I'm always open to discussing product design, collaborating on projects, or just chatting about the latest tech.
               </p>

               <div className="grid gap-8 mb-12">
                  <div className="glass-card p-6 rounded-2xl flex items-start gap-5 hover:border-blue-500/30 transition-colors">
                     <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                        <Mail className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-white font-bold text-lg mb-1">Email</h3>
                        <a href={`mailto:${general.email}`} className="text-slate-400 hover:text-blue-400 transition-colors block mb-1">{general.email}</a>
                        <p className="text-xs text-slate-500">Response time: Within 24 hours</p>
                     </div>
                  </div>

                  <div className="glass-card p-6 rounded-2xl flex items-start gap-5 hover:border-purple-500/30 transition-colors">
                     <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                        <MessageSquare className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-white font-bold text-lg mb-1">Socials</h3>
                        <div className="flex flex-wrap gap-4">
                           {general.linkedin_link && <a href={general.linkedin_link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>}
                           {general.twitter_link && <a href={general.twitter_link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">X (Twitter)</a>}
                           {general.facebook_link && <a href={general.facebook_link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">Facebook</a>}
                           {general.instagram_link && <a href={general.instagram_link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">Instagram</a>}
                           {general.github_link && <a href={general.github_link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">GitHub</a>}
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex items-center gap-3 text-slate-500 text-sm bg-slate-900/50 p-4 rounded-xl w-fit border border-white/5">
                  <Clock className="w-4 h-4" />
                  <span>Current Status: <span className="text-green-400 font-bold ml-1">{general.available_status || "Available"}</span></span>
               </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 transform rotate-1"></div>
               <div className="bg-slate-950/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 relative shadow-2xl">
                  <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                  
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label htmlFor="name" className="text-sm font-medium text-slate-400">Name</label>
                           <input 
                              type="text" 
                              name="name"
                              id="name"
                              required
                              value={formState.name}
                              onChange={(e) => setFormState({...formState, name: e.target.value})}
                              className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-600"
                              placeholder="John Doe"
                           />
                        </div>
                        <div className="space-y-2">
                           <label htmlFor="email" className="text-sm font-medium text-slate-400">Email</label>
                           <input 
                              type="email" 
                              name="email"
                              id="email"
                              required
                              value={formState.email}
                              onChange={(e) => setFormState({...formState, email: e.target.value})}
                              className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-600"
                              placeholder="john@example.com"
                           />
                        </div>
                     </div>
                     
                     <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-slate-400">Subject</label>
                        <select 
                           name="subject"
                           id="subject"
                           required
                           value={formState.subject}
                           onChange={(e) => setFormState({...formState, subject: e.target.value})}
                           className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-600 appearance-none"
                        >
                           <option value="" disabled>Select a topic</option>
                           <option value="freelance">Freelance Project</option>
                           <option value="job">Job Opportunity</option>
                           <option value="collab">Collaboration</option>
                           <option value="other">Other</option>
                        </select>
                     </div>

                     <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
                        <textarea 
                           name="message"
                           id="message"
                           required
                           rows={6}
                           value={formState.message}
                           onChange={(e) => setFormState({...formState, message: e.target.value})}
                           className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-600 resize-none"
                           placeholder="Tell me about your project needs..."
                        />
                     </div>

                     <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform active:scale-95 ${
                           success 
                           ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' 
                           : error 
                           ? 'bg-red-500 text-white shadow-lg shadow-red-500/20'
                           : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 shadow-lg shadow-blue-500/20'
                        }`}
                     >
                        {success ? (
                           'Message Sent Successfully!'
                        ) : error ? (
                           'Failed to Send. Try Again.'
                        ) : isSubmitting ? (
                           'Sending...'
                        ) : (
                           <>Send Message <Send className="w-4 h-4" /></>
                        )}
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
    </PageTransition>
  );
};

export default Contact;