
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="flex gap-2 mb-8">
            <div className="h-4 w-4 bg-lime"></div>
            <div className="h-4 w-8 bg-gray-500"></div>
            <div className="h-4 w-4 bg-white"></div>
          </div>
          <h1 className="text-[15vw] md:text-[10rem] font-black leading-[0.85] tracking-tighter text-lime mb-8 uppercase">
            WHO <br/>
            <span className="opacity-90">AM I?</span>
          </h1>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-white font-bold max-w-lg leading-snug">
              A curious mind ready to disrupt the status quo at ALT Inc.
            </p>
            <p className="text-gray-400 text-lg italic border-l-2 border-lime pl-4">
              Scroll down to discover the unique intersection of AI, Product, and grit I'm ready to bring to your team.
            </p>
          </div>
        </div>
        
        {/* Animated Line Pattern */}
        <div className="relative hidden md:grid grid-cols-10 gap-4 opacity-30 select-none pointer-events-none">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={i} 
              className="w-1 h-8 bg-lime/40 rounded-full"
              style={{
                transform: `rotate(${Math.sin(i * 0.4) * 60}deg)`,
                opacity: 0.2 + (Math.random() * 0.5)
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-lime rounded-full animate-bounce"></div>
        </div>
      </div>
      
      {/* Background Decorative Text */}
      <div className="absolute -bottom-20 -left-20 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none uppercase">
        Siddhant
      </div>
    </section>
  );
};
