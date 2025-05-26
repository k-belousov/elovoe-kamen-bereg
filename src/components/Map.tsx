
import React from 'react';

const Map = () => {
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

        {/* Карта с заглушкой */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-96 bg-gradient-to-br from-nature-green-100 to-nature-green-200 flex items-center justify-center relative">
            {/* Заглушка карты */}
            <div className="text-center">
              <div className="w-16 h-16 bg-nature-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-nature-green-800 mb-2">
                Интерактивная карта
              </h3>
              <p className="text-nature-green-600 mb-4">
                Тверская область, Осташковский район,<br />
                деревня Березовка, ул. Озерная, 15
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://yandex.ru/maps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-nature-green-600 text-white px-4 py-2 rounded-lg hover:bg-nature-green-700 transition-colors"
                >
                  Открыть в Яндекс.Картах
                </a>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-nature-gold-600 text-white px-4 py-2 rounded-lg hover:bg-nature-gold-700 transition-colors"
                >
                  Открыть в Google Maps
                </a>
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-nature-green-400 rounded-full opacity-30"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-nature-gold-400 rounded-full opacity-20"></div>
            <div className="absolute top-1/3 right-8 w-6 h-6 bg-nature-green-500 rounded-full opacity-40"></div>
          </div>
          
          {/* Информация под картой */}
          <div className="p-6 bg-white">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-nature-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🚗</span>
                </div>
                <h4 className="font-semibold text-nature-green-800 mb-2">На автомобиле</h4>
                <p className="text-nature-green-600 text-sm">2,5 часа от Москвы по Ленинградскому шоссе</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-nature-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🚌</span>
                </div>
                <h4 className="font-semibold text-nature-green-800 mb-2">На автобусе</h4>
                <p className="text-nature-green-600 text-sm">Автобус до Осташкова, далее такси 15 минут</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-nature-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🚂</span>
                </div>
                <h4 className="font-semibold text-nature-green-800 mb-2">На поезде</h4>
                <p className="text-nature-green-600 text-sm">Поезд до Твери, далее автобус или такси</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
