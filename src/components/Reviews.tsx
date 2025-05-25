
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      rating: 5,
      date: '15 августа 2024',
      text: 'Прекрасное место для семейного отдыха! Чистое озеро, уютные номера и отличный сервис. Дети в восторге от детской площадки.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      rating: 5,
      date: '3 августа 2024',
      text: 'Отличная рыбалка и баня! Природа потрясающая, персонал вежливый. Обязательно вернемся снова.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      name: 'Елена Козлова',
      rating: 5,
      date: '20 июля 2024',
      text: 'Тихое уютное место. Номера чистые, территория ухоженная. Особенно понравились мангальные зоны у озера.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 4,
      name: 'Дмитрий Волков',
      rating: 4,
      date: '10 июля 2024',
      text: 'Хорошая база отдыха. Красивые виды, приветливый персонал. Единственный минус - далеко от города, но это же и плюс для отдыха.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 5,
      name: 'Ирина Морозова',
      rating: 5,
      date: '5 июля 2024',
      text: 'Потрясающее место! Чистый воздух, прозрачная вода в озере. Отдыхали с внуками - всем очень понравилось.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section id="reviews" className="section-padding bg-white pb-[90px]">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nature-green-800 mb-6">
            Отзывы гостей
          </h2>
          <div className="w-24 h-1 bg-nature-gold-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-nature-green-600 max-w-3xl mx-auto">
            Что говорят наши гости о проведенном времени на базе отдыха
          </p>
        </div>

        {/* Карусель отзывов */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-nature-green-50 rounded-2xl p-6 h-full hover:bg-nature-green-100 transition-colors duration-300">
                    <div className="flex items-center mb-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-nature-green-800">{review.name}</h3>
                        <p className="text-sm text-nature-green-600">{review.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {renderStars(review.rating)}
                    </div>
                    
                    <p className="text-nature-green-700 leading-relaxed italic">
                      "{review.text}"
                    </p>
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

export default Reviews;
