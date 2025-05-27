
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dwhb1qzhw/image/upload/e_sharpen:40/e_saturation:30/e_contrast:15/e_brightness:8/e_gen_restore/e_enhance/e_upscale/e_enhance/e_gen_replace:from_only%20sky;to_only%20leave%20the%20sky%20a%20little%20more%20saturated%20blue%20to%20use%20HDR;preserve-geometry_true/f_webp/q_auto:best/e_enhance/co_rgb:f4c27a,e_colorize:1/i_uvkpqx" 
          alt="Озеро Еловое, Чебаркуль" 
          className="w-full h-full object-cover filter sepia-[0.4] saturate-150 contrast-110 brightness-105" 
        />
        <div className="absolute inset-0 bg-nature-green-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-nature-green-900/40"></div>
      </div>

      {/* Контент */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Логотип без фона */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1">
              {/* Логотип - большая крыша и дом в минимализме зеленый */}
              <div className="flex items-end justify-center">
                <div className="relative">
                  {/* Большая крыша */}
                  <div className="w-0 h-0 border-l-[24px] border-r-[24px] border-b-[16px] border-transparent border-b-nature-green-500"></div>
                  {/* Дом */}
                  <div className="w-10 h-8 bg-nature-green-600 mx-auto"></div>
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
            className="bg-nature-green-600 hover:bg-nature-green-700 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            ЗАБРОНИРОВАТЬ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
