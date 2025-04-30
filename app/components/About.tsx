// app/components/About.tsx
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface AboutProps {
  aboutText: string;
  skills?: string[];
}

const About: React.FC<AboutProps> = ({ aboutText, skills = [] }) => {
  return (
    <section 
      id="about" 
      data-aos="fade-up" 
      className="section bg-black bg-opacity-80 py-16 text-white"
    >
      <h2 
        className="text-4xl font-bold text-center mb-8 text-gray-800 text-shadow" 
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Acerca de mí
      </h2>
      <p 
        className="section-text text-blue-100 max-w-3xl mx-auto text-center leading-relaxed text-shadow mb-10" 
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {aboutText}
      </p>
      {skills.length > 0 && (
        <div 
          className="max-w-3xl mx-auto" 
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600 text-shadow">Mis habilidades</h3>
          <ul className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <li 
                key={skill} 
                className="bg-blue-600 text-white px-4 py-2 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-blue-500 shadow-md flex items-center"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100 + 400}`}
              >
                <FaCheckCircle className="text-white mr-2" aria-hidden="true" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default About;
