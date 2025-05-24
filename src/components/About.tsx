
import React from 'react';

const About = () => {
  const features = [
    {
      title: 'Уютные номера',
      description: 'Комфортабельные номера с современными удобствами',
      icon: '🏠'
    },
    {
      title: 'Чистое озеро',
      description: 'Кристально чистая вода для купания и рыбалки',
      icon: '🏊‍♂️'
    },
    {
      title: 'Активный отдых',
      description: 'Множество развлечений для всей семьи',
      icon: '🚴‍♂️'
    },
    {
      title: 'Русская баня',
      description: 'Традиционная баня с вениками и купелью',
      icon: '🧖‍♂️'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Изображение - увеличенное и выровненное */}
          <div className="relative h-[700px]">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="База отдыха Каменный берег" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl filter sepia-[0.3] saturate-150 hue-rotate-[10deg]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nature-green-900/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Контент */}
          <div className="pt-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nature-green-800 mb-8">
              О базе отдыха
            </h2>
            <div className="w-24 h-1 bg-nature-gold-500 mb-8"></div>
            
            <p className="text-lg text-nature-green-600 mb-8 leading-relaxed">
              "Каменный берег" — это уютная база отдыха на живописном берегу озера, 
              где можно насладиться тишиной природы и активным отдыхом. 
              Мы предлагаем комфортабельные номера, разнообразные развлечения 
              и незабываемые впечатления для всей семьи.
            </p>

            {/* Особенности */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-nature-green-50 rounded-xl">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-nature-green-800 mb-2">{feature.title}</h3>
                    <p className="text-nature-green-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
