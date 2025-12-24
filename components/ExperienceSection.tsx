
import React from 'react';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-neutral-950 py-24 px-6 border-y border-white/5">
      <div className="container mx-auto">
        <div className="mb-20">
          <h2 className="text-6xl md:text-8xl font-black text-lime tracking-tighter leading-none mb-4 uppercase">
            WHY WE <br/>SHOULD TALK?
          </h2>
          <div className="h-2 w-32 bg-lime"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-16">
            {/* Pillar 1 */}
            <div className="group border-l-2 border-white/10 pl-8 hover:border-lime transition-colors">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-white uppercase tracking-tight">
                <span className="h-3 w-3 bg-lime rotate-45"></span>
                THE 0 → 1 JOURNEY
              </h3>
              <div className="text-gray-400 text-lg leading-relaxed space-y-2">
                <p>I’ve lived the 0→1 product journey twice (Two product internships).</p>
                <p>First at a very early stage startup for senior citizens.</p>
                <p>And now building for the Uttarakhand Government.</p>
                <p className="text-white font-bold italic">Small teams. Messy problems. Clear outcomes. That’s where I am comfortable.</p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group border-l-2 border-white/10 pl-8 hover:border-lime transition-colors">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-white uppercase tracking-tight">
                <span className="h-3 w-3 bg-lime rotate-45"></span>
                DATA & AI LITERACY
              </h3>
              <div className="text-gray-400 text-lg leading-relaxed space-y-2">
                <p>I understand data and AI.</p>
                <p>Math, modelling, code both and I’ve built with all of it.</p>
                <p>A national finalist at Novartis’ data hackathon.</p>
                <p className="text-white font-bold">I can talk to engineers and contribute to product thinking… without getting lost and integrating business value in it.</p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group border-l-2 border-white/10 pl-8 hover:border-lime transition-colors">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-white uppercase tracking-tight">
                <span className="h-3 w-3 bg-lime rotate-45"></span>
                USER-CENTRIC THINKING
              </h3>
              <div className="text-gray-400 text-lg leading-relaxed space-y-2">
                <p>I know how to think like a user.</p>
                <p>Research is non negotiable for me.</p>
                <p>I love to ideate and build whatever I have in mind so to communicate better.</p>
                <p>I love diving into real stories of users and their frustrations, their workarounds, their quiet needs.</p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="group border-l-2 border-white/10 pl-8 hover:border-lime transition-colors">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-white uppercase tracking-tight">
                <span className="h-3 w-3 bg-lime rotate-45"></span>
                LEARNING & PATTERNS
              </h3>
              <div className="text-gray-400 text-lg leading-relaxed space-y-2">
                <p>I’m willing to learn what I don’t know. And learn it fast.</p>
                <p>Lately, I am read a lot on psychologcial literature specially for the current product (AI career counselling Bot like from pov MetaCognition to RIASEC model).</p>
                <p>I ask too many questions. It helps me spot patterns early.</p>
                <p className="text-lime font-bold">And sometimes, it helps me build things others overlook.</p>
              </div>
            </div>
          </div>

          <div className="relative h-fit lg:sticky lg:top-32">
            <div className="bg-white p-12 text-black shadow-2xl relative z-10">
              <div className="relative pt-8">
                {/* Rectangle placed just above 'love' */}
                <div className="absolute top-0 right-[12%] md:right-[18%] border-2 border-black px-3 py-1 text-[10px] font-black uppercase tracking-tighter bg-white z-20">
                  INTERNSHIP AT ALT INC
                </div>
                <blockquote className="text-4xl font-serif italic border-l-8 border-black pl-8 py-4 mb-8">
                  "All I ever wanted was <span className="line-through decoration-lime-500 decoration-4">love</span>."
                </blockquote>
              </div>
              <p className="text-right font-mono text-sm">— six word story</p>
              
              <div className="mt-12 space-y-4 pt-12 border-t border-black/10">
                <p className="font-bold uppercase text-xs tracking-widest opacity-50">Latest Deep Dive:</p>
                <div className="flex flex-wrap gap-2">
                  {['MetaCognition', 'RIASEC Model', 'Psychological Lit', 'Pattern Recognition'].map(tag => (
                    <span key={tag} className="bg-black text-white px-3 py-1 text-xs font-bold rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-lime -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
