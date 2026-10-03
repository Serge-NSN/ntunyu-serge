import { WHATSAPP_URL } from '../data/portfolioData';
import heroMature from '../assets/hero_mature.jpg';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Left: Text content */}
      <div className="hero-left">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for projects
        </div>

        <h1 className="hero-title">
          <span className="line">Ntunyu</span>
          <span className="line">Serge</span>
          <span className="line gradient-text">Ngala</span>
        </h1>

        <div className="hero-roles">
          <span className="role-tag">🎬 Video Editor</span>
          <span className="role-divider">·</span>
          <span className="role-tag">📷 Videographer</span>
          <span className="role-divider">·</span>
          <span className="role-tag">💻 Computer Engineer</span>
          <span className="role-divider">·</span>
          <span className="role-tag">🌍 Cameroon</span>
        </div>

        <p className="hero-sub">
          I tell stories through creative editing and code crafting promo videos,
          wedding highlights, recap reels, BTS films, faceless YouTube content,
          AI videos, and full event videography, while also building software as
          a Computer Engineer.
        </p>

        <div className="hero-ctas">
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
        </div>
      </div>

      {/* Right: Photo */}
      <div className="hero-right">
        <div className="photo-mature-wrapper">
          <img src={heroMature} alt="Ntunyu Serge Ngala" className="hero-portrait" />
          <div className="hero-portrait-backdrop"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
