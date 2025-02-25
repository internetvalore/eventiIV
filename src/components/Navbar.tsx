import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToContact: true } });
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row with logo and language selector */}
        <div className="flex justify-between items-center h-16 border-b border-gray-100">
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center">
              <div className="h-12">
                <Logo />
              </div>
              <div className="ml-2 h-12 flex flex-col justify-center">
                <span className="text-xl font-bold text-gray-900 leading-tight">Internet Valore</span>
                <span className="text-sm text-gray-600 leading-tight whitespace-pre-line">l'agenzia digital per i tuoi eventi</span>
              </div>
            </div>
          </Link>
          
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Bottom row with navigation and buttons */}
        <div className="hidden md:flex justify-between items-center h-14">
          <div className="flex items-center space-x-8">
            <Link to="/services" className="text-gray-700 hover:text-blue-600">{t('nav.services')}</Link>
            <Link to="/specializations" className="text-gray-700 hover:text-blue-600">{t('nav.specializations')}</Link>
            <Link to="/flipping-catalog" className="text-gray-700 hover:text-blue-600">FlippingCatalog</Link>
            <Link to="/instant-websites" className="text-gray-700 hover:text-blue-600">Siti Istantanei</Link>
            <Link to="/automated-telephone-responders" className="text-gray-700 hover:text-blue-600">{t('nav.automatedTelephoneResponders')}</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">{t('nav.about')}</Link>
          </div>
          <div className="flex space-x-4">
            <a
              href="tel:800931785"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              {t('nav.call')}
            </a>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('nav.services')}</Link>
            <Link to="/specializations" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('nav.specializations')}</Link>
            <Link to="/flipping-catalog" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600">FlippingCatalog</Link>
            <Link to="/instant-websites" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Siti Istantanei</Link>
            <Link to="/automated-telephone-responders" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('nav.automatedTelephoneResponders')}</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('nav.about')}</Link>
            <a
              href="tel:800931785"
              className="block px-3 py-2 bg-green-600 text-white rounded-md flex items-center justify-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              {t('nav.call')}
            </a>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="block px-3 py-2 bg-blue-600 text-white rounded-md text-center"
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
