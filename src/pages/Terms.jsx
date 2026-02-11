import React from 'react';
import { FileText, Users, AlertCircle, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col font-sans bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-green-900 text-white py-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://placehold.co/1920x600/166534/ffffff?text=Terms+and+Conditions"
            alt="Terms Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <FileText className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t('terms.title')}</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">{t('terms.subtitle')}</p>
          <p className="text-sm text-green-200 mt-4">{t('terms.last_updated')}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700">{t('terms.intro')}</p>
          </div>

          {/* Section 1: Service Description */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">{t('terms.section1_title')}</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">{t('terms.section1_intro')}</p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>SmartWater Station:</strong> {t('terms.service_1')}</li>
                <li><strong>ATMWater Refill Station:</strong> {t('terms.service_2')}</li>
              </ul>
            </div>
          </div>

          {/* Section 2: User Rights and Obligations */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">{t('terms.section2_title')}</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="space-y-2 text-gray-700">
                <li>{t('terms.obligation_1')}</li>
                <li>{t('terms.obligation_2')}</li>
                <li>{t('terms.obligation_3')}</li>
                <li>{t('terms.obligation_4')}</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Service Scope */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('terms.section3_title')}</h2>
            <div className="prose prose-lg max-w-none">
              <ul className="space-y-2 text-gray-700">
                <li>{t('terms.scope_1')}</li>
                <li>{t('terms.scope_2')}</li>
                <li>{t('terms.scope_3')}</li>
              </ul>
            </div>
          </div>

          {/* Section 4: Limitation of Liability */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="h-8 w-8 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">{t('terms.section4_title')}</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="space-y-2 text-gray-700">
                <li>{t('terms.liability_1')}</li>
                <li>{t('terms.liability_2')}</li>
                <li>{t('terms.liability_3')}</li>
              </ul>
            </div>
          </div>

          {/* Section 5: Terms Modification */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <RefreshCw className="h-8 w-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">{t('terms.section5_title')}</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700">{t('terms.modification_desc')}</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-green-50 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('terms.contact_title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">{t('terms.contact_intro')}</p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>{t('footer.contact_email')}:</strong> <a href="mailto:service@airkop.com" className="text-green-600 hover:underline">service@airkop.com</a></li>
                <li><strong>{t('footer.contact_phone')}:</strong> <a href="tel:+6285788568888" className="text-green-600 hover:underline">+62 857 8856 8888</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;
