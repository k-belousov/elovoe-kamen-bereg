
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

const Contacts = () => {
  return (
    <section id="contacts" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nature-green-800 mb-6">
            Контакты
          </h2>
          <div className="w-24 h-1 bg-nature-gold-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-nature-green-600 max-w-3xl mx-auto">
            Свяжитесь с нами для бронирования или получения дополнительной информации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Контактная информация */}
          <div className="space-y-8 h-full">
            <div className="bg-nature-green-50 rounded-2xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-nature-green-800 mb-6">
                  Наши контакты
                </h3>
                
                <div className="space-y-6">
                  {/* Телефон */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-nature-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-nature-green-800 mb-1">Телефон</h4>
                      <p className="text-nature-green-700">+7 (495) 123-45-67</p>
                      <p className="text-nature-green-700">+7 (916) 987-65-43</p>
                      <p className="text-sm text-nature-green-600">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-nature-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-nature-green-800 mb-1">Email</h4>
                      <p className="text-nature-green-700">info@kamenny-bereg.ru</p>
                      <p className="text-nature-green-700">booking@kamenny-bereg.ru</p>
                    </div>
                  </div>

                  {/* Адрес */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-nature-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-nature-green-800 mb-1">Адрес</h4>
                      <p className="text-nature-green-700">
                        Тверская область, Осташковский район,
                        <br />деревня Березовка, ул. Озерная, 15
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Социальные сети */}
              <div className="mt-8">
                <h4 className="font-semibold text-nature-green-800 mb-3">Мы в соцсетях</h4>
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <VkIcon />
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                    <InstagramIcon />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                    <TelegramIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Информация о бронировании */}
          <div className="space-y-8 h-full">
            <div className="bg-nature-gold-50 rounded-2xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-nature-green-800 mb-6">
                  Бронирование
                </h3>
                <div className="space-y-4 text-nature-green-700">
                  <p className="text-lg leading-relaxed">
                    Для бронирования номеров звоните по телефону или отправляйте сообщение в Telegram.
                  </p>
                  <div className="bg-white rounded-xl p-6 border border-nature-green-200">
                    <h4 className="font-semibold text-nature-green-800 mb-3">Что нужно сообщить:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-nature-gold-500 rounded-full mr-3"></div>
                        Желаемые даты заезда и выезда
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-nature-gold-500 rounded-full mr-3"></div>
                        Количество гостей
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-nature-gold-500 rounded-full mr-3"></div>
                        Тип номера
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-nature-gold-500 rounded-full mr-3"></div>
                        Дополнительные услуги
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Режим работы */}
              <div className="bg-white rounded-xl p-6 border border-nature-green-200 mt-6">
                <h4 className="font-semibold text-nature-green-800 mb-4">
                  Режим работы
                </h4>
                <div className="space-y-2 text-nature-green-700">
                  <div className="flex justify-between">
                    <span>Понедельник - Пятница:</span>
                    <span>9:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота - Воскресенье:</span>
                    <span>8:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Заезд/выезд:</span>
                    <span>14:00 / 12:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
