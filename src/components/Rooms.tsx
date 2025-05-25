
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Люкс 2-местный с видом на озеро',
      price: '5000 руб/сутки',
      capacity: '2 человека',
      area: '30 м²',
      description: 'Просторный номер с панорамным видом на озеро',
      amenities: ['Двуспальная кровать', 'Кондиционер', 'Мини-холодильник', 'Телевизор', 'Wi-Fi', 'Балкон с видом на озеро'],
      image: '/lovable-uploads/cddd7bfb-1f3c-462a-a62a-026b09d9c599.png'
    },
    {
      id: 2,
      name: 'Стандарт 2-местный',
      price: '3500 руб/сутки',
      capacity: '2 человека',
      area: '25 м²',
      description: 'Уютный номер со всеми удобствами',
      amenities: ['Двуспальная кровать', 'Телевизор', 'Мини-холодильник', 'Wi-Fi', 'Душевая кабина'],
      image: '/lovable-uploads/cddd7bfb-1f3c-462a-a62a-026b09d9c599.png'
    },
    {
      id: 3,
      name: 'Семейный 4-местный',
      price: '6500 руб/сутки',
      capacity: '4 человека',
      area: '40 м²',
      description: 'Просторный номер для семейного отдыха',
      amenities: ['Двуспальная кровать', '2 односпальные кровати', 'Кондиционер', 'Телевизор', 'Холодильник', 'Wi-Fi'],
      image: '/lovable-uploads/cddd7bfb-1f3c-462a-a62a-026b09d9c599.png'
    },
    {
      id: 4,
      name: 'Эконом 2-местный',
      price: '2500 руб/сутки',
      capacity: '2 человека',
      area: '20 м²',
      description: 'Бюджетный вариант с базовыми удобствами',
      amenities: ['Двуспальная кровать', 'Телевизор', 'Wi-Fi', 'Общий санузел'],
      image: '/lovable-uploads/cddd7bfb-1f3c-462a-a62a-026b09d9c599.png'
    },
    {
      id: 5,
      name: 'Студия с кухней',
      price: '4500 руб/сутки',
      capacity: '3 человека',
      area: '35 м²',
      description: 'Номер-студия с полноценной кухней',
      amenities: ['Двуспальная кровать', 'Раскладное кресло', 'Кухня', 'Холодильник', 'Микроволновка', 'Wi-Fi'],
      image: '/lovable-uploads/cddd7bfb-1f3c-462a-a62a-026b09d9c599.png'
    }
  ];

  return (
    <section id="rooms" className="section-padding bg-nature-green-50 pb-[90px]">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nature-green-800 mb-6">
            Наши номера
          </h2>
          <div className="w-24 h-1 bg-nature-gold-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-nature-green-600 max-w-3xl mx-auto">
            Комфортабельные номера для отдыха любой компании
          </p>
        </div>

        {/* Карусель номеров */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {rooms.map((room) => (
                <CarouselItem key={room.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-nature-green-800">{room.name}</h3>
                        <span className="text-2xl font-bold text-nature-gold-600">{room.price}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-nature-green-600">
                        <span>👥 {room.capacity}</span>
                        <span>📐 {room.area}</span>
                      </div>
                      
                      <p className="text-nature-green-700 mb-4">{room.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-nature-green-800">Удобства:</h4>
                        <ul className="grid grid-cols-1 gap-1 text-sm text-nature-green-600">
                          {room.amenities.slice(0, 3).map((amenity, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-nature-gold-500 rounded-full mr-2"></div>
                              {amenity}
                            </li>
                          ))}
                          {room.amenities.length > 3 && (
                            <li className="text-nature-green-500">
                              +{room.amenities.length - 3} дополнительно
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-16 rounded-none bg-transparent border-0 text-nature-green-400 hover:text-nature-green-600 hover:bg-transparent transition-colors duration-200 shadow-lg" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-16 rounded-none bg-transparent border-0 text-nature-green-400 hover:text-nature-green-600 hover:bg-transparent transition-colors duration-200 shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
