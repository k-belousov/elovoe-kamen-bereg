
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
      {/* Фоновое изображение (стилизованное под акварель) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Природа озера" 
          className="w-full h-full object-cover filter sepia-[0.3] saturate-150 hue-rotate-[10deg]" 
        />
        <div className="absolute inset-0 bg-nature-green-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-nature-green-900/60"></div>
      </div>

      {/* Контент */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Логотип */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3">
            <div className="w-12 h-12 bg-nature-brown-500 flex items-center justify-center rounded-2xl">
              <div className="w-6 h-6 bg-nature-gold-400 rounded-full"></div>
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
