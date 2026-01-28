import it from './it.json';
import de from './de.json';
import fr from './fr.json';
import en from './en.json';

export type Language = 'it' | 'de' | 'fr' | 'en';

export const translations = {
  it,
  de,
  fr,
  en,
} as const;

export type Translations = typeof it;

export const languageNames: Record<Language, string> = {
  it: 'Italiano',
  de: 'Deutsch',
  fr: 'Français',
  en: 'English',
};

export const defaultLanguage: Language = 'it';
