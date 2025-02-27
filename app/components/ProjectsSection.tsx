// app/components/ProjectsSection.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../../interface/Project';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" data-aos="fade-up" className="section">
      <h2 className="section-header">Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <ProjectCard key={proj.titulo} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
