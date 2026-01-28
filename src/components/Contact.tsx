import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Car, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t.contact.address}</h3>
                  <p className="text-muted-foreground">
                    Viale Alessandro Volta 2A<br />
                    6830 Chiasso<br />
                    Svizzera
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t.contact.phone}</h3>
                  <a
                    href="tel:+41916822882"
                    className="text-xl font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    +41 91 682 28 82
                  </a>
                </div>
              </div>
            </div>

            {/* Parking Info */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-muted-foreground">{t.contact.parking}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">{t.contact.followUs}</p>
              <Button
                asChild
                variant="outline"
                className="gap-2"
              >
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-border/50 h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2774.1234567890123!2d9.0234567890123!3d45.8234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47842d8e1234567%3A0x1234567890abcdef!2sViale%20Alessandro%20Volta%202A%2C%206830%20Chiasso%2C%20Svizzera!5e0!3m2!1sit!2sch!4v1234567890123!5m2!1sit!2sch"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bluemarine Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
