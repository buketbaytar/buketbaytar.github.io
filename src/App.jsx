import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fff9f9] text-slate-800 selection:bg-red-200 selection:text-red-900 relative">
      <BackgroundAnimation />
      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
