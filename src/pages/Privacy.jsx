import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col font-sans bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://placehold.co/1920x600/1e3a8a/ffffff?text=Privacy+Policy"
            alt="Privacy Policy Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t('privacy.title')}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t('privacy.subtitle')}</p>
          <p className="text-sm text-blue-200 mt-4">{t('privacy.last_updated')}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section 1: Information Collection */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">{t('privacy.section1_title')}</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">{t('privacy.section1_intro')}</p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>{t('privacy.personal_info')}:</strong> {t('privacy.personal_info_desc')}</li>
                <li><strong>{t('privacy.transaction_info')}:</strong> {t('privacy.transaction_info_desc')}</li>
                <li><strong>{t('privacy.device_info')}:</strong> {t('privacy.device_info_desc')}</li>
                <li><strong>{t('privacy.usage_data')}:</strong> {t('privacy.usage_data_desc')}</li>
              </ul>
            </div>
          </div>

          {/* Section 2: Information Use */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">{t('privacy.section2_title')}</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">{t('privacy.section2_intro')}</p>
              <ul className="space-y-2 text-gray-700">
                <li>{t('privacy.use_1')}</li>
                <li>{t('privacy.use_2')}</li>
                <li>{t('privacy.use_3')}</li>
                <li>{t('privacy.use_4')}</li>
                <li>{t('privacy.use_5')}</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Information Protection */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="h-8 w-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">{t('privacy.section3_title')}</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="space-y-2 text-gray-700">
                <li>{t('privacy.protection_1')}</li>
                <li>{t('privacy.protection_2')}</li>
                <li>{t('privacy.protection_3')}</li>
                <li>{t('privacy.protection_4')}</li>
              </ul>
            </div>
          </div>

          {/* Section 4: Information Sharing */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('privacy.section4_title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">{t('privacy.section4_intro')}</p>
              <ul className="space-y-2 text-gray-700">
                <li>{t('privacy.sharing_1')}</li>
                <li>{t('privacy.sharing_2')}</li>
                <li>{t('privacy.sharing_3')}</li>
              </ul>
            </div>
          </div>

          {/* Section 5: Cookie Policy */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('privacy.section5_title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">{t('privacy.section5_intro')}</p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>{t('privacy.cookie_essential')}:</strong> {t('privacy.cookie_essential_desc')}</li>
                <li><strong>{t('privacy.cookie_analytics')}:</strong> {t('privacy.cookie_analytics_desc')}</li>
                <li><strong>{t('privacy.cookie_functional')}:</strong> {t('privacy.cookie_functional_desc')}</li>
              </ul>
              <p className="text-gray-600 mt-4">{t('privacy.cookie_manage')}</p>
            </div>
          </div>

          {/* Section 6: User Rights */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('privacy.section6_title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">{t('privacy.section6_intro')}</p>
              <ul className="space-y-2 text-gray-700">
                <li>{t('privacy.right_1')}</li>
                <li>{t('privacy.right_2')}</li>
                <li>{t('privacy.right_3')}</li>
                <li>{t('privacy.right_4')}</li>
                <li>{t('privacy.right_5')}</li>
              </ul>
              <p className="text-gray-600 mt-4">{t('privacy.contact_exercise')}: <a href="mailto:service@airkop.com" className="text-blue-600 hover:underline">service@airkop.com</a></p>
            </div>
          </div>

          {/* Section 7: Data Retention */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('privacy.section7_title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">{t('privacy.section7_intro')}</p>
              <ul className="space-y-2 text-gray-700">
                <li>{t('privacy.retention_1')}</li>
                <li>{t('privacy.retention_2')}</li>
                <li>{t('privacy.retention_3')}</li>
              </ul>
            </div>
          </div>

          {/* Section 8: Contact Us */}
          <div className="bg-blue-50 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('privacy.section8_title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">{t('privacy.section8_intro')}</p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>{t('footer.contact_email')}:</strong> <a href="mailto:service@airkop.com" className="text-blue-600 hover:underline">service@airkop.com</a></li>
                <li><strong>{t('footer.contact_phone')}:</strong> <a href="tel:+6285788568888" className="text-blue-600 hover:underline">+62 857 8856 8888</a></li>
                <li><strong>{t('footer.contact_address')}:</strong> GRHA INDUK-KUD, JL. BUNCIT RAYA NO. 20, Pejaten Barat, Pasar Minggu, Jakarta Selatan, DKI Jakarta, 12510</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Privacy;
