
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Services = () => {
  const services = [{
    id: 1,
    title: 'Рыбалка',
    description: 'Организованная рыбалка на озере с прокатом снастей',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'от 500 ₽',
    features: ['Прокат удочек', 'Наживка', 'Лодка', 'Инструктор']
  }, {
    id: 2,
    title: 'Катание на лодках',
    description: 'Прогулки по озеру на весельных и моторных лодках',
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'от 800 ₽/час',
    features: ['Весельные лодки', 'Моторные лодки', 'Спасательные жилеты', 'Инструктаж']
  }, {
    id: 3,
    title: 'Велопрокат',
    description: 'Аренда велосипедов для прогулок по окрестностям',
    image: 'https://images.unsplash.com/photo-1544191696-15850d5d6327?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'от 300 ₽/час',
    features: ['Горные велосипеды', 'Детские модели', 'Шлемы', 'Карты маршрутов']
  }, {
    id: 4,
    title: 'Баня',
    description: 'Традиционная русская баня на берегу озера',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'от 2000 ₽/сеанс',
    features: ['Парная', 'Веники', 'Купель', 'Комната отдыха']
  }, {
    id: 5,
    title: 'Мангальные зоны',
    description: 'Оборудованные места для барбекю и пикника',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'от 400 ₽',
    features: ['Мангалы', 'Решетки', 'Дрова/уголь', 'Столы и скамейки']
  }, {
    id: 6,
    title: 'Экскурсии',
    description: 'Пешие и автобусные экскурсии по достопримечательностям',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'от 1200 ₽',
    features: ['Гид-экскурсовод', 'Транспорт', 'Историческая программа', 'Фотосессия']
  }, {
    id: 7,
    title: 'СПА-процедуры',
    description: 'Расслабляющие процедуры на природе',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'от 1500 ₽',
    features: ['Массаж', 'Маски', 'Ароматерапия', 'Релаксация']
  }, {
    id: 8,
    title: 'Конные прогулки',
    description: 'Верховая езда по живописным тропам',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'от 1000 ₽/час',
    features: ['Инструктор', 'Экипировка', 'Фотосессия', 'Маршрут']
  }];

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
            Разнообразные развлечения и услуги для активного и спокойного отдыха
          </p>
        </div>

        {/* Слайдер услуг */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map(service => (
                <CarouselItem key={service.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-full">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-16 bg-transparent border-0 text-white/50 hover:text-nature-green-600 hover:bg-transparent rounded-none" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-16 bg-transparent border-0 text-white/50 hover:text-nature-green-600 hover:bg-transparent rounded-none" />
          </Carousel>
          
          {/* Индикаторы точек */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
              <div key={index} className="w-2 h-2 bg-nature-green-300 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
