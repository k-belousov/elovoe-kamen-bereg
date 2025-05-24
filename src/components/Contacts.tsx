
import React from 'react';

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

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Контактная информация */}
          <div className="space-y-8">
            <div className="bg-nature-green-50 rounded-2xl p-8">
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

                {/* Социальные сети */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nature-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🌐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-green-800 mb-3">Мы в соцсетях</h4>
                    <div className="flex space-x-3">
                      <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                        <span className="text-sm">VK</span>
                      </a>
                      <a href="#" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                        <span className="text-sm">IG</span>
                      </a>
                      <a href="#" className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                        <span className="text-sm">TG</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Информация о бронировании */}
          <div className="space-y-8">
            <div className="bg-nature-gold-50 rounded-2xl p-8">
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
            <div className="bg-nature-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-nature-green-800 mb-4">
                Режим работы
              </h3>
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
    </section>
  );
};

export default Contacts;
