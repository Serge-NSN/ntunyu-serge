import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-label">
          Work History
        </div>

        <h2 className="section-title">
          Professional<br />
          <span className="gradient-text">Experience</span>
        </h2>

        <div className="timeline">
          {experience.map((job) => (
            <div key={job.id} className="timeline-item">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
