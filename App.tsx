import React from 'react';
import { HeroSection } from './components/HeroSection';
import { EventDetails } from './components/EventDetails';
import { RsvpForm } from './components/RsvpForm';
import { PatternBackground } from './components/PatternBackground';
import { Footer } from './components/Footer';
import { RamadanDecorations } from './components/RamadanDecorations';

const App: React.FC = () => {
  return (
    <main className="min-h-screen relative">
      <PatternBackground />
      <RamadanDecorations />
      <HeroSection />
      <EventDetails />
      <RsvpForm />
      <Footer />
    </main>
  );
};

export default App;