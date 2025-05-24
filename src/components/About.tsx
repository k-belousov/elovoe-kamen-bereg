
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-nature-green-50">
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
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Озеро и природа"
              className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nature-green-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Преимущества */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: '🏠',
              title: 'Проживание',
              description: 'Уютные домики с современными удобствами'
            },
            {
              icon: '🔥',
              title: 'Зона барбекю',
              description: 'Оборудованные места для приготовления пищи'
            },
            {
              icon: '🌲',
              title: 'Водоем и пляж',
              description: 'Чистое озеро с оборудованной зоной отдыха'
            },
            {
              icon: '🌸',
              title: 'Экскурсии',
              description: 'Интересные маршруты по окрестностям'
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-nature-green-800 mb-2">{item.title}</h3>
              <p className="text-nature-green-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-20 text-center bg-nature-green-600 text-white rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Место, где природа встречается с комфортом
          </h3>
          <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Выберите идеальный формат отдыха: тихий семейный уикенд, активные развлечения 
            с друзьями или романтическое путешествие на природе.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
