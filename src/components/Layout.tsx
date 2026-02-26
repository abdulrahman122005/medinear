import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export default function Layout() {
  const { t, language, setLanguage, dir } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.features, href: '/#features' },
    { name: t.nav.howItWorks, href: '/#how-it-works' },
    { name: t.nav.forPharmacies, href: '/for-pharmacies' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-emerald-600">
            <Logo className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tight">MediNear</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              <Globe className="h-4 w-4" />
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
            <Link
              to="/for-pharmacies"
              className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors"
            >
              {t.hero.registerPharmacy}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-200 bg-white"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-slate-600 hover:text-emerald-600"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px bg-slate-200 my-2" />
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-base font-medium text-slate-600 hover:text-emerald-600"
                >
                  <Globe className="h-5 w-5" />
                  {language === 'ar' ? 'English' : 'العربية'}
                </button>
                <Link
                  to="/for-pharmacies"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-emerald-600 text-white px-4 py-3 rounded-xl text-center font-medium hover:bg-emerald-700 transition-colors mt-2"
                >
                  {t.hero.registerPharmacy}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-emerald-500 mb-4">
              <Logo className="h-8 w-8" />
              <span className="text-2xl font-bold tracking-tight text-white">MediNear</span>
            </Link>
            <p className="text-slate-400 max-w-sm">
              {t.hero.subheadline}
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.links}</h3>
            <ul className="space-y-2">
              <li><a href="/#features" className="hover:text-emerald-400 transition-colors">{t.nav.features}</a></li>
              <li><a href="/#how-it-works" className="hover:text-emerald-400 transition-colors">{t.nav.howItWorks}</a></li>
              <li><Link to="/for-pharmacies" className="hover:text-emerald-400 transition-colors">{t.nav.forPharmacies}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.legal.privacy}</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">{t.legal.privacy}</Link></li>
              <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">{t.legal.terms}</Link></li>
              <li><Link to="/data-protection" className="hover:text-emerald-400 transition-colors">{t.legal.dataProtection}</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} MediNear. {t.footer.rights}.</p>
        </div>
      </footer>
    </div>
  );
}
