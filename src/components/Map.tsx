'use client';

import React from 'react';

const Map = () => {
  const yandexMapUrl =
    'https://yandex.ru/maps/?ll=60.855114%2C55.041500&mode=routes&rtext=55.159902%2C61.402554~55.004665%2C60.316781&rtt=auto&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE1OTUyNxIg0KDQvtGB0YHQuNGPLCDQp9C10LvRj9Cx0LjQvdGB0LoiCg04nHVCFb2jXEI%2C~ymapsbm1%3A%2F%2Forg%3Foid%3D203268538693&z=10.3';

  const googleMapsUrl =
    'https://www.google.com/maps/dir/Челябинск,+Челябинская+область,+Россия/Каменный+Берег,+Чебаркуль,+Челябинская+обл.,+Россия,+456441/@55.0754697,60.5480156,82439m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x43c592cb104a3a8d:0xef224a2a6d1711bf!2m2!1d61.4368432!2d55.1644419!1m5!1m1!1s0x43c56bef9e487133:0x18901042074edcb8!2m2!1d60.3180498!2d55.0053557!3e0?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D';

  const iframeSrc =
    'https://yandex.ru/map-widget/v1/?ll=60.855114%2C55.041500&mode=routes&rtext=55.159902%2C61.402554~55.004665%2C60.316781&rtt=auto&z=10.3';

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
              className="px-4 py-2 rounded-lg bg-nature-green-600 text-white text-sm font-medium hover:bg-nature-green-700"
            >
              Открыть в Google Maps
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
            ></iframe>
          </div>

          {/* Подсказки под картой */}
          <div className="p-6 bg-white">
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-nature-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🚌</span>
                </div>
                <h4 className="font-semibold text-nature-green-800 mb-2">На автобусе</h4>
                <p className="text-nature-green-600 text-sm">
                  До Чебаркуля, затем такси 10–15 минут
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-nature-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🚂</span>
                </div>
                <h4 className="font-semibold text-nature-green-800 mb-2">На поезде</h4>
                <p className="text-nature-green-600 text-sm">
                  Поезд до Челябинска, далее авто или такси
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
