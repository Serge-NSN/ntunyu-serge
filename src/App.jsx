import { useState, useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import VideographySpotlight from './components/VideographySpotlight';
import Engineering from './components/Engineering';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Contact from './components/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // If URL is /#admin, render ONLY the Admin Panel
  if (currentHash === '#admin') {
    return (
      <>
        <ParticleCanvas />
        <AdminPanel />
      </>
    );
  }

  // Otherwise, render the main portfolio site
  return (
    <>
      {/* Animated particle background */}
      <ParticleCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Portfolio />
        <VideographySpotlight />
        <Engineering />
        <Experience />
        <Awards />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button */}
      <WhatsAppFloat />
    </>
  );
}

export default App;
