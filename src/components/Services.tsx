import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../types';
import { LineChart, Brain, Cloud, Zap } from 'lucide-react';

export function Services() {
  const { language } = useLanguage();
  const t = translations[language].services;

  const categories = [
    {
      key: 'dataAnalytics',
      icon: LineChart,
      iconClass: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      dotClass: 'bg-blue-500'
    },
    {
      key: 'dataScience',
      icon: Brain,
      iconClass: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      dotClass: 'bg-purple-500'
    },
    {
      key: 'cloudEngineering',
      icon: Cloud,
      iconClass: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
      dotClass: 'bg-indigo-500'
    },
    {
      key: 'automation',
      icon: Zap,
      iconClass: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
      dotClass: 'bg-rose-500'
    }
  ] as const;

  return (
    <section id="services" className="py-24 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map(({ key, icon: Icon, iconClass, dotClass }) => (
            <div
              key={key}
              className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className={`inline-block p-3 rounded-xl ${iconClass} mb-6`}>
                <Icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t.categories[key].title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.categories[key].description}
              </p>
              
              <ul className="space-y-3">
                {t.categories[key].features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-200"
                  >
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${dotClass}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}