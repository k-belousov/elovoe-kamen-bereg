
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'gallery', label: 'Галерея' },
    { id: 'about', label: 'О базе' },
    { id: 'rooms', label: 'Номера' },
    { id: 'services', label: 'Услуги' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'contacts', label: 'Контакты' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Логотип */}
          <div className="flex items-center space-x-3">
            <div className="flex items-end justify-center">
              <div className="relative">
                {/* Большая крыша */}
                <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[8px] border-transparent border-b-nature-green-500"></div>
                {/* Дом */}
                <div className="w-6 h-4 bg-nature-green-600 mx-auto"></div>
              </div>
            </div>
            <div className="text-lg lg:text-xl font-semibold text-nature-green-800">
              Каменный берег
            </div>
          </div>

          {/* Десктопная навигация */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-nature-green-700 hover:text-nature-green-900 font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Кнопка бронирования */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection('contacts')}
              className="bg-nature-gold-500 hover:bg-nature-gold-600 text-nature-green-800 font-medium px-6 py-2"
            >
              Забронировать
            </Button>
          </div>

          {/* Мобильное меню */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-nature-green-700"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></div>
              <div className={`w-full h-0.5 bg-current transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></div>
              <div className={`w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></div>
            </div>
          </button>
        </div>

        {/* Мобильная навигация */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-nature-green-200 bg-white/95 backdrop-blur-md">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-nature-green-700 hover:bg-nature-green-50 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => scrollToSection('contacts')}
                  className="w-full bg-nature-gold-500 hover:bg-nature-gold-600 text-nature-green-800 font-medium"
                >
                  Забронировать
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
