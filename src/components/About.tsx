import { useLanguage } from '@/context/LanguageContext';
import { Heart, Sparkles, Users } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {t.about.title}
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
              <p>{t.about.paragraph3}</p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Passione</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-sm font-medium text-foreground">Qualità</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">Dedizione</p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 shadow-xl">
              {/* Decorative salon illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-3/4 h-3/4 text-primary/30"
                  viewBox="0 0 200 200"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Scissors icon */}
                  <path d="M100 40c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 30c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z" />
                  <path d="M100 90c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 30c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z" />
                  <path d="M45 150l45-40 10 10-45 40-10-10zM155 150l-45-40-10 10 45 40 10-10z" />
                  <circle cx="45" cy="155" r="15" />
                  <circle cx="155" cy="155" r="15" />
                </svg>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-accent/20" />
              <div className="absolute bottom-8 left-8 w-16 h-16 rounded-full bg-secondary/30" />
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">Sempre Aggiornati</p>
                <p className="text-xs text-muted-foreground">Tecniche & Tendenze</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
