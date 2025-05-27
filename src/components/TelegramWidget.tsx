import React from 'react';

const TelegramWidget = () => {
  return (
    <section id="telegram" className="section-padding bg-nature-green-800 px-4 sm:px-6 lg:px-8" data-section="telegram">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Наши новости в Telegram
          </h2>
          <div className="w-24 h-1 bg-nature-gold-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-nature-green-100 max-w-3xl mx-auto">
            Подписывайтесь на наш Telegram-канал, чтобы первыми узнавать о новостях, акциях и событиях
          </p>
        </div>
        {/* Виджет */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center">
          <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-white border border-nature-green-200 mb-6">
            <iframe
              src="https://xn--r1a.website/s/kamenniy_bereg"
              title="Telegram Channel Widget"
              className="w-full h-[420px] sm:h-[500px] md:h-[600px] border-0"
              style={{ minHeight: 320 }}
              allowFullScreen
            ></iframe>
          </div>
          <a
            href="https://t.me/kamenniy_bereg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-nature-green-600 text-white px-6 py-3 rounded-xl hover:bg-nature-green-700 transition-colors duration-200 font-medium shadow-md"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span>Подписаться на канал</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TelegramWidget;
