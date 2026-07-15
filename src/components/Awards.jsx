import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { awards } from '../data/portfolioData';
import photo2 from '../assets/photo2.jpg';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const Awards = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [photoRef, photoInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section awards-section" id="awards" ref={ref}>
      <div className="container">
        <motion.div
          className="section-label"
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Recognition
        </motion.div>

        <motion.h2
          className="section-title"
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Awards &<br />
          <span className="gradient-text">Achievements</span>
        </motion.h2>

        {/* Awards Grid */}
        <div className="awards-grid">
          {awards.map((award, i) => (
            <motion.div
              key={award.id}
              className={`award-card ${award.featured ? 'award-card--featured' : ''}`}
              variants={fadeUp(0.1 + i * 0.1)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="award-year">{award.year}</div>
              <div className="award-trophy">{award.trophy}</div>
              <h3>{award.title}</h3>
              <p>{award.desc}</p>
              {award.featured && (
                <div className="award-badge-world">🌍 World Stage</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Awards Photo */}
        <motion.div
          className="awards-photo"
          ref={photoRef}
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={photoInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={photo2}
            alt="Ntunyu Serge Ngala on stage at MOS World Championship holding the Cameroon flag"
          />
          <div className="awards-photo-caption">
            🌍 Representing Cameroon at the MOS World Championship — USA · 2025
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
