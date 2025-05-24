
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dates: '',
    guests: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Форма отправлена:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    
    // Очищаем форму
    setFormData({
      name: '',
      phone: '',
      email: '',
      dates: '',
      guests: '',
      message: ''
    });
  };

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

        <div className="grid lg:grid-cols-2 gap-12">
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

            {/* Режим работы */}
            <div className="bg-nature-gold-50 rounded-2xl p-6">
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

          {/* Форма бронирования */}
          <div className="bg-nature-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-nature-green-800 mb-6">
              Форма бронирования
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Имя */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-nature-green-700 mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-nature-green-500"
                  placeholder="Введите ваше имя"
                />
              </div>

              {/* Телефон */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-nature-green-700 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-nature-green-500"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-nature-green-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-nature-green-500"
                  placeholder="your@email.com"
                />
              </div>

              {/* Даты */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dates" className="block text-sm font-medium text-nature-green-700 mb-2">
                    Даты заезда
                  </label>
                  <input
                    type="text"
                    id="dates"
                    name="dates"
                    value={formData.dates}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-nature-green-500"
                    placeholder="15.01 - 18.01"
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-nature-green-700 mb-2">
                    Количество гостей
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-nature-green-500"
                  >
                    <option value="">Выберите</option>
                    <option value="1">1 человек</option>
                    <option value="2">2 человека</option>
                    <option value="3">3 человека</option>
                    <option value="4">4 человека</option>
                    <option value="5+">5+ человек</option>
                  </select>
                </div>
              </div>

              {/* Сообщение */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-nature-green-700 mb-2">
                  Дополнительные пожелания
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-nature-green-500"
                  placeholder="Укажите предпочтения по номеру, услугам или другие пожелания..."
                ></textarea>
              </div>

              {/* Кнопка отправки */}
              <Button
                type="submit"
                className="w-full bg-nature-green-600 hover:bg-nature-green-700 text-white font-medium py-3 text-lg"
              >
                Отправить заявку
              </Button>

              <p className="text-sm text-nature-green-600 text-center">
                * Обязательные поля. Мы свяжемся с вами в течение часа для подтверждения бронирования.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
