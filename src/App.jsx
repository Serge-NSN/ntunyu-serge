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

function App() {
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
