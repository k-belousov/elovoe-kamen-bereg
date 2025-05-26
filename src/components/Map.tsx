'use client';

import React, { useState } from 'react';

const Map = () => {
  const [activeMap, setActiveMap] = useState('twoGis');
  
  const mapSources = {
    twoGis: 'https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A60.316781%2C55.004665%2C10.3%7D',
    yandex: 'https://yandex.ru/map-widget/v1/?ll=60.855114%2C55.041500&mode=routes&rtext=55.159902%2C61.402554~55.004665%2C60.316781&rtt=auto&z=10.3',
    google: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d177327.27249835012!2d60.54801562272488!3d55.0754697033314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x43c592cb104a3a8d%3A0xef224a2a6d1711bf!2z0KfQtdC70Y_QsdC40L3RgdC6LCDQp9C10LvRj9Cx0LjQvdGB0YzQutCwINC-0LHQu9Cw0YHRgtGM!3m2!1d55.1644419!2d61.4368432!4m5!1s0x43c56bef9e487133%3A0x18901042074edcb8!2z0JrQsNC80LXQvdGB0LrQvtC5INCx0LXRgNC-0LQsINCh0LXRgNCy0ZbQutGB0YPQs9C40Y8!3m2!1d55.0053557!2d60.3180498!5e0!3m2!1sru!2sru!4v1718289348029!5m2!1sru!2sru'
  };

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

        {/* Карта */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Встраиваемая карта */}
          <div className="h-96">
            <iframe
              key={activeMap}
              src={mapSources[activeMap]}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Переключатель карт */}
          <div className="flex justify-center p-4 space-x-2 bg-gray-50 border-t">
            <button
              onClick={() => setActiveMap('twoGis')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeMap === 'twoGis' 
                  ? 'bg-nature-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              2ГИС
            </button>
            <button
              onClick={() => setActiveMap('yandex')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeMap === 'yandex' 
                  ? 'bg-nature-gold-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Яндекс
            </button>
            <button
              onClick={() => setActiveMap('google')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeMap === 'google' 
                  ? 'bg-gray-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Google Maps
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
