
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Новые номера с видом на озеро',
      date: '15 мая 2024',
      excerpt: 'Открыли новые улучшенные номера с панорамным видом на озеро. Современный дизайн и максимальный комфорт для наших гостей.',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Летняя программа развлечений',
      date: '1 июня 2024',
      excerpt: 'Стартовала насыщенная летняя программа: мастер-классы, спортивные турниры, детская анимация и вечерние костры у озера.',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Обновление детской площадки',
      date: '20 мая 2024',
      excerpt: 'Полностью обновили детскую игровую площадку. Новые безопасные аттракционы и игровые зоны для детей всех возрастов.',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Эко-инициативы базы отдыха',
      date: '10 мая 2024',
      excerpt: 'Запустили программу по сохранению экологии озера. Установили станции раздельного сбора мусора и солнечные панели.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="news" className="section-padding bg-nature-green-50 pb-[90px]">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nature-green-800 mb-6">
            Новости
          </h2>
          <div className="w-24 h-1 bg-nature-gold-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-nature-green-600 max-w-3xl mx-auto">
            Будьте в курсе последних событий и обновлений на нашей базе отдыха
          </p>
        </div>

        {/* Карусель новостей */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {newsItems.map((news) => (
                <CarouselItem key={news.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-nature-green-600 mb-2">{news.date}</div>
                      <h3 className="text-xl font-bold text-nature-green-800 mb-3">{news.title}</h3>
                      <p className="text-nature-green-700 leading-relaxed">{news.excerpt}</p>
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

export default News;
