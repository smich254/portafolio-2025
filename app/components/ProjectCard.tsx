// app/components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
import { Project } from '../../interface/Project';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div data-aos="fade-up" className="project-card">
      <Image
        src={project.imagen}
        alt={`Imagen del proyecto ${project.titulo}`}
        width={800}
        height={600}
        className="project-card__img"
      />
      <div className="project-card__content">
        <h3 className="project-card__title">{project.titulo}</h3>
        <p className="project-card__description">{project.descripcion}</p>
        <div className="mt-3 mb-4">
          {project.tecnologias.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-card__links">
          {project.urlProyecto && (
            <a
              href={project.urlProyecto}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Ver Proyecto <FiExternalLink className="ml-1" aria-hidden="true" />
            </a>
          )}
          {project.urlCodigo && (
            <a
              href={project.urlCodigo}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
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
