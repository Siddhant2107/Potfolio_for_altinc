
import React from 'react';

export const ProjectSection: React.FC = () => {
  const githubLink = "https://github.com/Siddhant2107/Clinical_trials";

  return (
    <section className="min-h-screen bg-black py-24 px-6 overflow-hidden">
      <style>
        {`
          @keyframes scan {
            0% { top: -10%; }
            100% { top: 110%; }
          }
          .scan-line {
            height: 4px;
            width: 100%;
            background: linear-gradient(to bottom, transparent, #bef264, transparent);
            position: absolute;
            z-index: 20;
            box-shadow: 0 0 20px #bef264;
            animation: scan 2s linear infinite;
            display: none;
          }
          .group:hover .scan-line {
            display: block;
          }
          @keyframes pulse-glow {
            0% { box-shadow: 0 0 0px 0px rgba(190, 242, 100, 0.4); }
            70% { box-shadow: 0 0 0px 20px rgba(190, 242, 100, 0); }
            100% { box-shadow: 0 0 0px 0px rgba(190, 242, 100, 0); }
          }
          .medical-pulse {
            animation: pulse-glow 2s infinite;
          }
        `}
      </style>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Visual Side: Medical AI Analysis */}
          <div className="lg:w-1/2 relative group cursor-pointer" onClick={() => window.open(githubLink, '_blank')}>
            <div className="relative overflow-hidden rounded-3xl border-4 border-white/10 group-hover:border-lime transition-all duration-700">
              {/* Scanning Beam Animation Overlay */}
              <div className="scan-line"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                alt="AI Medical Data Visualization" 
                className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-1000 brightness-[0.4] group-hover:brightness-75"
              />
              
              {/* Data Overlay Decorations */}
              <div className="absolute top-6 left-6 font-mono text-[10px] text-lime/50 group-hover:text-lime transition-colors space-y-1">
                <div>> ANALYZING_TRIALS...</div>
                <div>> PREDICTING_SUCCESS_RATE...</div>
                <div>> NEURAL_NET_ACTIVE</div>
              </div>
              
              <div className="absolute bottom-6 right-6 font-mono text-[10px] text-lime/50 group-hover:text-lime transition-colors">
                <div>CONFIDENCE: 98.4%</div>
                <div>EPOCH: 450</div>
              </div>
            </div>

            {/* Hover Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
              <div className="bg-lime text-black px-10 py-5 rounded-full font-black text-xl medical-pulse transform translate-y-4 group-hover:translate-y-0 transition-transform flex items-center gap-3">
                <span className="text-2xl">🧬</span>
                EXPLORE CODE ↗
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -left-6 bg-white text-black font-black px-6 py-6 rounded-2xl -rotate-6 shadow-2xl group-hover:rotate-0 transition-transform z-20 border-2 border-lime">
              <div className="text-xs text-lime-600 uppercase tracking-tighter">RANKED #3</div>
              30,000+<br/>TEAMS
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1 border border-lime text-lime text-xs font-black uppercase tracking-widest rounded">
              Medical x AI Case Study
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none uppercase">
              CLINICAL <br/><span className="text-lime italic tracking-tighter">FORESIGHT.</span>
            </h2>
            
            <div 
              className="bg-neutral-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/5 space-y-6 relative group cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(190,242,100,0.1)]"
              onClick={() => window.open(githubLink, '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lime/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 space-y-6">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic font-serif border-l-4 border-lime pl-6">
                  "Imagine you're the Business Head of a Pharma company deciding whether to invest in a clinical study... but worried about failure leaving you with nothing."
                </p>
                
                <p className="text-lg text-gray-400">
                  I architected a deep learning model to predict the outcome of high-stakes clinical trials across diverse medical fields. 
                  My solution didn't just crunch numbers; it provided a <span className="text-white font-bold">strategic safety net</span> for multi-million dollar investments.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/80 p-5 rounded-2xl border border-white/10 group-hover:border-lime/40 transition-all group-hover:translate-y-[-4px]">
                    <div className="text-lime font-black text-3xl">91.8%</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Industrial Standard Accuracy</div>
                  </div>
                  <div className="bg-black/80 p-5 rounded-2xl border border-white/10 group-hover:border-lime/40 transition-all group-hover:translate-y-[-4px]">
                    <div className="text-lime font-black text-3xl">30k</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Competitors Beaten</div>
                  </div>
                </div>

                <div className="pt-8 flex items-center justify-between group/cta border-t border-white/5">
                  <div className="space-y-1">
                    <span className="text-2xl font-black text-white group-hover:text-lime transition-colors block">Wanna know more?</span>
                    <span className="text-xs text-gray-500 font-mono">Click anywhere to see the repository</span>
                  </div>
                  <div className="flex items-center gap-2 text-black font-black uppercase tracking-widest text-sm bg-lime px-8 py-4 rounded-xl group-hover:scale-105 transition-all shadow-[0_0_20px_rgba(190,242,100,0.3)]">
                    VIEW PROJECT
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
