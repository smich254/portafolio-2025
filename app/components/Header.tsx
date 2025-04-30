// app/components/Header.tsx
import React from 'react';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header className="w-full bg-black bg-opacity-80 shadow-md backdrop-blur-sm">
      <nav className="container mx-auto flex flex-col md:flex-row md:justify-between items-center p-4">
        <h1 
          className="text-2xl font-bold text-white text-shadow" 
          data-aos="fade-right" 
          data-aos-delay="100"
        >
          {name}
        </h1>
        <div className="mt-3 md:mt-0 space-x-6" data-aos="fade-left" data-aos-delay="200">
          <a href="#about" className="nav-link text-white hover:text-blue-400">
            Sobre mí
          </a>
          <a href="#projects" className="nav-link text-white hover:text-blue-400">
            Proyectos
          </a>
          <a href="#contact" className="nav-link text-white hover:text-blue-400">
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
