
import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nature-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Логотип и описание */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-nature-brown-500 rounded-xl flex items-center justify-center">
                <div className="w-5 h-5 bg-nature-gold-400 rounded-full"></div>
              </div>
              <div className="text-xl font-semibold">
                Каменный берег
              </div>
            </div>
            <p className="text-nature-green-100 leading-relaxed mb-6">
              База отдыха для всей семьи на берегу кристально чистого озера. 
              Уютные домики, активный отдых и незабываемые впечатления в окружении природы.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-nature-green-700 rounded-lg flex items-center justify-center hover:bg-nature-green-600 transition-colors duration-200">
                <span className="text-sm font-bold">VK</span>
              </a>
              <a href="#" className="w-10 h-10 bg-nature-green-700 rounded-lg flex items-center justify-center hover:bg-nature-green-600 transition-colors duration-200">
                <span className="text-sm font-bold">IG</span>
              </a>
              <a href="#" className="w-10 h-10 bg-nature-green-700 rounded-lg flex items-center justify-center hover:bg-nature-green-600 transition-colors duration-200">
                <span className="text-sm font-bold">TG</span>
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Навигация</h3>
            <ul className="space-y-3">
              {[
                { id: 'gallery', label: 'Галерея' },
                { id: 'about', label: 'О базе' },
                { id: 'rooms', label: 'Номера' },
                { id: 'services', label: 'Услуги' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-nature-green-100 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Информация</h3>
            <ul className="space-y-3">
              {[
                { id: 'reviews', label: 'Отзывы' },
                { id: 'faq', label: 'FAQ' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-nature-green-100 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a href="#" className="text-nature-green-100 hover:text-white transition-colors duration-200">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-nature-green-100 hover:text-white transition-colors duration-200">
                  Договор оферты
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div>
                <p className="text-nature-green-100 mb-1">Телефон:</p>
                <a href="tel:+74951234567" className="text-white font-medium hover:text-nature-gold-300 transition-colors duration-200">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div>
                <p className="text-nature-green-100 mb-1">Email:</p>
                <a href="mailto:info@kamenny-bereg.ru" className="text-white font-medium hover:text-nature-gold-300 transition-colors duration-200">
                  info@kamenny-bereg.ru
                </a>
              </div>
              <div>
                <p className="text-nature-green-100 mb-1">Адрес:</p>
                <p className="text-white">
                  Тверская область,<br />
                  Осташковский район,<br />
                  д. Березовка, ул. Озерная, 15
                </p>
              </div>
              <div>
                <p className="text-nature-green-100 mb-1">Режим работы:</p>
                <p className="text-white">Ежедневно 9:00 — 21:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-nature-green-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-nature-green-100 text-sm">
              © {currentYear} База отдыха "Каменный берег". Все права защищены.
            </div>
            <div className="flex items-center space-x-6 text-sm text-nature-green-100">
              <span>🏆 Лучшая база отдыха 2024</span>
              <span>🌿 Экологически чистая зона</span>
              <span>⭐ Рейтинг 4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
