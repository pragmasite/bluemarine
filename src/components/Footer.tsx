import { useLanguage } from '@/context/LanguageContext';
import { Facebook, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  B
                </span>
              </div>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Bluemarine
              </span>
            </div>
            <p className="text-white/70 text-sm">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Link</h4>
            <nav className="space-y-2">
              <a
                href="#about"
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                {t.nav.about}
              </a>
              <a
                href="#services"
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                {t.nav.services}
              </a>
              <a
                href="#hours"
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                {t.nav.hours}
              </a>
              <a
                href="#contact"
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                {t.nav.contact}
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t.nav.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-white/70" />
                <a
                  href="tel:+41916822882"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  +41 91 682 28 82
                </a>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>
            &copy; {currentYear} Bluemarine. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
}
