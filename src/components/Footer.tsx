
import React from 'react';

const VkIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.033-1.49-.726-1.49.264v1.727c0 .428-.132.528-.925.528-2.115 0-4.464-1.287-6.117-3.68C5.57 11.693 4.7 9.314 4.7 8.2c0-.297.099-.528.528-.528h1.744c.396 0 .544.198.693.66.726 2.31 1.925 4.329 2.409 4.329.198 0 .297-.099.297-.66V9.907c-.066-1.122-.66-1.221-.66-1.617 0-.231.198-.462.528-.462h2.772c.33 0 .462.198.462.627v3.383c0 .33.132.462.231.462.198 0 .396-.132.792-.528 1.155-1.155 1.98-2.937 1.98-2.937.099-.231.297-.462.693-.462h1.744s.528.066.428.726c-.198 1.188-2.277 3.383-2.277 3.383-.165.264-.132.396 0 .627.231.396 1.023 1.023 1.551 1.617.726.792 1.287 1.452.924 1.925z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

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
              <div className="flex items-end justify-center">
                <div className="relative">
                  {/* Большая крыша */}
                  <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[12px] border-transparent border-b-nature-green-500"></div>
                  {/* Дом */}
                  <div className="w-8 h-6 bg-nature-green-600 mx-auto"></div>
                </div>
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
              <a href="#" className="w-10 h-10 bg-nature-green-700 rounded-lg flex items-center justify-center hover:bg-nature-green-600 hover:scale-110 transition-all duration-200">
                <VkIcon />
              </a>
              <a href="#" className="w-10 h-10 bg-nature-green-700 rounded-lg flex items-center justify-center hover:bg-nature-green-600 hover:scale-110 transition-all duration-200">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 bg-nature-green-700 rounded-lg flex items-center justify-center hover:bg-nature-green-600 hover:scale-110 transition-all duration-200">
                <TelegramIcon />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Навигация</h3>
            <ul className="space-y-3">
              {[
                { id: 'about', label: 'О базе' },
                { id: 'gallery', label: 'Галерея' },
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
                { id: 'news', label: 'Новости' },
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
                <a href="/privacy" className="text-nature-green-100 hover:text-white transition-colors duration-200">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="/terms" className="text-nature-green-100 hover:text-white transition-colors duration-200">
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
              <span>🏞️ Чистое озеро</span>
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
