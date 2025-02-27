// app/page.tsx
'use client';  // Habilita interactividad en caso de usar estados o efectos (no obligatorio aquí)

import Hero from './components/Hero';
import About from './components/About';
import ProjectsSection from './components/ProjectsSection';
import ContactForm from './components/ContactForm';
// Importamos las interfaces TypeScript para tipar nuestros datos
import { Project } from '../interface/Project';
import { SocialLinks } from '../interface/SocialLinks';

export default function HomePage() {
  // === Variables de contenido del usuario (ejemplos) ===
  const nombreCompleto: string = 'Willy Cardenas';
  const profesion: string = 'Desarrollador Full-Stack';
  const imagenPerfil: string | null = '/images/profile.jpg';  // Ruta de imagen de perfil en public/
  const usarIlustracion: boolean = false;  // Usar ilustración en lugar de foto de perfil

  const textoAcercaDeMi: string =
    'Soy un desarrollador Full-Stack con 3 años de experiencia construyendo aplicaciones web modernas. Apasionado por la creación de experiencias de usuario eficientes y agradables, con sólidas habilidades en desarrollo frontend y backend.';
  const habilidades: string[] = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Tailwind CSS',
  ];

  // Lista de proyectos (ejemplos)
  const proyectos: Project[] = [
    {
      titulo: 'Aplicación de E-commerce',
      descripcion:
        'Plataforma de comercio electrónico con carrito de compras, pasarela de pago y panel de administración.',
      imagen: '/images/proyecto1.png', // asegúrate de que la imagen exista en "public/images/"
      tecnologias: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      urlProyecto: 'https://mi-ecommerce-demo.com',
      urlCodigo: 'https://github.com/usuario/mi-ecommerce',
    },
    {
      titulo: 'Blog Personal',
      descripcion:
        'Blog construido con Next.js y Markdown, con soporte para temas claros y oscuros, y comentarios en tiempo real.',
      imagen: '/images/proyecto2.png',
      tecnologias: ['Next.js', 'Next.js App Router', 'Tailwind CSS'],
      urlProyecto: 'https://mi-blog-demo.com',
      urlCodigo: 'https://github.com/usuario/mi-blog',
    },
    {
      titulo: 'Dashboard de Analíticas',
      descripcion:
        'Panel interactivo para visualizar métricas de negocio en tiempo real, con autenticación de usuarios y gráficos dinámicos.',
      imagen: '/images/proyecto3.png',
      tecnologias: ['React', 'Tailwind CSS', 'D3.js', 'Express'],
      urlProyecto: 'https://mi-dashboard-demo.com',
      urlCodigo: 'https://github.com/usuario/mi-dashboard',
    },
    // ... Agregar más proyectos según sea necesario
  ];

  const correoContacto: string = 'correo@ejemplo.com';
  const redesSociales: SocialLinks = {
    linkedin: 'https://www.linkedin.com/in/willcardenas',
    github: 'https://github.com/smich254',
    twitter: 'https://twitter.com/smich254',
  };
  // === Fin de variables de contenido ===

  return (
    <>
      {/* Sección Hero (Inicio) */}
      <Hero
        name={nombreCompleto}
        profession={profesion}
        image={imagenPerfil}
        useIllustration={usarIlustracion}
      />

      {/* Sección About Me (Acerca de mí) */}
      <About aboutText={textoAcercaDeMi} skills={habilidades} />

      {/* Sección Projects (Proyectos) */}
      <ProjectsSection projects={proyectos} />

      {/* Sección Contact (Contacto) */}
      <ContactForm email={correoContacto} socialLinks={redesSociales} />
    </>
  );
}
