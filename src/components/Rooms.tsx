
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  }, {
    id: 4,
    name: 'Люкс',
    price: '6500 ₽/сутки',
    capacity: '2 человека',
    features: ['Панорамные окна', 'Джакузи', 'Мини-бар', 'Балкон с видом на озеро'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 5,
    name: 'Эконом',
    price: '1800 ₽/сутки',
    capacity: '2 человека',
    features: ['Односпальные кровати', 'Общая ванная', 'Холодильник', 'Wi-Fi'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }];

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="rooms" className="section-padding bg-white pb-24">
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

        {/* Слайдер номеров */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {rooms.map(room => (
                <CarouselItem key={room.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group h-full">
                    {/* Изображение */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={room.image} 
                        alt={room.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-nature-green-900/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-sm opacity-90">{room.capacity}</div>
                      </div>
                    </div>

                    {/* Контент */}
                    <div className="p-6 flex flex-col h-[calc(100%-16rem)]">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-nature-green-800">{room.name}</h3>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-nature-gold-600">{room.price}</div>
                        </div>
                      </div>

                      {/* Удобства */}
                      <ul className="space-y-2 mb-6 flex-grow">
                        {room.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-nature-green-600">
                            <div className="w-2 h-2 bg-nature-gold-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Кнопка бронирования */}
                      <Button 
                        onClick={scrollToContacts} 
                        className="w-full bg-nature-green-600 hover:bg-nature-green-700 text-white font-medium py-3 rounded-xl transition-colors duration-200"
                      >
                        Забронировать
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-16 bg-transparent border-0 text-white/50 hover:text-nature-green-600 hover:bg-transparent rounded-none" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-16 bg-transparent border-0 text-white/50 hover:text-nature-green-600 hover:bg-transparent rounded-none" />
          </Carousel>
          
          {/* Индикаторы точек */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(rooms.length / 3) }).map((_, index) => (
              <div key={index} className="w-2 h-2 bg-nature-green-300 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
