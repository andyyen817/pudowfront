import React from 'react';
import { Droplets, ShoppingBag, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col font-sans bg-gray-50">
       {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-20">
         <div className="absolute inset-0 z-0 overflow-hidden">
             <img
               src="https://placehold.co/1920x600/1e3a8a/ffffff?text=Our+Products"
               alt="Products Hero"
               className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/90"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t('products.title')}</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t('products.subtitle')}</p>
         </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* SmartWater Station */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl mb-20 border border-gray-100">
             <div className="flex flex-col lg:flex-row">
                 <div className="lg:w-1/2 relative min-h-[400px]">
                    <img
                      src="/assets/smartwater.jpg"
                      alt="SmartWater Station"
                      className="w-full h-full object-cover absolute inset-0"
                    />
                     <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                        <div className="flex items-center gap-2 text-blue-700 font-bold">
                            <Droplets className="h-5 w-5" />
                            <span>Flagship Product</span>
                        </div>
                     </div>
                 </div>
                 <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t('products.smart_station_title')}</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {t('products.smart_station_desc')}
                    </p>

                    <div className="mb-8">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{t('products.certified_excellence')}</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {['ISO9001', 'SNI', 'BPOM', 'Halal'].map((cert) => (
                                <div key={cert} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                                    <span className="font-semibold text-gray-700">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="self-start px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30">
                        {t('products.join_us')}
                    </button>
                 </div>
             </div>
          </div>

          {/* ATMWater Refill Station */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
             <div className="flex flex-col lg:flex-row-reverse">
                 <div className="lg:w-1/2 relative min-h-[400px]">
                    <img
                      src="/assets/atmstation.jpg"
                      alt="ATM Water Refill"
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                        <div className="flex items-center gap-2 text-green-700 font-bold">
                            <ShoppingBag className="h-5 w-5" />
                            <span>Community Choice</span>
                        </div>
                     </div>
                 </div>
                 <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t('products.atm_station_title')}</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {t('products.atm_station_desc')}
                    </p>

                    <button className="self-start px-8 py-3 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition shadow-lg hover:shadow-green-500/30">
                        {t('products.join_us')}
                    </button>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;

