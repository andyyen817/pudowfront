import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langMenuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLangMenu = () => setIsLangOpen(!isLangOpen);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">AirKOP</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{t('navbar.home')}</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{t('navbar.about')}</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{t('navbar.products')}</Link>
            <Link to="/join" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{t('navbar.join')}</Link>
            
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={toggleLangMenu}
                className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none py-2 transition-colors duration-200"
              >
                <Globe className="h-5 w-5 mr-1" />
                <span className="uppercase font-medium mr-1">{i18n.language === 'en' ? 'EN' : i18n.language === 'zh' ? 'CN' : 'ID'}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu (Click based) */}
              {isLangOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-xl rounded-lg py-2 border border-gray-100 ring-1 ring-black ring-opacity-5 animate-fade-in z-50">
                  <button onClick={() => changeLanguage('en')} className={`block w-full text-left px-4 py-3 text-sm transition-colors ${i18n.language === 'en' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}>
                    🇺🇸 English
                  </button>
                  <button onClick={() => changeLanguage('zh')} className={`block w-full text-left px-4 py-3 text-sm transition-colors ${i18n.language === 'zh' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}>
                    🇨🇳 中文
                  </button>
                  <button onClick={() => changeLanguage('id')} className={`block w-full text-left px-4 py-3 text-sm transition-colors ${i18n.language === 'id' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}>
                    🇮🇩 Bahasa Indonesia
                  </button>
                </div>
              )}
            </div>

            <Link to="/login" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              <User className="h-4 w-4 mr-2" />
              {t('navbar.login')}
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>{t('navbar.home')}</Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>{t('navbar.about')}</Link>
            <Link to="/products" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>{t('navbar.products')}</Link>
            <Link to="/join" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>{t('navbar.join')}</Link>
            <Link to="/login" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>{t('navbar.login')}</Link>
            
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-5">
                <button onClick={() => changeLanguage('en')} className={`block px-3 py-2 rounded-md text-base font-medium ${i18n.language === 'en' ? 'bg-gray-100 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>EN</button>
                <button onClick={() => changeLanguage('zh')} className={`block px-3 py-2 rounded-md text-base font-medium ${i18n.language === 'zh' ? 'bg-gray-100 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>CN</button>
                <button onClick={() => changeLanguage('id')} className={`block px-3 py-2 rounded-md text-base font-medium ${i18n.language === 'id' ? 'bg-gray-100 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>ID</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

