import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { languageNames, type Language } from '@/locales';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#hours', label: t.nav.hours },
    { href: '#contact', label: t.nav.contact },
  ];

  const languages: Language[] = ['it', 'de', 'fr', 'en'];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-primary font-bold text-xl md:text-2xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
              B
            </div>
            <span className={isScrolled ? 'text-primary' : 'text-white md:text-primary'}>
              Bluemarine
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-foreground'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium"
              >
                {language.toUpperCase()}
                <ChevronDown className="w-4 h-4" />
              </Button>
              {isLangDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-border py-2 min-w-[140px] animate-slide-down">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                        language === lang ? 'text-primary font-medium' : 'text-foreground'
                      }`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border animate-slide-down">
            <nav className="py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">Language</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <Button
                      key={lang}
                      variant={language === lang ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => {
                        setLanguage(lang);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {lang.toUpperCase()}
                    </Button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
