import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Users, Briefcase, Send, CheckCircle } from 'lucide-react';

const Application = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const applicationType = searchParams.get('type') || 'steward';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    experience: '',
    motivation: '',
    availability: ''
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
    console.log('Form submitted:', { ...formData, type: applicationType });
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        province: '',
        experience: '',
        motivation: '',
        availability: ''
      });
    }, 3000);
  };

  const isSteward = applicationType === 'steward';
  const bgColor = isSteward ? 'bg-pink-900' : 'bg-indigo-900';
  const buttonColor = isSteward ? 'bg-pink-600 hover:bg-pink-700' : 'bg-indigo-600 hover:bg-indigo-700';
  const iconBgColor = isSteward ? 'bg-pink-100' : 'bg-indigo-100';
  const iconColor = isSteward ? 'text-pink-600' : 'text-indigo-600';

  return (
    <div className="flex flex-col font-sans bg-gray-50">
      <div className={`relative ${bgColor} text-white py-20`}>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={`https://placehold.co/1920x600/${isSteward ? 'be185d' : '4f46e5'}/ffffff?text=Application+Form`}
            alt="Application Form Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex justify-center mb-4">
            {isSteward ? (
              <Users className="h-16 w-16" />
            ) : (
              <Briefcase className="h-16 w-16" />
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {t(isSteward ? 'application.steward_title' : 'application.partner_title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t(isSteward ? 'application.steward_subtitle' : 'application.partner_subtitle')}
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className={`p-4 ${iconBgColor} rounded-full`}>
                  <CheckCircle className={`h-16 w-16 ${iconColor}`} />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('application.success_title')}</h2>
              <p className="text-lg text-gray-600">{t('application.success_message')}</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('application.full_name')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder={t('application.full_name_placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('application.email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder={t('application.email_placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('application.phone')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder={t('application.phone_placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('application.address')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder={t('application.address_placeholder')}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('application.city')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder={t('application.city_placeholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('application.province')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="province"
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder={t('application.province_placeholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('application.experience')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder={t('application.experience_placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('application.motivation')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder={t('application.motivation_placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('application.availability')} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">{t('application.availability_select')}</option>
                    <option value="immediately">{t('application.availability_immediately')}</option>
                    <option value="1-2weeks">{t('application.availability_1_2weeks')}</option>
                    <option value="1month">{t('application.availability_1month')}</option>
                    <option value="flexible">{t('application.availability_flexible')}</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className={`w-full py-4 rounded-xl ${buttonColor} text-white font-bold transition shadow-lg flex items-center justify-center`}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {t('application.submit_button')}
                  </button>
                </div>

                <div className="pt-4 text-center">
                  <p className="text-sm text-gray-500">
                    {t('application.privacy_notice')}
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Application;
