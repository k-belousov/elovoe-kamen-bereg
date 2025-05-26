'use client';

import React, { useState } from 'react';

const YandexMap: React.FC = () => {
  const [routeType, setRouteType] = useState<'auto' | 'pd'>('auto');

  const iframeSrc = `https://yandex.ru/map-widget/v1/?ll=60.855114%2C55.041500&mode=routes&rtext=55.159902%2C61.402554~55.004665%2C60.316781&rtt=${routeType}&z=10.3`;

  const externalMapUrl =
    'https://yandex.ru/maps/?ll=60.855114%2C55.041500&mode=routes&rtext=55.159902%2C61.402554~55.004665%2C60.316781&rtt=' +
    routeType +
    '&z=10.3';

  return (
    <section className="w-full px-4 py-10 bg-white rounded-2xl shadow-lg">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Как доехать до базы отдыха «Каменный берег»
        </h2>
        <p className="text-gray-600 mb-6">
          Выберите тип маршрута и посмотрите путь из Челябинска до базы отдыха в Чебаркульском районе.
        </p>

        {/* Переключатель маршрута */}
        <div className="flex gap-4 items-center mb-4">
          <button
            onClick={() => setRouteType('auto')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              routeType === 'auto'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            На автомобиле
          </button>
          <button
            onClick={() => setRouteType('pd')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              routeType === 'pd'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            Пешком
          </button>

          <a
            href={externalMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700"
          >
            Открыть в Яндекс.Картах
          </a>
        </div>

        {/* Карта */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md border">
          <iframe
            src={iframeSrc}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default YandexMap;
