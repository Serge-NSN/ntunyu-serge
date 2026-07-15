import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import weddingPhoto from '../assets/photo_wedding.jpg';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const VideographySpotlight = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section className="section videography-section" id="videography" ref={ref}>
      <div className="container">
        <motion.div
          className="section-label"
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Behind the Lens
        </motion.div>

        <motion.h2
          className="section-title"
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Videography<br />
          <span className="gradient-text">Shot & Edited</span>
        </motion.h2>

        <div className="videography-grid">
          {/* Left — Text */}
          <motion.div
            className="videography-text"
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <p>
              Beyond editing, I step behind the lens as a <strong>videographer</strong> — 
              shooting and editing full productions with nothing but a smartphone and a cinematic eye.
            </p>
            <p>
              From intimate wedding receptions to lively social events, I capture the raw emotion, 
              the unscripted moments, and the stories that make every occasion truly unique. 
              Every shot is composed with intention. Every edit is crafted with heart.
            </p>

            <div className="videography-highlights">
              <div className="vh-item">
                <div className="vh-icon">💍</div>
                <div>
                  <div className="vh-title">Weddings & Ceremonies</div>
                  <div className="vh-desc">Full event coverage — from preparation to reception</div>
                </div>
              </div>
              <div className="vh-item">
                <div className="vh-icon">🎉</div>
                <div>
                  <div className="vh-title">Social Events</div>
                  <div className="vh-desc">Parties, anniversaries, corporate gatherings</div>
                </div>
              </div>
              <div className="vh-item">
                <div className="vh-icon">📱</div>
                <div>
                  <div className="vh-title">Smartphone Cinematography</div>
                  <div className="vh-desc">Professional results using mobile-first production</div>
                </div>
              </div>
            </div>

            <motion.a
              href="#portfolio"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                // Filter to videography on click
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              📷 View Videography Work
            </motion.a>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            className="videography-photo-wrap"
            initial={{ opacity: 0, x: 50, scale: 0.97 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="videography-photo-frame">
              <img
                src={weddingPhoto}
                alt="Ntunyu Serge Ngala filming at a wedding reception"
              />
              <div className="videography-photo-overlay">
                <div className="vp-tag">
                  <span className="vp-dot"></span>
                  Live — Wedding Reception
                </div>
              </div>
            </div>

            {/* Decorative floating elements */}
            <motion.div
              className="vp-float-card"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span>🎬</span>
              <div>
                <div className="card-label">In action</div>
                <div className="card-value">Getting the clips myself</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideographySpotlight;
