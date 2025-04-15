import React from 'react';
import { ArrowRight, LineChart, Zap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../types';

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <LineChart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
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
              href={t.cta.contactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium flex items-center gap-2 transition-colors">
              {t.cta.contact}
              <ArrowRight className="w-5 h-5" />
              </a>
            
            {/* Services button */} 
            <a href="#services" className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full font-medium transition-colors">
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