import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solution from "./components/Solution";
import SolutionCards from "./components/SolutionCards";
import HowItWorks from "./components/HowItWorks";
import Trust from "./components/Trust";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Hero />
        <Solution />
        <SolutionCards />
        <HowItWorks />
        <Trust />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
