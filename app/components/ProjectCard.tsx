// app/components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
import { Project } from '../../interface/Project';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  return (
    <div 
      data-aos="fade-up" 
      data-aos-delay={`${index * 100}`}
      className="project-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="overflow-hidden">
        <Image
          src={project.imagen}
          alt={`Imagen del proyecto ${project.titulo}`}
          width={800}
          height={600}
          className="project-card__img transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="project-card__content">
        <h3 
          className="project-card__title text-shadow" 
          data-aos="fade-right" 
          data-aos-delay={`${index * 150}`}
        >
          {project.titulo}
        </h3>
        <p 
          className="project-card__description" 
          data-aos="fade-right" 
          data-aos-delay={`${index * 200}`}
        >
          {project.descripcion}
        </p>
        <div 
          className="mt-3 mb-4" 
          data-aos="fade-up" 
          data-aos-delay={`${index * 250}`}
        >
          {project.tecnologias.map((tech) => (
            <span key={tech} className="tech-badge hover:bg-blue-100 hover:text-blue-800 transition-colors">
              {tech}
            </span>
          ))}
        </div>
        <div 
          className="project-card__links" 
          data-aos="fade-up" 
          data-aos-delay={`${index * 300}`}
        >
          {project.urlProyecto && (
            <a
              href={project.urlProyecto}
              target="_blank"
              rel="noopener noreferrer"
              className="link bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center"
            >
              Ver Proyecto <FiExternalLink className="ml-1" aria-hidden="true" />
            </a>
          )}
          {project.urlCodigo && (
            <a
              href={project.urlCodigo}
              target="_blank"
              rel="noopener noreferrer"
              className="link bg-gray-50 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300 flex items-center"
            >
              Ver Código <FaGithub className="ml-1" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
