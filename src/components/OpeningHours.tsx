import { useLanguage } from '@/context/LanguageContext';
import { Clock } from 'lucide-react';

interface DaySchedule {
  day: string;
  hours: string;
  isClosed: boolean;
}

export function OpeningHours() {
  const { t } = useLanguage();

  const schedule: DaySchedule[] = [
    { day: t.hours.monday, hours: t.hours.closed, isClosed: true },
    { day: t.hours.tuesday, hours: '08:30 - 18:00', isClosed: false },
    { day: t.hours.wednesday, hours: '08:30 - 18:00', isClosed: false },
    { day: t.hours.thursday, hours: '08:30 - 18:00', isClosed: false },
    { day: t.hours.friday, hours: '08:30 - 18:00', isClosed: false },
    { day: t.hours.saturday, hours: '08:00 - 16:00', isClosed: false },
    { day: t.hours.sunday, hours: t.hours.closed, isClosed: true },
  ];

  // Get current day (0 = Sunday, 1 = Monday, etc.)
  const today = new Date().getDay();
  // Map to our schedule array (0 = Monday in our array)
  const todayIndex = today === 0 ? 6 : today - 1;

  return (
    <section id="hours" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {t.hours.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Schedule Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border/50">
            {schedule.map((item, index) => (
              <div
                key={item.day}
                className={`flex items-center justify-between px-6 py-4 ${
                  index !== schedule.length - 1 ? 'border-b border-border/50' : ''
                } ${
                  index === todayIndex
                    ? 'bg-primary/5 border-l-4 border-l-primary'
                    : ''
                } ${item.isClosed ? 'bg-muted/30' : ''}`}
              >
                <span
                  className={`font-medium ${
                    index === todayIndex ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.day}
                  {index === todayIndex && (
                    <span className="ml-2 text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                      Oggi
                    </span>
                  )}
                </span>
                <span
                  className={`${
                    item.isClosed
                      ? 'text-muted-foreground italic'
                      : 'text-foreground font-medium'
                  }`}
                >
                  {item.hours}
                </span>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-muted-foreground mt-6 text-sm">
            {t.hours.note}
          </p>
        </div>
      </div>
    </section>
  );
}
