
import React from 'react';

export const HookSection: React.FC = () => {
  const driveImageId = '1RgEUIDBc7izIXScCss00vpPSf1jgclPk';
  const directImageUrl = `https://lh3.googleusercontent.com/d/${driveImageId}`;

  return (
    <div className="bg-neutral-950">
      {/* Page 2: Catchy Quirky Hook with the user-provided image */}
      <section className="min-h-screen py-24 px-6 flex flex-col justify-center border-b border-white/5 relative">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="relative z-10 p-3 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-2 hover:rotate-0 transition-all duration-500">
               <img 
                 src={directImageUrl} 
                 alt="Siddhant's Vibe" 
                 className="w-full h-auto rounded-lg border-2 border-black object-cover"
                 onError={(e) => {
                   // Secondary fallback format just in case
                   (e.target as HTMLImageElement).src = `https://drive.google.com/uc?export=download&id=${driveImageId}`;
                 }}
               />
               <div className="absolute -top-4 -left-4 bg-lime text-black font-black px-4 py-2 text-xs uppercase shadow-lg border-2 border-black tracking-widest">
                 Siddhant's Vibe
               </div>
             </div>
             {/* Decorative Background Element */}
             <div className="absolute inset-0 bg-lime/10 blur-3xl rounded-full -z-10"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <div className="inline-flex items-center gap-4 text-lime font-mono text-sm tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-lime"></span>
              The Multi-Hyphenate
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black italic text-white leading-[0.9] tracking-tighter">
              I am the <span className="text-lime">"ALT"</span> key <br/>
              of your <span className="opacity-50 text-white italic">Product Team.</span>
            </h2>
            
            <p className="text-xl text-gray-400 font-medium max-w-lg leading-relaxed border-l-4 border-lime/30 pl-6">
              I am a <span className="text-white font-bold">"Jack of all trades"</span>. I dont have any special talent,I am just passionately curious about everyhting in this universe. 
              <br/><br/>
              <span className="text-lime italic font-bold">Warning:</span> May cause sudden bursts of productivity and accidental innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Page 3 & 4: The Hook Transition */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-6 bg-black relative overflow-hidden">
        {/* Background Text Deco */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] whitespace-nowrap select-none pointer-events-none">
          REALITY CHECK
        </div>

        <div className="space-y-12 relative z-10">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
            Sad <br/>
            <span className="text-lime animate-pulse">isn't it?</span>
          </h2>
          
          <div className="bg-white text-black px-16 py-10 -rotate-2 scale-105 shadow-[0_30px_60px_rgba(190,242,100,0.3)] border-4 border-lime inline-block">
            <p className="text-4xl md:text-6xl font-black font-mono tracking-tighter uppercase">
              Technically, <br/>
              But Not Actually.
            </p>
          </div>
          
          <p className="text-gray-500 font-bold uppercase tracking-[0.4em] pt-8">
            Keep Scrolling to see why
          </p>
        </div>
      </section>
    </div>
  );
};
