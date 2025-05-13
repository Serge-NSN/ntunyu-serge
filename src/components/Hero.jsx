import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16" data-aos="fade-up">
      <div className="text-center animate-fade-in" data-aos="zoom-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
          NTUNYU SERGE NGALA
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-secondary/90">
         Computer Engineer || Web Developer || Video Editor || YouTube Content Creator
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-secondary/80 mb-8">
          Bridging creativity and technology—crafting web solutions, editing compelling videos, and sharing knowledge on YouTube.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.linkedin.com/in/ntunyu-serge-3624b2207/"
            className="px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-white rounded-full hover:opacity-90 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
          <a 
            href="https://github.com/Serge-NSN"
            className="px-6 py-3 border-2 border-secondary rounded-full hover:bg-secondary hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;