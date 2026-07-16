import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../data/portfolioData';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Left: Text content */}
      <motion.div
        className="hero-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={fadeUp}>
          <span className="badge-dot" />
          Available for projects
        </motion.div>

        <motion.h1 className="hero-title" variants={fadeUp}>
          <span className="line">Ntunyu</span>
          <span className="line">Serge</span>
          <span className="line gradient-text">Ngala</span>
        </motion.h1>

        <motion.div className="hero-roles" variants={fadeUp}>
          <span className="role-tag">🎬 Video Editor</span>
          <span className="role-divider">·</span>
          <span className="role-tag">📷 Videographer</span>
          <span className="role-divider">·</span>
          <span className="role-tag">💻 Computer Engineer</span>
          <span className="role-divider">·</span>
          <span className="role-tag">🌍 Cameroon</span>
        </motion.div>

        <motion.p className="hero-sub" variants={fadeUp}>
          I tell stories through creative editing and code crafting promo videos,
          wedding highlights, recap reels, BTS films, faceless YouTube content,
          AI videos, and full event videography, while also building software as
          a Computer Engineer.
        </motion.p>

        <motion.div className="hero-ctas" variants={fadeUp}>
          <a
            href="#portfolio"
            className="btn-primary"
            id="heroCTAPortfolio"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="btn-ghost"
            id="heroCTAContact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Right: Photo cluster */}
      <motion.div
        className="hero-right"
        variants={fadeRight}
        initial="hidden"
        animate="visible"
      >
        <div className="photo-cluster">
          {/* Main photo */}
          <motion.div
            className="photo-main"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src={photo1} alt="Ntunyu Serge Ngala" />
          </motion.div>

          {/* Float photo 1 — stage photo */}
          <motion.div
            className="photo-float-1"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <img src={photo2} alt="MOS World Championship" />
          </motion.div>

          {/* Float photo 2 — group photo */}
          <motion.div
            className="photo-float-2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          >
            <img src={photo3} alt="With colleagues" />
          </motion.div>

          {/* Award floating card */}
          <motion.div
            className="floating-card card-award"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <span className="card-icon">🏆</span>
            <div>
              <div className="card-label">MOS World</div>
              <div className="card-value">Finalist 2025</div>
            </div>
          </motion.div>

          {/* Experience floating card */}
          <motion.div
            className="floating-card card-exp"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          >
            <span className="card-icon">🎬</span>
            <div>
              <div className="card-label">Video Editing</div>
              <div className="card-value">3+ Years</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
