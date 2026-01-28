import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path
                  d="M0 50 Q25 30 50 50 T100 50"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
                <path
                  d="M0 70 Q25 50 50 70 T100 70"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        </div>
        {/* Light overlay at bottom for fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Logo icon */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <span
              className="text-5xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              B
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t.hero.title}
          </h1>

          <p
            className="text-xl sm:text-2xl text-white/90 mb-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t.hero.subtitle}
          </p>

          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {t.hero.tagline}
          </p>

          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <a href="#contact">{t.hero.cta}</a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
