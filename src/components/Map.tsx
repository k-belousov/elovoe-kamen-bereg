'use client';

import React from 'react';

const Map = () => {
  const yandexMapUrl = 'https://yandex.ru/maps/-/CHCWrHoc';
  const googleMapsUrl = 'https://www.google.com/maps/place/Каменный+Берег/@55.0053557,60.315461,17z/data=!3m1!4b1!4m6!3m5!1s0x43c56bef9e487133:0x18901042074edcb8!8m2!3d55.0053557!4d60.3180498!16s%2Fg%2F11s7ts5j_1?entry=ttu';
  const twoGisUrl = 'https://2gis.ru/chebarkul/firm/70030076176875106';

  const iframeSrc =
    'https://yandex.ru/map-widget/v1/?ll=60.855114%2C55.041500&mode=routes&rtext=55.1644419%2C61.4368432~ymapsbm1%3A%2F%2Forg%3Foid%3D203268538693&rtt=auto&z=10.3';

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
          {/* Кнопки */}
          <div className="flex flex-wrap justify-center items-center gap-4 px-6 pt-6">
            <a
              href={yandexMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-nature-gold-600 text-white text-sm font-medium hover:bg-nature-gold-700"
            >
              Открыть в Яндекс.Картах
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-gray-600 text-white text-sm font-medium hover:bg-gray-700"
            >
              Открыть в Google Maps
            </a>
            <a
              href={twoGisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-nature-green-600 text-white text-sm font-medium hover:bg-nature-green-700"
            >
              Открыть в 2ГИС
            </a>
          </div>

          {/* Встраиваемая карта */}
          <div className="h-96 mt-4">
            <iframe
              src={iframeSrc}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              title="Карта проезда к базе отдыха Каменный берег"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
