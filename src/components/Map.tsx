
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Map = () => {
  const [mapToken, setMapToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const handleTokenSubmit = () => {
    if (mapToken.trim()) {
      setShowTokenInput(false);
    }
  };

  return (
    <section className="section-padding bg-nature-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-nature-green-800 mb-6">
            Как нас найти
          </h2>
          <div className="w-24 h-1 bg-nature-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-nature-green-600 max-w-2xl mx-auto">
            База отдыха "Каменный берег" расположена в живописном месте на берегу озера
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Карта */}
          <div className="relative">
            {showTokenInput ? (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-nature-green-800 mb-4">
                  Настройка карты
                </h3>
                <p className="text-nature-green-600 mb-6">
                  Для отображения интерактивной карты введите ваш Mapbox токен. 
                  Получить токен можно на <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-nature-green-700 underline">mapbox.com</a>
                </p>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={mapToken}
                    onChange={(e) => setMapToken(e.target.value)}
                    placeholder="Введите Mapbox токен"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-nature-green-500"
                  />
                  <Button 
                    onClick={handleTokenSubmit}
                    className="w-full bg-nature-green-600 hover:bg-nature-green-700 text-white"
                  >
                    Показать карту
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-96 bg-nature-green-100 flex items-center justify-center">
                  <div className="text-center text-nature-green-600">
                    <div className="text-4xl mb-4">🗺️</div>
                    <p>Интерактивная карта</p>
                    <p className="text-sm opacity-75">Токен: {mapToken.substring(0, 20)}...</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Информация о местоположении */}
          <div className="space-y-8">
            {/* Адрес */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-nature-green-800 mb-4">
                📍 Адрес
              </h3>
              <p className="text-nature-green-700 mb-4">
                Тверская область, Осташковский район,
                <br />деревня Березовка, ул. Озерная, 15
              </p>
              <div className="space-y-2 text-sm text-nature-green-600">
                <p><strong>GPS координаты:</strong> 57.1234, 33.5678</p>
                <p><strong>Расстояние от Москвы:</strong> 350 км</p>
                <p><strong>Время в пути:</strong> 4-5 часов</p>
              </div>
            </div>

            {/* Как добраться */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-nature-green-800 mb-4">
                🚗 Как добраться
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-nature-green-700 mb-2">На автомобиле:</h4>
                  <p className="text-nature-green-600 text-sm">
                    По трассе М10 до Твери, затем по А111 до Осташкова. 
                    Далее следуйте указателям на деревню Березовка.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-nature-green-700 mb-2">На общественном транспорте:</h4>
                  <p className="text-nature-green-600 text-sm">
                    Автобус Москва-Осташков, далее такси или трансфер до базы (организуем по запросу).
                  </p>
                </div>
              </div>
            </div>

            {/* Ориентиры */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-nature-green-800 mb-4">
                🎯 Ориентиры
              </h3>
              <ul className="space-y-2 text-sm text-nature-green-600">
                <li>• Заправка "Лукойл" (2 км до базы)</li>
                <li>• Магазин "Пятерочка" в центре Березовки</li>
                <li>• Указатель "База отдыха Каменный берег"</li>
                <li>• Мост через речку Березовку</li>
              </ul>
            </div>

            {/* Парковка */}
            <div className="bg-nature-green-600 text-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                🅿️ Парковка
              </h3>
              <p className="opacity-90">
                Бесплатная охраняемая парковка для всех гостей. 
                Места для легковых автомобилей, микроавтобусов и автобусов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
