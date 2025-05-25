
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';
import RoomDetailModal from './RoomDetailModal';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const rooms = [
    {
      id: 1,
      name: 'Эконом',
      price: '1800 ₽/сутки',
      capacity: '2 человека',
      features: ['Односпальные кровати', 'Общая ванная', 'Холодильник', 'Wi-Fi'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Уютный номер эконом-класса с базовыми удобствами для комфортного проживания.'
    },
    {
      id: 2,
      name: 'Стандарт',
      price: '2500 ₽/сутки',
      capacity: '2 человека',
      features: ['Двуспальная кровать', 'Душевая кабина', 'Мини-холодильник', 'Wi-Fi'],
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Комфортабельный номер стандарт с современными удобствами.'
    },
    {
      id: 3,
      name: 'Комфорт',
      price: '3500 ₽/сутки',
      capacity: '3 человека',
      features: ['Двуспальная кровать', 'Дополнительное место', 'Полноценная ванная', 'Телевизор', 'Кондиционер'],
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Просторный номер повышенной комфортности с дополнительными удобствами.'
    },
    {
      id: 4,
      name: 'Семейный',
      price: '4500 ₽/сутки',
      capacity: '4-5 человек',
      features: ['Две спальни', 'Гостиная', 'Кухонная зона', 'Терраса', 'Барбекю'],
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Идеальный номер для семейного отдыха с отдельными зонами и террасой.'
    },
    {
      id: 5,
      name: 'Люкс',
      price: '6500 ₽/сутки',
      capacity: '2 человека',
      features: ['Панорамные окна', 'Джакузи', 'Мини-бар', 'Балкон с видом на озеро'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Роскошный номер люкс с панорамным видом на озеро и эксклюзивными удобствами.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(rooms.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(rooms.length / 3)) % Math.ceil(rooms.length / 3));
  };

  const openRoomDetails = (room: any) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleBookRoom = () => {
    setIsModalOpen(false);
    scrollToContacts();
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
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(rooms.length / 3) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                  {rooms.slice(slideIndex * 3, slideIndex * 3 + 3).map(room => (
                    <div key={room.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group h-full">
                      {/* Изображение */}
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={room.image} 
                          alt={room.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-nature-green-900/60 to-transparent"></div>
                        {/* Количество человек на картинке */}
                        <div className="absolute top-4 left-4 bg-nature-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <Users size={14} />
                          <span>{room.capacity}</span>
                        </div>
                        {/* Цена на картинке */}
                        <div className="absolute bottom-4 right-4 bg-nature-gold-500 text-nature-green-800 px-3 py-2 rounded-xl font-bold">
                          {room.price}
                        </div>
                      </div>

                      {/* Контент */}
                      <div className="p-6 flex flex-col h-[calc(100%-16rem)]">
                        <h3 className="text-2xl font-bold text-nature-green-800 mb-4">{room.name}</h3>

                        {/* Удобства */}
                        <ul className="space-y-2 mb-6 flex-grow">
                          {room.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center text-nature-green-600">
                              <div className="w-2 h-2 bg-nature-gold-500 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                          {room.features.length > 3 && (
                            <li className="text-nature-green-500 text-sm">
                              и еще {room.features.length - 3} удобств...
                            </li>
                          )}
                        </ul>

                        {/* Кнопка подробнее */}
                        <Button 
                          onClick={() => openRoomDetails(room)}
                          className="w-full bg-nature-green-600 hover:bg-nature-green-700 text-white font-medium py-3 rounded-xl transition-colors duration-200"
                        >
                          Подробнее
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Кнопки навигации */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-16 bg-transparent hover:bg-white/10 transition-colors duration-200 text-nature-green-600 hover:text-nature-green-700 flex items-center justify-center"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-16 bg-transparent hover:bg-white/10 transition-colors duration-200 text-nature-green-600 hover:text-nature-green-700 flex items-center justify-center"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          >
            <ChevronRight size={32} />
          </button>
          
          {/* Индикаторы точек */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(rooms.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-nature-green-600' : 'bg-nature-green-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Модальное окно с подробностями номера */}
      {selectedRoom && (
        <RoomDetailModal
          room={selectedRoom}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onBook={handleBookRoom}
        />
      )}
    </section>
  );
};

export default Rooms;
