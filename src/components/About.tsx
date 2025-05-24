import React from 'react';
const About = () => {
  return <section id="about" className="section-padding bg-gradient-to-b from-white to-nature-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nature-green-800 mb-6">
            О нас
          </h2>
          <div className="w-24 h-1 bg-nature-gold-500 mx-auto mb-8"></div>
        </div>

        {/* Основное описание */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-nature-green-700 leading-relaxed">
              Мы предлагаем уютный отдых в окружении природы. 
              Комфортабельные домики, живописные виды озера и свежий 
              воздух — все для вашего незабываемого отдыха.
            </p>
            <p className="text-lg text-nature-green-600 leading-relaxed">
              Наша база отдыха расположена на берегу кристально чистого озера, 
              окруженного вековыми соснами и березами. Здесь вы сможете 
              насладиться тишиной природы, активным отдыхом и качественным сервисом.
            </p>
          </div>
          
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Озеро и природа" className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-nature-green-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Преимущества */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{
          icon: '🏠',
          title: 'Проживание',
          description: 'Уютные домики с современными удобствами'
        }, {
          icon: '🔥',
          title: 'Зона барбекю',
          description: 'Оборудованные места для приготовления пищи'
        }, {
          icon: '🌲',
          title: 'Водоем и пляж',
          description: 'Чистое озеро с оборудованной зоной отдыха'
        }, {
          icon: '🌸',
          title: 'Экскурсии',
          description: 'Интересные маршруты по окрестностям'
        }].map((item, index) => {})}
        </div>

        {/* Дополнительная информация */}
        
      </div>
    </section>;
};
export default About;