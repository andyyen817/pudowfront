import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Users, Briefcase } from 'lucide-react';
const JoinUs = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col font-sans bg-gray-50">
       {/* Hero Section */}
       <div className="relative bg-teal-900 text-white py-20">
         <div className="absolute inset-0 z-0 overflow-hidden">
             <img
               src="https://placehold.co/1920x600/134e4a/ffffff?text=Join+Our+Mission"
               alt="Join Us Hero"
               className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-900/90"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t('join.title')}</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">{t('join.subtitle')}</p>
         </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Water Steward */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl border border-gray-100 flex flex-col h-full">
              <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img
                    src="/assets/waterstewar(1).jpg"
                    alt="Water Steward"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 left-6 z-20 text-white">
                     <div className="inline-flex items-center justify-center p-2 bg-pink-600 rounded-lg mb-2 shadow-lg">
                        <Users className="h-6 w-6 text-white" />
                     </div>
                     <h3 className="text-2xl font-bold">{t('join.steward_title')}</h3>
                  </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg flex-grow">
                    {t('join.steward_desc')}
                  </p>
                  <button className="w-full py-4 rounded-xl bg-pink-600 text-white font-bold hover:bg-pink-700 transition shadow-lg hover:shadow-pink-500/30 flex items-center justify-center group-hover:translate-x-1 duration-300">
                      {t('join.steward_cta')} <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
              </div>
            </div>

            {/* Regional Partner */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl border border-gray-100 flex flex-col h-full">
              <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img
                    src="/assets/regionpartner.jpg"
                    alt="Regional Partner"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 left-6 z-20 text-white">
                     <div className="inline-flex items-center justify-center p-2 bg-indigo-600 rounded-lg mb-2 shadow-lg">
                        <Briefcase className="h-6 w-6 text-white" />
                     </div>
                     <h3 className="text-2xl font-bold">{t('join.partner_title')}</h3>
                  </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg flex-grow">
                    {t('join.partner_desc')}
                  </p>
                  <a href="https://wa.me/6285710852222" className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center group-hover:translate-x-1 duration-300">
                      {t('join.partner_cta')} <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JoinUs;

