
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const MapPlaceholder = () => {
  return (
    <section id="map" className="section-padding bg-nature-green-50 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nature-green-800 mb-6">
            Как нас найти
          </h2>
          <div className="w-24 h-1 bg-nature-gold-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-nature-green-600 max-w-3xl mx-auto">
            Мы находимся в живописном месте Тверской области
          </p>
        </div>

        {/* Заглушка карты */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-nature-green-100 to-nature-green-200 rounded-xl h-96 flex items-center justify-center mb-6">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-nature-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-nature-green-800 mb-2">Интерактивная карта</h3>
              <p className="text-nature-green-600">Карта будет добавлена в ближайшее время</p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-nature-green-800 mb-4">Наш адрес</h3>
            <p className="text-nature-green-700 mb-4">
              Тверская область, Осташковский район,<br />
              деревня Березовка, ул. Озерная, 15
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+74951234567" 
                className="inline-flex items-center space-x-2 bg-nature-green-600 text-white px-6 py-3 rounded-xl hover:bg-nature-green-700 transition-colors duration-200"
              >
                <Phone size={18} />
                <span>Позвонить</span>
              </a>
              <a 
                href="mailto:info@kamenny-bereg.ru" 
                className="inline-flex items-center space-x-2 bg-nature-gold-500 text-nature-green-800 px-6 py-3 rounded-xl hover:bg-nature-gold-600 transition-colors duration-200"
              >
                <Mail size={18} />
                <span>Написать</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapPlaceholder;
