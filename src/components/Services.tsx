import { useLanguage } from '@/context/LanguageContext';
import { Palette, Sparkles, Scissors, Heart, ShoppingBag, TrendingUp } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3
        className="text-xl font-semibold text-foreground mb-2"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Palette className="w-7 h-7 text-primary" />,
      title: t.services.coloring.title,
      description: t.services.coloring.description,
    },
    {
      icon: <Sparkles className="w-7 h-7 text-secondary" />,
      title: t.services.volumizing.title,
      description: t.services.volumizing.description,
    },
    {
      icon: <Scissors className="w-7 h-7 text-primary" />,
      title: t.services.cuts.title,
      description: t.services.cuts.description,
    },
    {
      icon: <Heart className="w-7 h-7 text-accent" />,
      title: t.services.care.title,
      description: t.services.care.description,
    },
    {
      icon: <ShoppingBag className="w-7 h-7 text-secondary" />,
      title: t.services.products.title,
      description: t.services.products.description,
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-primary" />,
      title: t.services.trends.title,
      description: t.services.trends.description,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
