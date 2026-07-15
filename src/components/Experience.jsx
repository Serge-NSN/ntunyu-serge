import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section experience-section" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-label"
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Work History
        </motion.div>

        <motion.h2
          className="section-title"
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Professional<br />
          <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="timeline">
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              className="timeline-item"
              variants={fadeUp(0.1 + i * 0.12)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="tl-dot" />
              <div className="tl-date">{job.date}</div>
              <div className="tl-card">
                <div className="tl-role">{job.role}</div>
                <div className="tl-company">{job.company}</div>
                <ul>
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="tl-tags">
                  {job.tags.map((tag, j) => (
                    <span key={j}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
