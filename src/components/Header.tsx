
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Определяем активную секцию
      const sections = ['about', 'gallery', 'rooms', 'services', 'reviews', 'news', 'contacts', 'faq'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'news') {
      // Для новостей скроллим к TelegramWidget
      const element = document.querySelector('section:has(#telegram-widget-container)') || 
                      document.querySelector('[data-section="telegram"]');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
        return;
      }
    }
    
    if (sectionId === 'contacts') {
      // Для контактов скроллим к блоку бронирования
      const contactsElement = document.getElementById('contacts');
      if (contactsElement) {
        const bookingElement = contactsElement.querySelector('.lg\\:grid-cols-2');
        if (bookingElement) {
          const offsetTop = contactsElement.offsetTop + (bookingElement as HTMLElement).offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        } else {
          contactsElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
        return;
      }
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'О базе' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'rooms', label: 'Номера' },
    { id: 'services', label: 'Услуги' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'news', label: 'Новости' },
    { id: 'contacts', label: 'Контакты' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    } h-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-3">
            <div className="flex items-end justify-center">
              <div className="relative">
                {/* Большая крыша */}
                <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[12px] border-transparent border-b-nature-green-500"></div>
                {/* Дом */}
                <div className="w-8 h-6 bg-nature-green-600 mx-auto"></div>
              </div>
            </div>
            <div className="text-lg lg:text-xl font-semibold text-nature-green-800">
              Каменный берег
            </div>
          </div>

          {/* Десктопная навигация */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-200 text-sm xl:text-base ${
                  activeSection === item.id 
                    ? 'text-nature-green-900 border-b-2 border-nature-gold-500' 
                    : 'text-nature-green-700 hover:text-nature-green-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Кнопка бронирования */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection('contacts')}
              className="bg-nature-gold-500 hover:bg-nature-gold-600 text-nature-green-800 font-medium px-4 xl:px-6 py-2 text-sm xl:text-base"
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
                  className={`block w-full text-left px-4 py-2 transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-nature-green-900 bg-nature-green-100' 
                      : 'text-nature-green-700 hover:bg-nature-green-50'
                  }`}
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
