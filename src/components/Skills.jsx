import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      skills: ["Kotlin", "Spring Boot", "Dart & Flutter", "Python", "ReactJS", "HTML/CSS", "JavaScript", "Bootstrap"]
    },
    {
      title: "Professional Skills",
      skills: ["Video Editing", "Web Development", "Graphic Design", "YouTube Content Creation", "Problem Solving"]
    },
    {
      title: "Other Tools & Technologies",
      skills: ["Microsoft Office Suite", "CapCut"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-bold mb-4 gradient-text">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary-light rounded-full text-secondary/80 hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;