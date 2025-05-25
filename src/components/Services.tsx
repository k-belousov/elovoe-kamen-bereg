
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Services = () => {
  const services = [
    {
      title: 'Кафе-столовая',
      description: 'Уютное кафе с домашней кухней. Завтраки, обеды и ужины из свежих местных продуктов.',
      icon: '🍽️',
      features: ['Домашняя кухня', 'Свежие продукты', 'Детское меню', 'Диетические блюда']
    },
    {
      title: 'Детская игровая площадка',
      description: 'Безопасная и современная площадка для детей всех возрастов с разнообразными аттракционами.',
      icon: '🎪',
      features: ['Безопасные аттракционы', 'Для разных возрастов', 'Песочница', 'Качели и горки']
    },
    {
      title: 'Мангальные зоны',
      description: 'Более 10 мангальных зон в отдалении друг от друга. Освещенные зоны у каждого корпуса и у берега озера.',
      icon: '🔥',
      features: ['Более 10 зон', 'Освещение', 'У корпусов и озера', 'Бесплатно для проживающих']
    },
    {
      title: 'Парковка',
      description: 'Размещение личного автотранспорта на парковке рядом с корпусом. Безопасная охраняемая территория.',
      icon: '🚗',
      features: ['Рядом с корпусом', 'Охраняемая территория', 'Бесплатная парковка', 'Видеонаблюдение']
    }
  ];

  return (
    <section id="services" className="section-padding bg-white pb-[90px]">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nature-green-800 mb-6">
            Наши услуги
          </h2>
          <div className="w-24 h-1 bg-nature-gold-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-nature-green-600 max-w-3xl mx-auto">
            Всё необходимое для комфортного отдыха в одном месте
          </p>
        </div>

        {/* Карусель услуг */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-nature-green-50 rounded-2xl p-8 h-full hover:bg-nature-green-100 transition-colors duration-300">
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-nature-green-800 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-nature-green-700 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-nature-green-600">
                          <div className="w-2 h-2 bg-nature-gold-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
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

export default Services;
