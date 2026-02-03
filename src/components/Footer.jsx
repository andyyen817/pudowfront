import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AirKOP</h3>
            <p className="text-gray-300">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contact_title')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+62 857 1085 2222</span>
              </li>
              {/* Add more contact info if available */}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.links_title')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">{t('navbar.home')}</Link></li>
              <li><Link to="/products" className="hover:text-blue-400">{t('navbar.products')}</Link></li>
              <li><Link to="/join" className="hover:text-blue-400">{t('navbar.join')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} AirKOP. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

