import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { AlertTriangle, X } from 'lucide-react';

const STORAGE_KEY = 'bluemarine-disclaimer-dismissed';

export function DisclaimerModal() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const isDismissed = localStorage.getItem(STORAGE_KEY);
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-fade-in">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 text-accent" />
        </div>

        {/* Content */}
        <h2
          className="text-2xl font-bold text-center text-foreground mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t.disclaimer.title}
        </h2>

        <p className="text-center text-muted-foreground mb-6 leading-relaxed">
          {t.disclaimer.text}
        </p>

        {/* Action */}
        <Button
          onClick={handleDismiss}
          className="w-full"
          size="lg"
        >
          {t.disclaimer.button}
        </Button>
      </div>
    </div>
  );
}
