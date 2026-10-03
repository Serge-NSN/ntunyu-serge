import weddingPhoto from '../assets/photo_wedding.jpg';

const VideographySpotlight = () => {
  return (
    <section className="section videography-section" id="videography">
      <div className="container">
        <div className="section-label">
          Behind the Lens
        </div>

        <h2 className="section-title">
          Videography<br />
          <span className="gradient-text">Shot & Edited</span>
        </h2>

        <div className="videography-grid">
          {/* Left — Text */}
          <div className="videography-text">
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

            <a
              href="#portfolio"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                // Filter to videography on click
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              📷 View Videography Work
            </a>
          </div>

          {/* Right — Photo */}
          <div className="videography-photo-wrap">
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

            {/* Decorative element */}
            <div className="vp-float-card">
              <span>🎬</span>
              <div>
                <div className="card-label">In action</div>
                <div className="card-value">Getting the clips myself</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideographySpotlight;
