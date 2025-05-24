
import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Рыбалка',
      description: 'Организованная рыбалка на озере с прокатом снастей',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'от 500 ₽',
      features: ['Прокат удочек', 'Наживка', 'Лодка', 'Инструктор']
    },
    {
      id: 2,
      title: 'Катание на лодках',
      description: 'Прогулки по озеру на весельных и моторных лодках',
      image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'от 800 ₽/час',
      features: ['Весельные лодки', 'Моторные лодки', 'Спасательные жилеты', 'Инструктаж']
    },
    {
      id: 3,
      title: 'Велопрокат',
      description: 'Аренда велосипедов для прогулок по окрестностям',
      image: 'https://images.unsplash.com/photo-1544191696-15850d5d6327?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'от 300 ₽/час',
      features: ['Горные велосипеды', 'Детские модели', 'Шлемы', 'Карты маршрутов']
    },
    {
      id: 4,
      title: 'Баня',
      description: 'Традиционная русская баня на берегу озера',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'от 2000 ₽/сеанс',
      features: ['Парная', 'Веники', 'Купель', 'Комната отдыха']
    },
    {
      id: 5,
      title: 'Мангальные зоны',
      description: 'Оборудованные места для барбекю и пикника',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'от 400 ₽',
      features: ['Мангалы', 'Решетки', 'Дрова/уголь', 'Столы и скамейки']
    },
    {
      id: 6,
      title: 'Экскурсии',
      description: 'Пешие и автобусные экскурсии по достопримечательностям',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'от 1200 ₽',
      features: ['Гид-экскурсовод', 'Транспорт', 'Историческая программа', 'Фотосессия']
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
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

        {/* Сетка услуг */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
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
              <div className="p-6">
                <h3 className="text-xl font-bold text-nature-green-800 mb-3">{service.title}</h3>
                <p className="text-nature-green-600 mb-4 leading-relaxed">{service.description}</p>
                
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

        {/* Дополнительная информация */}
        <div className="mt-16 bg-nature-green-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Индивидуальный подход к каждому гостю
          </h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
            Наши специалисты помогут организовать идеальный отдых с учетом ваших предпочтений. 
            Мы можем адаптировать любую услугу под ваши потребности.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <span>Консультации 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🎯</span>
              <span>Персональные программы</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🏆</span>
              <span>Опытные инструкторы</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
