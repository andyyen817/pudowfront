import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, FileText, Shield, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AirKOP</h3>
            <p className="text-gray-300 text-sm mb-4">
              {t('footer.desc')}
            </p>
            <p className="text-gray-400 text-xs">
              PT INKUD AQUAVISTA SEJAHTERA
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contact_title')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <a href="tel:+6285788568888" className="hover:text-blue-400">+62 857 8856 8888</a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:contact@airkop.com" className="hover:text-blue-400 block">contact@airkop.com</a>
                  <a href="mailto:service@airkop.com" className="hover:text-blue-400 block text-gray-400">service@airkop.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  GRHA INDUK-KUD, JL. BUNCIT RAYA NO. 20<br />
                  Pejaten Barat, Pasar Minggu<br />
                  Jakarta Selatan, DKI Jakarta 12510
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.links_title')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition">{t('navbar.home')}</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">{t('navbar.about')}</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition">{t('navbar.products')}</Link></li>
              <li><Link to="/join" className="hover:text-blue-400 transition">{t('navbar.join')}</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.legal_title')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-blue-400 transition flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  {t('footer.privacy_policy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-400 transition flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  {t('footer.terms_conditions')}
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-blue-400 transition flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  {t('footer.refund_policy')}
                </Link>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-400">{t('footer.business_hours')}</p>
              <p className="text-xs text-gray-300">{t('footer.hours_desc')}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} AirKOP - PT INKUD AQUAVISTA SEJAHTERA. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


