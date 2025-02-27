// app/components/About.tsx
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface AboutProps {
  aboutText: string;
  skills?: string[];
}

const About: React.FC<AboutProps> = ({ aboutText, skills = [] }) => {
  return (
    <section id="about" data-aos="fade-up" className="section">
      <h2 className="section-header">Acerca de mí</h2>
      <p className="section-text">
        {aboutText}
      </p>
      {skills.length > 0 && (
        <ul className="flex flex-wrap">
          {skills.map((skill) => (
            <li key={skill} className="skill-badge">
              <FaCheckCircle className="text-blue-600 mr-1" aria-hidden="true" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default About;
