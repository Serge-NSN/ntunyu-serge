import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import VideoShowcase from './components/VideoShowcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <VideoShowcase />
        <Contact />
      </main>
    </div>
  );
}

export default App;
