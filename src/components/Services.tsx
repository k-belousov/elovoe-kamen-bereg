import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Touch/swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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

  // Swipe detection
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      scrollNext();
    }
    if (isRightSwipe) {
      scrollPrev();
    }
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="services" className="section-padding bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Слайдер услуг с поддержкой свайпов */}
        <div className="relative overflow-hidden">
          <div 
            className="embla" 
            ref={emblaRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="embla__container flex">
              {services.map(service => (
                <div key={service.id} className="embla__slide flex-none w-full md:w-1/2 lg:w-1/3 px-3">
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
                </div>
              ))}
            </div>
          </div>
          
          {/* Кнопки навигации */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center text-nature-green-600 hover:text-nature-green-800 transition-colors duration-200 z-10 bg-white/80 rounded-full shadow-lg backdrop-blur-sm"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center text-nature-green-600 hover:text-nature-green-800 transition-colors duration-200 z-10 bg-white/80 rounded-full shadow-lg backdrop-blur-sm"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Индикаторы точек */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
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
