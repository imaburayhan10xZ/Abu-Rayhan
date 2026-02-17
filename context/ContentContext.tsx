import React, { createContext, useContext, useEffect, useState } from 'react';
import { GeneralSettings, Project, Experience, SkillData, Testimonial } from '../types';
import { PROJECTS, EXPERIENCE, SKILLS_DATA, TESTIMONIALS } from '../constants';

// --- ROUTING UTILS ---
const getHashPath = () => {
  if (typeof window === 'undefined') return '/';
  
  const hash = window.location.hash;
  // Remove the '#' character
  let path = hash.slice(1);
  
  // If empty, default to root
  if (!path) return '/';
  
  // Ensure path starts with / to match constants (e.g., handles "#projects" as "/projects")
  if (!path.startsWith('/')) {
    path = '/' + path;
  }
  
  return path;
};

// --- CONTEXT DEFINITION ---
interface ContentContextType {
  general: GeneralSettings;
  projects: Project[];
  experience: Experience[];
  skills: SkillData[];
  testimonials: Testimonial[];
  isLoading: boolean;
  currentPath: string;
  navigate: (path: string) => void;
}

const ContentContext = createContext<ContentContextType | null>(null);

// Default General Data
const DEFAULT_GENERAL: GeneralSettings = {
  name: "Abu Rayhan",
  role: "Senior Full Stack Developer",
  bio_short: "Senior Full Stack Developer & UI/UX Designer crafting future-ready digital experiences.",
  bio_long: "I am a multidisciplinary developer based in San Francisco. I stand at the intersection of design and engineering. My journey began 5 years ago when I wrote my first line of code. I believe that great software is not just about writing clean code—it's about understanding the human sitting on the other side of the screen. This philosophy drives me to create interfaces that are intuitive, accessible, and delightful to use.",
  email: "contact@aburayhan.pro.bd",
  github_link: "https://github.com/imaburayhan10x",
  linkedin_link: "https://www.linkedin.com/in/imaburayhan10x/",
  twitter_link: "https://x.com/imaburayhan10x",
  facebook_link: "https://www.facebook.com/imaburayhan10x",
  instagram_link: "https://www.instagram.com/imaburayhan10x/",
  logo_image: "https://wsrv.nl/?url=https://drive.google.com/uc?id=1OCcoQRpU4adLz_lgpvMeciNRICpkA_o2&w=200&h=200&output=webp", 
  hero_image: "https://picsum.photos/800/800?random=100",
  privacy_policy: `Privacy Policy

1. Introduction
Welcome to my portfolio website. I respect your privacy and am committed to protecting your personal data. This policy explains how I handle any information collected through this site.

2. Information Collection
I do not collect personal data (such as names, addresses, or phone numbers) unless you voluntarily provide it to me via the "Contact" form or email.
- Contact Information: If you contact me, I will collect your name, email address, and the content of your message to respond to your inquiry.

3. Usage of Information
Any information you provide is used solely for:
- Responding to your questions or project inquiries.
- Discussing potential freelance or full-time opportunities.
I do not sell, rent, or share your personal information with third parties.

4. Cookies & Local Storage
This website may use local storage or session storage to improve user experience (e.g., remembering your theme preference). It does not use invasive tracking cookies for advertising purposes.

5. External Links
My portfolio contains links to external websites (e.g., LinkedIn, GitHub, Twitter). I am not responsible for the privacy practices or content of these external sites.

6. Updates
This policy is subject to change. Any updates will be posted on this page.`,
  terms_of_service: `Terms of Service

1. Acceptance of Terms
By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.

2. Intellectual Property
All content available on this site, including but not limited to text, graphics, logos, code snippets, and project demonstrations, is the intellectual property of Abu Rayhan unless otherwise stated.
- You may not copy, reproduce, or distribute the code or designs for commercial purposes without explicit permission.
- You may view and demonstrate the projects for personal, non-commercial use.

3. Use License
Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.

4. Disclaimer
The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, regarding the accuracy or reliability of the materials or external links.

5. Limitations
In no event shall I be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on this website.

6. Governing Law
Any claim relating to this website shall be governed by the laws of the jurisdiction in which I reside without regard to its conflict of law provisions.`,
  available_status: "Available for freelance work"
};

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state lazily to ensure window is available
  const [currentPath, setCurrentPath] = useState(() => getHashPath());
  
  const [data, setData] = useState({
    general: DEFAULT_GENERAL,
    projects: PROJECTS,
    experience: EXPERIENCE,
    skills: SKILLS_DATA,
    testimonials: TESTIMONIALS,
    isLoading: true
  });

  // Explicit Navigation Function
  const navigate = (path: string) => {
    // Normalize path to ensure it starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    
    if (currentPath !== normalizedPath) {
      setCurrentPath(normalizedPath);
      // Update browser URL without reloading
      window.location.hash = normalizedPath;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Listen for browser Back/Forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const newPath = getHashPath();
      setCurrentPath(prev => {
        if (prev !== newPath) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return newPath;
        }
        return prev;
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check in case of direct load or hard refresh
    // This ensures that if the user lands on #/projects, the state is correctly synced
    const initialPath = getHashPath();
    if (initialPath !== currentPath) {
        setCurrentPath(initialPath);
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []); // Empty dependency array intentionally

  const fetchSheetData = async () => {
    try {
      // Simulation of data fetching delay
      setTimeout(() => {
        setData(prev => ({ ...prev, isLoading: false }));
      }, 800);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setData(prev => ({ ...prev, isLoading: false }));
    }
  };

  useEffect(() => {
    fetchSheetData();
  }, []);

  return (
    <ContentContext.Provider value={{ ...data, currentPath, navigate }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};

// --- EXPORTED COMPONENTS ---

export const useLocation = () => {
  const { currentPath } = useContent();
  return { pathname: currentPath };
};

export interface LinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ to, className, children, onClick }) => {
  const { navigate } = useContent();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    if (onClick) onClick();
    navigate(to);
  };

  return (
    <a href={`#${to}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};