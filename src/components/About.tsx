
import React from 'react';

const About = () => {
  const features = [
    {
      id: 1,
      title: 'Кафе-столовая',
      description: 'Домашняя кухня с разнообразным меню из свежих продуктов',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Комфортное проживание',
      description: 'Уютные номера разных категорий с современными удобствами',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Отдых на природе',
      description: 'Живописные пейзажи, чистый воздух и единение с природой',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Семейный отдых',
      description: 'Безопасная территория и развлечения для всех возрастов',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="section-padding bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Изображение */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dwhb1qzhw/image/upload/e_gen_remove:prompt_manhole;multiple_true/e_gen_remove:prompt_parked%20cars;remove-shadow_true/e_gen_replace:from_parked%20cars;to_What%20if%20the%20cars%20weren't%20in%20the%20picture;preserve-geometry_true;multiple_true/e_gen_restore/q_auto/e_enhance/e_contrast:-10/e_gamma/e_brightness:-10/q_auto:best/e_gen_replace:from_sky;to_The%20natural%20sky%20is%20clear%20with%20few%20white%20clouds%20and%20no%20sun;multiple_true/f_webp/e_enhance/e_enhance/XXXL_ujedjs"
                alt="База отдыха Каменный берег"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-nature-green-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-nature-green-200 rounded-full -z-10"></div>
          </div>

          {/* Контент */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nature-green-800 mb-6">
                О базе отдыха
              </h2>
              <div className="w-24 h-1 bg-nature-green-600 mb-8"></div>
              <p className="text-lg sm:text-xl text-nature-green-600 leading-relaxed mb-6">
                Наша база отдыха расположена в живописном месте на берегу чистого озера Еловое. 
                Мы предлагаем комфортный отдых для всей семьи в окружении нетронутой природы.
              </p>
              <p className="text-lg text-nature-green-600 leading-relaxed">
                Здесь вы найдете все необходимое для незабываемого отдыха: уютные номера, 
                вкусную домашнюю кухню, развлечения на свежем воздухе и атмосферу полного единения с природой.
              </p>
            </div>

            {/* Особенности */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-nature-green-100 rounded-xl flex items-center justify-center text-nature-green-600 group-hover:bg-nature-green-600 group-hover:text-white transition-colors duration-200 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-nature-green-800 mb-2">{feature.title}</h3>
                    <p className="text-nature-green-600 text-sm leading-relaxed">{feature.description}</p>
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
