
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      title: 'Кафе-столовая',
      description: 'Домашняя кухня с разнообразным меню из свежих продуктов',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'от 300 ₽',
      features: ['Завтраки', 'Обеды', 'Ужины', 'Детское меню']
    },
    {
      id: 2,
      title: 'Детская игровая площадка',
      description: 'Безопасная и современная площадка для детей разных возрастов',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'бесплатно',
      features: ['Качели', 'Горки', 'Песочница', 'Безопасное покрытие']
    },
    {
      id: 3,
      title: 'Мангальные зоны',
      description: 'Более 10 мангальных зон, расположенных в отдалении друг от друга. Освещены и расположены у каждого корпуса и у берега озера',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'бесплатно',
      features: ['Мангалы', 'Решетки', 'Дрова/уголь', 'Столы и скамейки']
    },
    {
      id: 4,
      title: 'Парковка',
      description: 'Размещение личного автотранспорта на парковке рядом с корпусом',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'бесплатно',
      features: ['Охраняемая территория', 'Рядом с корпусами', 'Круглосуточный доступ', 'Видеонаблюдение']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(services.length / 3)) % Math.ceil(services.length / 3));
  };

  return (
    <section id="services" className="section-padding bg-white pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nature-green-800 mb-6">
            Услуги
          </h2>
          <div className="w-24 h-1 bg-nature-gold-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-nature-green-600 max-w-3xl mx-auto">
            Комфортные условия и разнообразные услуги для вашего отдыха
          </p>
        </div>

        {/* Слайдер услуг */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(services.length / 3) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                  {services.slice(slideIndex * 3, slideIndex * 3 + 3).map(service => (
                    <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-full">
                      {/* Изображение */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-nature-green-900/60 to-transparent"></div>
                        <div className="absolute top-4 right-4 bg-nature-gold-500 text-nature-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {service.price}
                        </div>
                      </div>

                      {/* Контент */}
                      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                        <h3 className="text-xl font-bold text-nature-green-800 mb-3">{service.title}</h3>
                        <p className="text-nature-green-600 mb-4 leading-relaxed flex-grow">{service.description}</p>
                        
                        {/* Особенности */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-nature-green-700 uppercase tracking-wider">Включено:</h4>
                          <ul className="grid grid-cols-2 gap-1 text-sm text-nature-green-600">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-nature-gold-500 rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
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
            {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
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
    </section>
  );
};

export default Services;
