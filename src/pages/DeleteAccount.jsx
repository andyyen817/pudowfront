import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserX, Send, CheckCircle, AlertTriangle } from 'lucide-react';

const DeleteAccount = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    phone: '',
    reason: '',
    confirmed: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Account deletion request:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        phone: '',
        reason: '',
        confirmed: false
      });
    }, 3000);
  };

  return (
    <div className="flex flex-col font-sans bg-gray-50">
      <div className="relative bg-red-900 text-white py-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://placehold.co/1920x600/991b1b/ffffff?text=Delete+Account"
            alt="Delete Account Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <UserX className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {t('deleteAccount.title')}
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            {t('deleteAccount.subtitle')}
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-green-100 rounded-full">
                  <CheckCircle className="h-16 w-16 text-green-600" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('deleteAccount.success_title')}</h2>
              <p className="text-lg text-gray-600">{t('deleteAccount.success_message')}</p>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('deleteAccount.intro_title')}</h2>
                <p className="text-gray-600 mb-6">{t('deleteAccount.intro_desc')}</p>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-900 mb-3">{t('deleteAccount.warning_title')}</h3>
                      <ul className="space-y-2 text-sm text-red-800">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{t('deleteAccount.warning_1')}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{t('deleteAccount.warning_2')}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{t('deleteAccount.warning_3')}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{t('deleteAccount.warning_4')}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{t('deleteAccount.warning_5')}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('deleteAccount.form_title')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('deleteAccount.phone_label')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder={t('deleteAccount.phone_placeholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('deleteAccount.reason_label')}
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder={t('deleteAccount.reason_placeholder')}
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="confirmed"
                      name="confirmed"
                      checked={formData.confirmed}
                      onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })}
                      required
                      className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label htmlFor="confirmed" className="ml-3 text-sm text-gray-700">
                      {t('deleteAccount.confirmation_label')} <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition shadow-lg flex items-center justify-center"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {t('deleteAccount.submit_button')}
                    </button>
                  </div>
                </form>
              </div>

              <div className="bg-blue-50 rounded-2xl shadow-lg p-8 mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('deleteAccount.contact_title')}</h3>
                <p className="text-gray-600 mb-4">{t('deleteAccount.contact_desc')}</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>{t('footer.contact_phone')}:</strong> +62 857 8856 8888</p>
                  <p><strong>{t('footer.contact_email')}:</strong> contact@airkop.com</p>
                  <p><strong>{t('deleteAccount.business_hours')}:</strong> {t('deleteAccount.hours_desc')}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
