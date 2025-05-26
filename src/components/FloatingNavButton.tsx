
import React, { useState, useEffect } from 'react';

const FloatingNavButton = () => {
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    { id: 'hero', name: 'Главная' },
    { id: 'about', name: 'О нас' },
    { id: 'gallery', name: 'Галерея' },
    { id: 'rooms', name: 'Номера' },
    { id: 'services', name: 'Услуги' },
    { id: 'reviews', name: 'Отзывы' },
    { id: 'telegram', name: 'Новости' },
    { id: 'map', name: 'Карта' },
    { id: 'contacts', name: 'Контакты' },
    { id: 'faq', name: 'FAQ' }
  ];

  const scrollToNextSection = () => {
    const nextIndex = (currentSection + 1) % sections.length;
    const nextSection = sections[nextIndex];
    
    const element = document.getElementById(nextSection.id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setCurrentSection(nextIndex);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToNextSection}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-nature-gold-500 hover:bg-nature-gold-600 text-nature-green-800 px-6 py-3 rounded-full shadow-lg transition-all duration-200 font-medium"
      style={{ 
        animation: 'bounce 3s infinite',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="flex flex-col items-center space-y-1">
        <span className="text-sm">Узнать больше</span>
        <div className="w-4 h-6 border-2 border-nature-green-800 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-nature-green-800 rounded-full mt-1"></div>
        </div>
      </div>
    </button>
  );
};

export default FloatingNavButton;
