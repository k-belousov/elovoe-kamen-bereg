
import React, { useEffect } from 'react';

const TelegramWidget = () => {
  useEffect(() => {
    // Создаем скрипт для виджета Telegram
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-post', 'kamenny_bereg/1');
    script.setAttribute('data-width', '100%');
    script.setAttribute('data-userpic', 'false');
    script.setAttribute('data-color', '2D9A5B');
    script.setAttribute('data-dark', '0');
    
    const container = document.getElementById('telegram-widget-container');
    if (container) {
      // Очищаем контейнер перед добавлением нового виджета
      container.innerHTML = '';
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
    <section id="telegram" className="section-padding bg-nature-green-800 px-4 sm:px-6 lg:px-8" data-section="telegram">
      <div className="max-w-4xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Наши новости в Telegram
          </h2>
          <div className="w-24 h-1 bg-nature-gold-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-nature-green-100 max-w-3xl mx-auto">
            Подписывайтесь на наш Telegram-канал, чтобы первыми узнавать о новостях, акциях и событиях
          </p>
        </div>

        {/* Виджет */}
        <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-2xl">
          <div className="text-center mb-6">
            <div className="inline-flex items-center space-x-3 bg-nature-green-50 rounded-full px-6 py-3 shadow-md">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>
              <span className="font-semibold text-nature-green-800">@kamenny_bereg</span>
            </div>
          </div>

          {/* Контейнер для виджета */}
          <div id="telegram-widget-container" className="max-w-2xl mx-auto min-h-[200px] flex items-center justify-center mb-6">
            {/* Заглушка, пока виджет загружается */}
            <div className="bg-nature-green-50 rounded-xl p-6 shadow-md border border-nature-green-200 w-full">
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

          {/* Кнопка подписки на канал */}
          <div className="text-center">
            <script 
              async 
              src="https://telegram.org/js/telegram-widget.js?22" 
              data-telegram-share-url="t.me/kamenniy_bereg" 
              data-comment="Следи за нашими новостями" 
              data-size="large" 
              data-text="Подписаться на канал"
            />
          </div>

          {/* Кнопки подписки */}
          <div className="text-center mt-6">
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a
                href="https://t.me/kamenny_bereg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors duration-200 font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span>Подписаться на канал</span>
              </a>
              <a
                href="https://t.me/kamenny_bereg_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-nature-green-600 text-white px-6 py-3 rounded-xl hover:bg-nature-green-700 transition-colors duration-200 font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12s12-5.372 12-12c0-6.627-5.373-12-12-12zm-2.117 18.021c-.126-.148-.232-.306-.312-.475-.081-.169-.121-.35-.121-.543 0-.323.088-.611.264-.864s.408-.446.695-.576c.287-.13.594-.195.921-.195.258 0 .503.043.736.129s.427.209.582.37c.155.161.277.356.366.585s.133.481.133.758c0 .29-.046.556-.138.798s-.224.455-.395.638c-.171.183-.378.328-.621.435s-.515.16-.817.16c-.337 0-.636-.067-.897-.201s-.468-.32-.621-.556z"/>
                </svg>
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
