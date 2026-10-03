import { personalInfo, stats } from '../data/portfolioData';
import photo2 from '../assets/photo2.jpg';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-label">
          Who I Am
        </div>

        <h2 className="section-title">
          A Creative<br />
          <span className="gradient-text">& A Builder</span>
        </h2>

        <div className="about-grid">
          {/* Text side */}
          <div className="about-text">
            <p>
            I am a <strong>Computer Engineer</strong> and a <strong>creative video specialist</strong> with a deep passion for using technology and storytelling to create meaningful digital content. My work spans <strong>promo videos, recap & highlight reels, BTS films, wedding videography, faceless YouTube content, AI-generated videos</strong>, and full event coverage — shot and edited with a cinematic eye.
          </p>
          <p>
            I also run a <strong>faceless YouTube channel with 7.9K subscribers</strong>, which I grow through consistent, high-quality content. On the engineering side, I have collaborated with digital agencies, NGOs, startups and organisations in the communications sector, while also mentoring young people in practical IT skills.
          </p>

            {/* Stats */}
            <div className="about-stats">
              {stats.map((s, i) => (
                <div key={i} className="stat">
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo side */}
          <div className="about-photo">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
