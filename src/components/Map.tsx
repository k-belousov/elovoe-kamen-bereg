'use client';

import React, { useState } from 'react';

const Map = () => {
  const [routeType, setRouteType] = useState<'auto' | 'pd'>('auto');

  const iframeSrc = `https://yandex.ru/map-widget/v1/?ll=60.855114%2C55.041500&mode=routes&rtext=55.159902%2C61.402554~55.004665%2C60.316781&rtt=${routeType}&z=10.3`;

  const externalMapUrl = `https://yandex.ru/maps/?ll=60.855114%2C55.041500&mode=routes&rtext=55.159902%2C61.402554~55.004665%2C60.316781&rtt=${routeType}&z=10.3`;

  return (
    <section id="map" className="py-12 bg-nature-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-nature-green-800 mb-4">
            Как нас найти
          </h2>
          <div className="w-20 h-1 bg-nature-gold-500 mx-auto mb-4"></div>
          <p className="text-lg text-nature-green-600 max-w-2xl mx-auto">
            База отдыха "Каменный берег" находится в живописном месте на берегу озера
          </p>
        </div>

        {/* Интерактивная карта */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Переключатель маршрута */}
          <div className="flex flex-wrap justify-center items-center gap-4 px-6 pt-6">
            <button
              onClick={() => setRouteType('auto')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                routeType === 'auto'
                  ? 'bg-nature-green-600 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              На автомобиле
            </button>
            <button
              onClick={() => setRouteType('pd')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                routeType === 'pd'
                  ? 'bg-nature-green-600 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              Пешком
            </button>
            <a
              href={externalMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 rounded-lg bg-nature-gold-600 text-white text-sm font-medium hover:bg-nature-gold-700"
            >
              Открыть в Яндекс.Картах
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-nature-green-600 text-white text-sm font-medium hover:bg-nature-green-700"
            >
              Открыть в Google Maps
            </a>
          </div>

          {/* Карта */}
          <div className="h-96 mt-4">
            <iframe
              src={iframeSrc}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Информация под картой */}
          <div className="p-6 bg-white">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-nature-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🚗</span>
                </div>
                <h4 className="font-semibold text-nature-green-800 mb-2">На автомобиле</h4>
                <p className="text-nature-green-600 text-sm">Около 1.5 часов от Челябинска по трассе М5</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-nature-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🚌</span>
                </div>
                <h4 className="font-semibold text-nature-green-800 mb-2">На автобусе</h4>
                <p className="text-nature-green-600 text-sm">До Чебаркуля, затем такси 10–15 минут</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-nature-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🚂</span>
                </div>
                <h4 className="font-semibold text-nature-green-800 mb-2">На поезде</h4>
                <p className="text-nature-green-600 text-sm">Поезд до Челябинска, далее авто или такси</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
