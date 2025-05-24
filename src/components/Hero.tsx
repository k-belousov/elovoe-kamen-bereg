
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновое изображение (акварельное с озером) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Акварельный пейзаж с озером" 
          className="w-full h-full object-cover filter sepia-[0.2] saturate-150 hue-rotate-[15deg] brightness-110" 
        />
        <div className="absolute inset-0 bg-nature-green-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-nature-green-900/50"></div>
      </div>

      {/* Контент */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Логотип */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3">
            <div className="flex space-x-1">
              {/* Логотип - три домика в минималистичном стиле */}
              <div className="flex items-end space-x-0.5">
                <div className="w-4 h-6 bg-nature-brown-500 relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[6px] border-transparent border-b-nature-brown-600"></div>
                </div>
                <div className="w-4 h-8 bg-nature-brown-600 relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[6px] border-transparent border-b-nature-brown-700"></div>
                </div>
                <div className="w-4 h-5 bg-nature-brown-500 relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[6px] border-transparent border-b-nature-brown-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Каменный берег
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          База отдыха для всей семьи на берегу озера
        </p>

        <div className="mb-12">
          <Button 
            onClick={() => scrollToSection('contacts')} 
            size="lg" 
            className="bg-nature-gold-500 hover:bg-nature-gold-600 text-nature-green-800 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            ЗАБРОНИРОВАТЬ
          </Button>
        </div>

        {/* Прокрутка вниз */}
        <button 
          onClick={() => scrollToSection('about')} 
          className="animate-bounce text-white/80 hover:text-white transition-colors duration-200"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm uppercase tracking-wider">Узнать больше</span>
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
