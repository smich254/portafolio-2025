// app/components/ProjectsSection.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../../interface/Project';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section 
      id="projects" 
      data-aos="fade-up" 
      className="section bg-black bg-opacity-80 py-16"
    >
      <h2 
        className="text-4xl font-bold text-center mb-4 text-gray-800 text-shadow" 
        data-aos="fade-down" 
        data-aos-delay="100"
      >
        Proyectos
      </h2>
      <p 
        className="text-center text-blue-600 mb-12 max-w-2xl mx-auto text-shadow" 
        data-aos="fade-up" 
        data-aos-delay="200"
      >
        Explora algunos de mis trabajos recientes
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <ProjectCard 
            key={proj.titulo} 
            project={proj} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
