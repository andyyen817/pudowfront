import React from 'react';
import { DollarSign, CheckCircle, XCircle, Clock, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Refund = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col font-sans bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-purple-900 text-white py-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://placehold.co/1920x600/581c87/ffffff?text=Refund+Policy"
            alt="Refund Policy Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <DollarSign className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t('refund.title')}</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">{t('refund.subtitle')}</p>
          <p className="text-sm text-purple-200 mt-4">{t('refund.last_updated')}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700">{t('refund.intro')}</p>
          </div>

          {/* Section 1: Refund Conditions */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">{t('refund.section1_title')}</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">{t('refund.section1_intro')}</p>
              <ul className="space-y-3 text-gray-700">
                <li><strong>{t('refund.condition_1_title')}:</strong> {t('refund.condition_1_desc')}</li>
                <li><strong>{t('refund.condition_2_title')}:</strong> {t('refund.condition_2_desc')}</li>
                <li><strong>{t('refund.condition_3_title')}:</strong> {t('refund.condition_3_desc')}</li>
                <li><strong>{t('refund.condition_4_title')}:</strong> {t('refund.condition_4_desc')}</li>
                <li><strong>{t('refund.condition_5_title')}:</strong> {t('refund.condition_5_desc')}</li>
              </ul>
            </div>
          </div>

          {/* Section 2: Non-Refundable Situations */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="h-8 w-8 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">{t('refund.section2_title')}</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">{t('refund.section2_intro')}</p>
              <ul className="space-y-2 text-gray-700">
                <li>{t('refund.non_refund_1')}</li>
                <li>{t('refund.non_refund_2')}</li>
                <li>{t('refund.non_refund_3')}</li>
                <li>{t('refund.non_refund_4')}</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Refund Process */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('refund.section3_title')}</h2>
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('refund.step1_title')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{t('refund.step1_1')}</li>
                  <li>{t('refund.step1_2')}</li>
                  <li>{t('refund.step1_3')}</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('refund.step2_title')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{t('refund.step2_1')}</li>
                  <li>{t('refund.step2_2')}</li>
                  <li>{t('refund.step2_3')}</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('refund.step3_title')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{t('refund.step3_1')}</li>
                  <li>{t('refund.step3_2')}</li>
                  <li>{t('refund.step3_3')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: Refund Timeline */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">{t('refund.section4_title')}</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="space-y-2 text-gray-700">
                <li><strong>{t('refund.timeline_1_title')}:</strong> {t('refund.timeline_1_desc')}</li>
                <li><strong>{t('refund.timeline_2_title')}:</strong> {t('refund.timeline_2_desc')}</li>
                <li><strong>{t('refund.timeline_3_title')}:</strong> {t('refund.timeline_3_desc')}</li>
              </ul>
            </div>
          </div>

          {/* Section 5: Partial Refunds */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('refund.section5_title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">{t('refund.section5_intro')}</p>
              <ul className="space-y-2 text-gray-700">
                <li>{t('refund.partial_1')}</li>
                <li>{t('refund.partial_2')}</li>
                <li>{t('refund.partial_3')}</li>
              </ul>
            </div>
          </div>

          {/* Section 6: Customer Service Contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">{t('refund.section6_title')}</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">{t('refund.section6_intro')}</p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>{t('footer.contact_phone')}:</strong> <a href="tel:+6285788568888" className="text-purple-600 hover:underline">+62 857 8856 8888</a></li>
                <li><strong>{t('footer.contact_email')}:</strong> <a href="mailto:contact@airkop.com" className="text-purple-600 hover:underline">contact@airkop.com</a></li>
                <li><strong>{t('refund.business_hours')}:</strong> {t('refund.hours_desc')}</li>
              </ul>
            </div>
          </div>

          {/* Section 7: Dispute Resolution */}
          <div className="bg-purple-50 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('refund.section7_title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">{t('refund.section7_intro')}</p>
              <ul className="space-y-2 text-gray-700">
                <li>{t('refund.dispute_1')}</li>
                <li>{t('refund.dispute_2')}</li>
                <li>{t('refund.dispute_3')}</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Refund;
