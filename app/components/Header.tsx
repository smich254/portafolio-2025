// app/components/Header.tsx
import React from 'react';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="container mx-auto flex flex-col md:flex-row md:justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
        <div className="mt-3 md:mt-0 space-x-4">
          <a href="#about" className="nav-link">
            Sobre mí
          </a>
          <a href="#projects" className="nav-link">
            Proyectos
          </a>
          <a href="#contact" className="nav-link">
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
