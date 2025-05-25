
import React, { useEffect } from 'react';

const TelegramWidget = () => {
  useEffect(() => {
    // Создаем скрипт для виджета Telegram
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-post', 'your_channel_name/1');
    script.setAttribute('data-width', '100%');
    script.setAttribute('data-userpic', 'false');
    script.setAttribute('data-color', '2D9A5B');
    script.setAttribute('data-dark', '0');
    
    const container = document.getElementById('telegram-widget-container');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      // Очищаем виджет при размонтировании
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <section id="news" className="section-padding bg-white" data-section="telegram">
      <div className="max-w-4xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-nature-green-800 mb-6">
            Наши новости в Telegram
          </h2>
          <div className="w-24 h-1 bg-nature-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-nature-green-600 max-w-2xl mx-auto">
            Подписывайтесь на наш Telegram-канал, чтобы первыми узнавать о новостях, акциях и событиях
          </p>
        </div>

        {/* Виджет */}
        <div className="bg-nature-green-50 rounded-2xl p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-md">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">📱</span>
              </div>
              <span className="font-semibold text-nature-green-800">@kamenny_bereg</span>
            </div>
          </div>

          {/* Контейнер для виджета */}
          <div id="telegram-widget-container" className="max-w-2xl mx-auto">
            {/* Временная заглушка, пока не настроен реальный канал */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-nature-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">КБ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-green-800">Каменный берег</h4>
                  <p className="text-sm text-nature-green-600">@kamenny_bereg</p>
                </div>
              </div>
              <p className="text-nature-green-700 mb-4">
                🌲 Добро пожаловать на наш канал! Здесь вы найдете:
                <br />• Актуальную информацию о свободных местах
                <br />• Фото с базы отдыха
                <br />• Специальные предложения и скидки
                <br />• Анонсы мероприятий
              </p>
              <div className="flex justify-between items-center text-sm text-nature-green-500">
                <span>Сегодня в 14:30</span>
                <span>👁 2.5k</span>
              </div>
            </div>
          </div>

          {/* Кнопки подписки */}
          <div className="text-center mt-8">
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a
                href="https://t.me/your_channel_name"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors duration-200 font-medium"
              >
                <span>📱</span>
                <span>Подписаться на канал</span>
              </a>
              <a
                href="https://t.me/your_bot_name"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-nature-green-600 text-white px-6 py-3 rounded-xl hover:bg-nature-green-700 transition-colors duration-200 font-medium"
              >
                <span>🤖</span>
                <span>Написать боту</span>
              </a>
            </div>
            <p className="text-sm text-nature-green-600 mt-4">
              Быстрые ответы на вопросы и мгновенное бронирование через Telegram
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramWidget;
