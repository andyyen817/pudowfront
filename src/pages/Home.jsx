import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col font-sans">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white min-h-[600px] flex items-center">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/bg-blue-water.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 font-light leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="inline-flex justify-center items-center bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1">
                {t('hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/join" className="inline-flex justify-center items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition duration-300">
                {t('navbar.join')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Induk KUD Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500">
                <img
                  src="/assets/INDUK.jpg"
                  alt="INDUK KUD Partnership"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">{t('home.partner_label')}</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">{t('home.partner_title')}</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('home.partner_desc')}
              </p>
              <div className="flex items-center gap-4">
                 <img src="https://placehold.co/100x100/f1f5f9/64748b?text=Logo" alt="Induk KUD Logo" className="h-16 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Preview (Optional but good for layout) */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">{t('home.features_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{t('home.feature_1_title')}</h3>
                    <p className="text-gray-600">{t('home.feature_1_desc')}</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                     <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{t('home.feature_2_title')}</h3>
                    <p className="text-gray-600">{t('home.feature_2_desc')}</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                     <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{t('home.feature_3_title')}</h3>
                    <p className="text-gray-600">{t('home.feature_3_desc')}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

