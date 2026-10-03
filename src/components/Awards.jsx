import { awards } from '../data/portfolioData';
import photo2 from '../assets/photo2.jpg';

const Awards = () => {
  return (
    <section className="section awards-section" id="awards">
      <div className="container">
        <div className="section-label">
          Recognition
        </div>

        <h2 className="section-title">
          Awards &<br />
          <span className="gradient-text">Achievements</span>
        </h2>

        {/* Awards Grid */}
        <div className="awards-grid">
          {awards.map((award) => (
            <div
              key={award.id}
              className={`award-card ${award.featured ? 'award-card--featured' : ''}`}
            >
              <div className="award-year">{award.year}</div>
              <div className="award-trophy">{award.trophy}</div>
              <h3>{award.title}</h3>
              <p>{award.desc}</p>
              {award.featured && (
                <div className="award-badge-world">🌍 World Stage</div>
              )}
            </div>
          ))}
        </div>

        {/* Awards Photo */}
        <div className="awards-photo">
          <img
            src={photo2}
            alt="Ntunyu Serge Ngala on stage at MOS World Championship holding the Cameroon flag"
          />
          <div className="awards-photo-caption">
            🌍 Representing Cameroon at the MOS World Championship — USA · 2025
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
