
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Реальные фотографии для галереи
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Озеро на рассвете',
      category: 'Природа'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Лесная тропа',
      category: 'Природа'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Интерьер номера',
      category: 'Номера'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Семейный номер',
      category: 'Номера'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Зона барбекю',
      category: 'Территория'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Пляжная зона',
      category: 'Территория'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Вечерний пейзаж',
      category: 'Природа'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Номер комфорт',
      category: 'Номера'
    }
  ];

  const categories = ['Все', 'Природа', 'Номера', 'Территория'];
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredImages = activeCategory === 'Все' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-nature-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nature-green-800 mb-6">
            Галерея
          </h2>
          <div className="w-24 h-1 bg-nature-gold-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-nature-green-600 max-w-3xl mx-auto">
            Посмотрите, как прекрасно у нас на базе отдыха
          </p>
        </div>

        {/* Фильтры категорий */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-nature-green-600 text-white shadow-lg'
                  : 'bg-white text-nature-green-600 hover:bg-nature-green-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Карусель изображений */}
        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {filteredImages.map((image, index) => (
                <CarouselItem key={image.id} className={`pl-4 ${index === Math.floor(filteredImages.length / 2) ? 'md:basis-1/2 lg:basis-2/5' : 'md:basis-1/3 lg:basis-1/5'}`}>
                  <div
                    className={`relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                      index === Math.floor(filteredImages.length / 2) ? 'h-96' : 'h-48'
                    }`}
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nature-green-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-medium">{image.alt}</p>
                        <p className="text-sm opacity-90">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 border-0 bg-transparent hover:bg-white/20 text-white" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 border-0 bg-transparent hover:bg-white/20 text-white" />
          </Carousel>
          
          {/* Индикаторы точек */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(filteredImages.length / 3) }).map((_, index) => (
              <div key={index} className="w-2 h-2 bg-nature-green-300 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Модальное окно для просмотра изображений */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Увеличенное изображение"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
