// ... existing code ...
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', once: true });
  }, []);
  // ... existing code ...
}