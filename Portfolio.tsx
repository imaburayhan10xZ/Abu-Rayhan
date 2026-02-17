import React, { Component, ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ContentProvider, useContent } from './context/ContentContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/ui/Cursor';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// --- Error Boundary ---
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center text-center p-4">
          <div className="max-w-md bg-slate-900 border border-red-500/20 p-8 rounded-2xl shadow-2xl">
            <h1 className="text-2xl font-bold text-red-500 mb-4">System Malfunction</h1>
            <p className="text-slate-400 mb-6">The application encountered a critical error during initialization.</p>
            <div className="text-xs text-slate-500 bg-black/50 p-4 rounded-lg overflow-auto text-left mb-6 font-mono border border-white/5">
              {this.state.error?.message || "Unknown Error"}
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors"
            >
              Reboot System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[100]">
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-slate-400 font-mono text-sm tracking-widest uppercase animate-pulse">Initializing...</p>
    </div>
  </div>
);

const AppContent: React.FC = () => {
  // Use centralized routing state
  const { currentPath, isLoading } = useContent();

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="mesh-bg min-h-screen text-slate-50 selection:bg-blue-500/30 flex flex-col">
      <Cursor />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPath === '/' && <Home key="home" />}
          {currentPath === '/about' && <About key="about" />}
          {currentPath === '/skills' && <Skills key="skills" />}
          {currentPath === '/projects' && <Projects key="projects" />}
          {currentPath === '/experience' && <Experience key="experience" />}
          {currentPath === '/contact' && <Contact key="contact" />}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <ErrorBoundary>
      <ContentProvider>
        <AppContent />
      </ContentProvider>
    </ErrorBoundary>
  );
};

export default Portfolio;