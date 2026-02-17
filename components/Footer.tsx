import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Modal from './ui/Modal';
import { useContent } from '../context/ContentContext';

const Footer: React.FC = () => {
  const { general } = useContent();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to render newlines from text
  const renderText = (text: string) => {
    return text.split('\n').map((str, index) => (
        <p key={index} className="mb-4">{str}</p>
    ));
  };

  return (
    <>
      <footer className="py-8 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {general.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setActiveModal('privacy')}
              className="text-slate-500 hover:text-white transition-colors text-sm hover:underline"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActiveModal('terms')}
              className="text-slate-500 hover:text-white transition-colors text-sm hover:underline"
            >
              Terms of Service
            </button>
            
            <button 
              onClick={scrollToTop}
              className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-all group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
            </button>
          </div>
        </div>
      </footer>

      <Modal 
        isOpen={activeModal === 'privacy'} 
        onClose={() => setActiveModal(null)} 
        title="Privacy Policy"
      >
        <div className="text-sm text-slate-300 leading-relaxed">
          {renderText(general.privacy_policy)}
        </div>
      </Modal>

      <Modal 
        isOpen={activeModal === 'terms'} 
        onClose={() => setActiveModal(null)} 
        title="Terms of Service"
      >
        <div className="text-sm text-slate-300 leading-relaxed">
          {renderText(general.terms_of_service)}
        </div>
      </Modal>
    </>
  );
};

export default Footer;