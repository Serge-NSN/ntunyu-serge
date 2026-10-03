import { engSkills, education } from '../data/portfolioData';

const Engineering = () => {
  return (
    <section className="section engineering-section" id="engineering">
      <div className="container">
        <div className="section-label">
          The Other Side
        </div>

        <h2 className="section-title">
          Computer<br />
          <span className="gradient-text">Engineering</span>
        </h2>

        <p className="section-sub">
          Where logic meets creativity. I build full-stack solutions and engineer robust systems.
        </p>

        {/* Skills Grid */}
        <div className="eng-grid">
          {engSkills.map((skill, i) => (
            <div key={i} className="eng-card">
              <div className="eng-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
              <div className="eng-tags">
                {skill.tags.map((tag, j) => (
                  <span key={j}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 className="sub-heading">
            Education
          </h3>

          <div className="edu-timeline">
            {education.map((edu, i) => (
              <div key={i} className="edu-item">
                <div className="edu-year">{edu.year}</div>
                <div className="edu-content">
                  <h4>{edu.title}</h4>
                  <p>{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engineering;
