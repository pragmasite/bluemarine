import { LanguageProvider } from '@/context/LanguageContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { OpeningHours } from '@/components/OpeningHours';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { DisclaimerModal } from '@/components/DisclaimerModal';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <OpeningHours />
          <Contact />
        </main>
        <Footer />
        <DisclaimerModal />
      </div>
    </LanguageProvider>
  );
}

export default App;
