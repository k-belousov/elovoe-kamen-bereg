import React from 'react';
import { Button } from '@/components/ui/button';
const Rooms = () => {
  const rooms = [{
    id: 1,
    name: 'Стандарт',
    price: '2500 ₽/сутки',
    capacity: '2 человека',
    features: ['Двуспальная кровать', 'Душевая кабина', 'Мини-холодильник', 'Wi-Fi'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 2,
    name: 'Комфорт',
    price: '3500 ₽/сутки',
    capacity: '3 человека',
    features: ['Двуспальная кровать', 'Дополнительное место', 'Полноценная ванная', 'Телевизор', 'Кондиционер'],
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 3,
    name: 'Семейный',
    price: '4500 ₽/сутки',
    capacity: '4-5 человек',
    features: ['Две спальни', 'Гостиная', 'Кухонная зона', 'Терраса', 'Барбекю'],
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }];
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="rooms" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nature-green-800 mb-6">
            Номера
          </h2>
          <div className="w-24 h-1 bg-nature-gold-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-nature-green-600 max-w-3xl mx-auto">
            Выберите подходящий номер для комфортного проживания на природе
          </p>
        </div>

        {/* Карточки номеров */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {rooms.map(room => <div key={room.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
              {/* Изображение */}
              <div className="relative h-64 overflow-hidden">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-green-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm opacity-90">{room.capacity}</div>
                </div>
              </div>

              {/* Контент */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-nature-green-800">{room.name}</h3>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-nature-gold-600">{room.price}</div>
                  </div>
                </div>

                {/* Удобства */}
                <ul className="space-y-2 mb-6">
                  {room.features.map((feature, index) => <li key={index} className="flex items-center text-nature-green-600">
                      <div className="w-2 h-2 bg-nature-gold-500 rounded-full mr-3"></div>
                      {feature}
                    </li>)}
                </ul>

                {/* Кнопка бронирования */}
                <Button onClick={scrollToContacts} className="w-full bg-nature-green-600 hover:bg-nature-green-700 text-white font-medium py-3 rounded-xl transition-colors duration-200">
                  Забронировать
                </Button>
              </div>
            </div>)}
        </div>

        {/* Дополнительная информация */}
        
      </div>
    </section>;
};
export default Rooms;