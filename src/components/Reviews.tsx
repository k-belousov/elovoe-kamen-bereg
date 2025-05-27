
import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesInView, setSlidesInView] = useState(1);

  // Touch/swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Swipe detection
  const minSwipeDistance = 50;

  const reviews = [{
    id: 1,
    name: 'Анна Петрова',
    location: 'Москва',
    rating: 5,
    date: 'Июль 2024',
    text: 'Потрясающее место для семейного отдыха! Дети в восторге от рыбалки, а мы с мужем наслаждались тишиной и красотой природы. Домик очень уютный, все необходимое есть.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }, {
    id: 2,
    name: 'Дмитрий Козлов',
    location: 'Санкт-Петербург',
    rating: 5,
    date: 'Август 2024',
    text: 'Приехали компанией на выходные. Отличная баня, вкусное барбекю, чистое озеро. Персонал очень дружелюбный и отзывчивый. Обязательно вернемся!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }, {
    id: 3,
    name: 'Елена Сидорова',
    location: 'Тверь',
    rating: 5,
    date: 'Сентябрь 2024',
    text: 'Идеальное место для отдыха от городской суеты. Воздух кристально чистый, виды потрясающие. Особенно понравились велосипедные прогулки по окрестностям.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }, {
    id: 4,
    name: 'Максим Волков',
    location: 'Калуга',
    rating: 5,
    date: 'Октябрь 2024',
    text: 'Отмечали годовщину свадьбы. Романтическая обстановка, уютный номер, прекрасный сервис. Особенно запомнился закат над озером - просто волшебно!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }, {
    id: 5,
    name: 'Ольга Морозова',
    location: 'Смоленск',
    rating: 5,
    date: 'Ноябрь 2024',
    text: 'Были с детьми на осенних каникулах. Дети постоянно были заняты - то рыбалка, то прогулки, то игры на природе. Мы смогли наконец-то отдохнуть!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }];

  // Calculate slides in view based on screen size
  useEffect(() => {
    const updateSlidesInView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesInView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesInView(2);
      } else {
        setSlidesInView(1);
      }
    };

    updateSlidesInView();
    window.addEventListener('resize', updateSlidesInView);
    return () => window.removeEventListener('resize', updateSlidesInView);
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(reviews.length / slidesInView);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-nature-green-600' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
    <section id="reviews" className="section-padding bg-nature-green-50 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nature-green-800 mb-6">
            Отзывы
          </h2>
          <div className="w-24 h-1 bg-nature-green-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-nature-green-600 max-w-3xl mx-auto">
            Что говорят наши гости о базе отдыха "Каменный берег"
          </p>
        </div>

        {/* Слайдер отзывов с поддержкой свайпов */}
        <div className="relative overflow-hidden">
          <div 
            className="embla" 
            ref={emblaRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="embla__container flex">
              {reviews.map(review => (
                <div key={review.id} className="embla__slide flex-none w-full md:w-1/2 lg:w-1/3 px-3">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    {/* Заголовок отзыва */}
                    <div className="flex items-center space-x-4 mb-4">
                      <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-nature-green-800">{review.name}</h4>
                        <p className="text-sm text-nature-green-600">{review.location}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <p className="text-xs text-nature-green-500 mt-1">{review.date}</p>
                      </div>
                    </div>

                    {/* Текст отзыва */}
                    <p className="text-nature-green-700 leading-relaxed">{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Навигационные стрелки */}
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
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index * slidesInView)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentSlide / slidesInView) === index ? 'bg-nature-green-600' : 'bg-nature-green-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
