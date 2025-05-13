import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-secondary/80">
              I'm a Computer Engineer focused on Web Development and Mobile App Development, with a solid foundation in Software Development principles. My passion lies in creating user-friendly solutions that make a real difference.
            </p>
            <p className="text-lg text-secondary/80">
              I'm a graduate from the National Higher Polytechnic Institute in The University of Bamenda.
            </p>
            <p className="text-lg text-secondary/80">
              Beyond coding, I'm also skilled in video editing and have achieved recognition as a Microsoft Office Specialist National Championship Winner in both 2021, 2022, 2023 & 2025.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4 gradient-text">Quick Facts</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span>
                Computer Engineering
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span>
                Web Developer
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span>
                Video Editor
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span>
                Microsoft Office Specialist
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;