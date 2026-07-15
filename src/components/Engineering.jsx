import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { engSkills, education } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const Engineering = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [eduRef, eduInView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section engineering-section" id="engineering" ref={ref}>
      <div className="container">
        <motion.div
          className="section-label"
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          The Other Side
        </motion.div>

        <motion.h2
          className="section-title"
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Computer<br />
          <span className="gradient-text">Engineering</span>
        </motion.h2>

        <motion.p
          className="section-sub"
          variants={fadeUp(0.15)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Where logic meets creativity. I build full-stack solutions and engineer robust systems.
        </motion.p>

        {/* Skills Grid */}
        <div className="eng-grid">
          {engSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="eng-card"
              variants={fadeUp(0.1 + i * 0.1)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="eng-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
              <div className="eng-tags">
                {skill.tags.map((tag, j) => (
                  <span key={j}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div ref={eduRef}>
          <motion.h3
            className="sub-heading"
            variants={fadeUp(0)}
            initial="hidden"
            animate={eduInView ? 'visible' : 'hidden'}
          >
            Education
          </motion.h3>

          <div className="edu-timeline">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="edu-item"
                variants={fadeUp(0.1 + i * 0.12)}
                initial="hidden"
                animate={eduInView ? 'visible' : 'hidden'}
              >
                <div className="edu-year">{edu.year}</div>
                <div className="edu-content">
                  <h4>{edu.title}</h4>
                  <p>{edu.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engineering;
