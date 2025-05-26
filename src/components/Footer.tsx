import React, { useState } from 'react';
import LegalModal from './LegalModal';
const Footer = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'rules' | null>(null);
  const scrollToFAQ = () => {
    const element = document.getElementById('faq');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <>
      <footer className="bg-nature-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Логотип и описание */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-end justify-center">
                  <div className="relative">
                    {/* Большая крыша */}
                    <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[12px] border-transparent border-b-nature-green-500"></div>
                    {/* Дом */}
                    <div className="w-8 h-6 bg-nature-green-600 mx-auto"></div>
                  </div>
                </div>
                <div className="text-xl font-semibold">Каменный берег</div>
              </div>
              <p className="text-nature-green-200 mb-6 leading-relaxed">Уютная база отдыха на берегу чистого озера в живописном уголке озера Еловое. Идеальное место для семейного отдыха и восстановления сил.</p>
              <div className="flex items-center space-x-2 text-nature-green-300">
                
                
              </div>
            </div>

            {/* Контакты */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-3 text-nature-green-200">
                <div>
                  <p className="text-sm text-nature-green-300">Адрес:</p>
                  <p>Челябинская область, Чебаркульский район</p>
                </div>
                <div>
                  <p className="text-sm text-nature-green-300">Телефон:</p>
                  <a href="tel:+74951234567" className="hover:text-white transition-colors">
                    +7 (495) 123-45-67
                  </a>
                </div>
                <div>
                  <p className="text-sm text-nature-green-300">Email:</p>
                  <a href="mailto:info@kamenny-bereg.ru" className="hover:text-white transition-colors">
                    info@kamenny-bereg.ru
                  </a>
                </div>
              </div>
            </div>

            {/* Информация */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-nature-green-200">
                <li>
                  <button onClick={() => setLegalModal('terms')} className="hover:text-white transition-colors text-left">
                    Договор оферты
                  </button>
                </li>
                <li>
                  <button onClick={() => setLegalModal('privacy')} className="hover:text-white transition-colors text-left">
                    Политика конфиденциальности
                  </button>
                </li>
                <li>
                  <button onClick={() => setLegalModal('rules')} className="hover:text-white transition-colors text-left">
                    Правила проживания
                  </button>
                </li>
                <li>
                  <button onClick={scrollToFAQ} className="hover:text-white transition-colors text-left">
                    Часто задаваемые вопросы
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Социальные сети */}
          <div className="border-t border-nature-green-700 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a href="#" className="text-nature-green-300 hover:text-white transition-colors transform hover:scale-110 duration-200" aria-label="VKontakte">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-.9-1.49.114v1.496c0 .4-.129.643-1.188.643-1.922 0-4.054-1.16-5.565-3.334-2.305-3.35-2.936-5.835-2.936-6.371 0-.24.097-.463.324-.463h1.744c.24 0 .33.1.423.33.972 2.652 2.608 4.966 3.28 4.966.255 0 .372-.117.372-.76v-2.914c-.07-1.186-.695-1.287-.695-1.71 0-.2.16-.4.42-.4h2.742c.203 0 .28.106.28.424v3.917c0 .204.093.285.15.285.255 0 .47-.117 1.147-.781 1.112-1.085 1.908-2.742 1.908-2.742.106-.22.27-.43.556-.43h1.744c.66 0 .8.34.66.8-.445 1.118-2.936 4.125-2.936 4.125-.18.22-.125.32 0 .525.093.14 1.017 1.003 1.5 1.608.24.304.378.604.123.804z" />
                  </svg>
                </a>
                <a href="#" className="text-nature-green-300 hover:text-white transition-colors transform hover:scale-110 duration-200" aria-label="Telegram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
                <a href="#" className="text-nature-green-300 hover:text-white transition-colors transform hover:scale-110 duration-200" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
              <div className="text-nature-green-300 text-sm">© 2025 База отдыха "Каменный берег". Все права защищены.</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Модальные окна */}
      {legalModal && <LegalModal isOpen={!!legalModal} onClose={() => setLegalModal(null)} type={legalModal} />}
    </>;
};
export default Footer;