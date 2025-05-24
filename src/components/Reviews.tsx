
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Reviews = () => {
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
  }, {
    id: 6,
    name: 'Игорь Белов',
    location: 'Брянск',
    rating: 5,
    date: 'Декабрь 2024',
    text: 'Зимний отдых тоже прекрасен! Баня после прогулок по заснеженному лесу - это что-то невероятное. Очень уютная атмосфера, чувствуешь себя как дома.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-nature-gold-500' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="reviews" className="section-padding bg-nature-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nature-green-800 mb-6">
            Отзывы
          </h2>
          <div className="w-24 h-1 bg-nature-gold-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-nature-green-600 max-w-3xl mx-auto">
            Что говорят наши гости о базе отдыха "Каменный берег"
          </p>
        </div>

        {/* Слайдер отзывов */}
        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map(review => (
                <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
