
import React from 'react';

export const RevealSection: React.FC = () => {
  // New Drive Image ID provided by the user
  const driveImageId = '1-XnbY3c7ifKN9fDsMNinNZbtQ886PlZj';
  const directImageUrl = `https://lh3.googleusercontent.com/d/${driveImageId}`;
  const resumeUrl = 'https://drive.google.com/file/d/12JigtYtt8_QvzN0U3O6_kRU-leX3id7D/view?usp=sharing';

  return (
    <section className="min-h-screen bg-white text-black py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            I am <br/><span className="text-lime-600">Siddhant</span>
          </h2>
          <div className="h-1 w-20 bg-black"></div>
          <p className="text-2xl font-bold max-w-md">
            Your only AI+ Product guy who loves to tinker and build.
          </p>
          <button 
            onClick={() => window.open(resumeUrl, '_blank')}
            className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-lime-600 hover:text-black transition-all"
          >
            UNLOCK MY POTENTIAL
          </button>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-lime-400 -rotate-3 scale-105 group-hover:rotate-0 transition-transform rounded-2xl"></div>
          <div className="relative bg-white p-4 rounded-2xl border-4 border-black shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
             <img 
               src={directImageUrl} 
               alt="Siddhant Portfolio Visual" 
               className="w-full h-auto rounded-xl filter grayscale-0 group-hover:scale-105 transition-all duration-500 object-cover"
               onError={(e) => {
                 // Fallback format if direct lh3 link fails
                 (e.target as HTMLImageElement).src = `https://drive.google.com/uc?export=download&id=${driveImageId}`;
               }}
             />
          </div>
        </div>
      </div>
      
      {/* Visual Tearing Effect Decoration */}
      <div className="absolute top-0 right-0 w-32 h-full bg-black/5 -skew-x-12"></div>
    </section>
  );
};
