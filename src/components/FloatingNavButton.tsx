
import React, { useState, useEffect } from 'react';

const FloatingNavButton = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isWhite, setIsWhite] = useState(false);
  
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
      // Для блока "Как нас найти" делаем отступ сверху, чтобы заголовок не скрывался под шапкой
      const offset = nextSection.id === 'map' ? 100 : 0;
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
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

  // Переключение цветов при анимации
  useEffect(() => {
    const interval = setInterval(() => {
      setIsWhite(prev => !prev);
    }, 1000); // Каждую секунду меняем цвет

    return () => clearInterval(interval);
  }, []);

  const buttonTextColor = isWhite ? 'text-white' : 'text-nature-green-800';
  const buttonBorderColor = isWhite ? 'border-white' : 'border-nature-green-800';
  const buttonBgColor = isWhite ? 'bg-white' : 'bg-nature-green-800';

  return (
    <button
      onClick={scrollToNextSection}
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 ${buttonTextColor} font-medium transition-all duration-300 hover:scale-110`}
    >
      <div className="flex flex-col items-center space-y-1 animate-bounce">
        <span className="text-sm">Узнать больше</span>
        <div className={`w-4 h-6 border-2 ${buttonBorderColor} rounded-full flex justify-center relative overflow-hidden transition-colors duration-500`}>
          <div className={`w-1 h-2 ${buttonBgColor} rounded-full mt-1 animate-pulse transition-colors duration-500`}></div>
        </div>
      </div>
    </button>
  );
};

export default FloatingNavButton;
