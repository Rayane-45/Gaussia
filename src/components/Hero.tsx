
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../types';

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

    const smoothScrollTo = (targetId: string, duration = 1200) => {
        const target = document.getElementById(targetId);
        if (!target) return;

        const startY = window.scrollY;
        const endY = target.getBoundingClientRect().top + startY;
        const distance = endY - startY;
        let startTime: number | null = null;

        const easeInOutQuad = (t: number) =>
            t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const time = timestamp - startTime;
            const progress = Math.min(time / duration, 1);
            const ease = easeInOutQuad(progress);

            window.scrollTo(0, startY + distance * ease);

            if (time < duration) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };


    return (
    <div className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-8">
              <img
                  src="logoG.png"
                  alt="Analytics Icon"
                  className="w-24 h-24 object-contain"
              />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t.title}
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12">
            {t.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Contact button */}
              <a
                  onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo('contact', 1000); // durée 1200ms = plus lent que le scroll natif
                  }}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium flex items-center gap-2 transition-colors cursor-pointer"
              >
                  {t.cta.contact}
                  <ArrowRight className="w-5 h-5" />
              </a>


              {/* Services button */}
              <a
                  onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo('services', 1200); // durée 1200ms
                  }}
                  className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full font-medium transition-colors cursor-pointer"
              >
                  {t.cta.services}
              </a>


              <button className="px-8 py-4 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium transition-colors">
              {t.cta.project}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}