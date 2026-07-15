import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { personalInfo, stats } from '../data/portfolioData';
import photo2 from '../assets/photo2.jpg';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section about-section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-label"
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Who I Am
        </motion.div>

        <motion.h2
          className="section-title"
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          A Creative<br />
          <span className="gradient-text">& A Builder</span>
        </motion.h2>

        <div className="about-grid">
          {/* Text side */}
          <motion.div
            className="about-text"
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <p>
            I am a <strong>Computer Engineer</strong> and a <strong>creative video specialist</strong> with a deep passion for using technology and storytelling to create meaningful digital content. My work spans <strong>promo videos, recap & highlight reels, BTS films, wedding videography, faceless YouTube content, AI-generated videos</strong>, and full event coverage — shot and edited with a cinematic eye.
          </p>
          <p>
            I also run a <strong>faceless YouTube channel with 7.9K subscribers</strong>, which I grow through consistent, high-quality content. On the engineering side, I have collaborated with digital agencies, NGOs, startups and organisations in the communications sector, while also mentoring young people in practical IT skills.
          </p>

            {/* Stats */}
            <div className="about-stats">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="stat"
                  variants={fadeUp(0.2 + i * 0.1)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Photo side */}
          <motion.div
            className="about-photo"
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="about-photo-wrap">
              <img
                src={photo2}
                alt="Ntunyu Serge Ngala at MOS World Championship holding the Cameroon flag"
              />
              <div className="about-badge">
                <span>🌍</span>
                <span>Cameroon → World Stage · USA 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
