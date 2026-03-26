import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import SolutionCards from './components/SolutionCards';
import HowItWorks from './components/HowItWorks';
import Trust from './components/Trust';
import CityCheck from './components/CityCheck';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <SolutionCards />
        <HowItWorks />
        <Trust />
        <CityCheck />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
