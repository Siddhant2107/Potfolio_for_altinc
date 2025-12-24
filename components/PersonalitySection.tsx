
import React from 'react';

export const PersonalitySection: React.FC = () => {
  const interests = [
    { title: "War Strategies", icon: "⚔️" },
    { title: "Biospheres", icon: "🌍" },
    { title: "Aliens", icon: "👽" },
    { title: "Cosmology", icon: "✨" },
    { title: "Business", icon: "📊" },
    { title: "Geo-politics", icon: "🛰️" },
  ];

  return (
    <section className="min-h-screen bg-black py-24 px-6">
      <div className="container mx-auto space-y-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
             <h3 className="text-4xl font-black text-lime uppercase leading-tight">
               SORRY FOR <br/> JOKING
             </h3>
          </div>
          <div className="md:w-2/3">
             <p className="text-4xl md:text-6xl font-bold leading-tight">
               But this is who I am. <br/>
               <span className="text-gray-400">Funny, creative, adventurous guy.</span>
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-lime">And side by side, I also:</h4>
            <ul className="space-y-6 text-xl text-gray-300">
              <li className="flex gap-4 items-start">
                <span className="text-lime text-2xl">•</span>
                <span>Geek about AI, Product, and Data Science.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-lime text-2xl">•</span>
                <span>Love to derive deep insights out of messy data.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-lime text-2xl">•</span>
                <span>Research and Read a lot about everything like everything from War strategies to Biospheres to Aliens to Cosmology to Business and Geo-politics (Best Thing).</span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((item, idx) => (
              <div key={idx} className="p-6 bg-neutral-900 border border-white/10 rounded-2xl hover:border-lime transition-all group">
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform">{item.icon}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-lime">{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-lime text-black p-8 md:p-12 text-center rounded-3xl">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
            I am ready to wear N number of hats!
          </h2>
        </div>
      </div>
    </section>
  );
};
