
import React from 'react';

export const Footer: React.FC = () => {
  const resumeUrl = 'https://drive.google.com/file/d/12JigtYtt8_QvzN0U3O6_kRU-leX3id7D/view';
  const linkedinUrl = 'https://www.linkedin.com/in/siddhant-nijhawan-453075255/';
  const githubUrl = 'https://github.com/Siddhant2107';

  return (
    <footer id="contact" className="bg-neutral-950 py-24 px-6 border-t border-white/10">
      <div className="container mx-auto text-center space-y-12">
        <div className="inline-block px-6 py-2 border border-lime rounded-full text-lime text-[10px] md:text-xs font-black tracking-widest uppercase mb-4">
          Ready for any opportunity • Product to Founder • Right Now
        </div>
        
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
          Let's Build <br/> The Future Of <br/> <span className="text-lime">ALT Inc.</span> Together
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-12">
          <a 
            href="mailto:siddhantnijhawan111@gmail.com" 
            className="text-2xl font-bold hover:text-lime transition-colors underline decoration-lime decoration-4 underline-offset-8 break-all"
          >
            siddhantnijhawan111@gmail.com
          </a>
          <div className="flex gap-4 md:gap-6">
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-4 bg-white/5 rounded-full hover:bg-lime hover:text-black transition-all font-bold text-sm uppercase tracking-widest"
            >
              LinkedIn
            </a>
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-4 bg-white/5 rounded-full hover:bg-lime hover:text-black transition-all font-bold text-sm uppercase tracking-widest"
            >
              Resume
            </a>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-4 bg-white/5 rounded-full hover:bg-lime hover:text-black transition-all font-bold text-sm uppercase tracking-widest"
            >
              GitHub
            </a>
          </div>
        </div>
        
        <div className="pt-24 text-gray-600 text-sm font-medium">
          &copy; {new Date().getFullYear()} Siddhant • Designed with ❤️ for ALT Inc.
        </div>
      </div>
    </footer>
  );
};
