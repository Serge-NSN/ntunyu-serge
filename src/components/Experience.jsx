import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "IT Specialist",
      company: "Hope For a Better Future - H4BF",
      period: "March 2025-Present",
      location: "Mile 1, Up Station",
      responsibilities: [
        "Maintain oganiztion's website by performing regular updates",
        "Train youths in the field of Web & App Development",
        "Provide IT/technical support to staff"
      ]
    },
    {
      title: "Software Engineer",
      company: "SEED",
      period: "July 2024-Present",
      location: "Mile 5 Nkwen Bamenda",
      responsibilities: [
        "Collaborate with other developers to build and enhance websites",
        "Contribute to multimedia efforts by editing videos for publicity",
        "Tutor interns in Front-end Development"
      ]
    },
    {
      title: "Software Tester",
      company: "Tester Work",
      period: "July 2023-Present",
      location: "Remote",
      responsibilities: [
        "Test Case Development and Execution",
        "Perform Usability, Exploratory and Functional tests",
        "Collaborate with cross-functional teams"
      ]
    },
    {
      title: "Full Stack Development Intern",
      company: "Skye8",
      period: "March 2023-September 2023",
      location: "Ghana Street Nkwen Bamenda",
      responsibilities: [
        "Setup and configure PostgreSQL databases",
        "Develop backend for QAHub using Spring Boot with Kotlin",
        "Develop REST APIs for Spring Boot applications",
        "Contribute to frontend development of Learnoso using React.js"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-primary-light/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2><br></br>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card hover:transform hover:scale-[1.02] transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold gradient-text">{exp.title}</h3>
                <p className="text-secondary/70">{exp.period}</p>
              </div>
              <p className="text-lg mb-2">{exp.company} - {exp.location}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-accent mr-2">▹</span>
                    <span className="text-secondary/80">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;