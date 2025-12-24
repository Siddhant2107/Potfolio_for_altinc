
import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { HookSection } from './components/HookSection';
import { RevealSection } from './components/RevealSection';
import { PersonalitySection } from './components/PersonalitySection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectSection } from './components/ProjectSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-lime-400 selection:text-black">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-lime z-50 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="text-xl font-black tracking-tighter">SIDDHANT<span className="text-lime">.</span></div>
        <a 
          href="mailto:siddhantnijhawan111@gmail.com" 
          className="bg-lime text-black px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
        >
          LET'S TALK
        </a>
      </nav>

      {/* Content Sections */}
      <main>
        <Hero />
        <HookSection />
        <RevealSection />
        <PersonalitySection />
        <ExperienceSection />
        <ProjectSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
