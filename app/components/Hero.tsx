// app/components/Hero.tsx
import React from 'react';
import Image from 'next/image';

interface HeroProps {
  name: string;
  profession: string;
  image: string | null;
  useIllustration?: boolean;
}

const Hero: React.FC<HeroProps> = ({ name, profession, image, useIllustration }) => {
  return (
    <section
      id="hero"
      className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center"
    >
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 
          className="text-4xl md:text-5xl font-bold text-white text-shadow mb-4" 
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          {name}
        </h2>
        <p 
          className="text-xl md:text-2xl text-blue-300 text-shadow mb-6" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          {profession}
        </p>
        <div 
          className="flex justify-center md:justify-start space-x-4" 
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          <a href="#projects" className="btn hover:scale-105 transform transition-transform">
            Ver Proyectos
          </a>
          <a href="#contact" className="btn-outline hover:scale-105 transform transition-transform">
            Contáctame
          </a>
        </div>
      </div>
      <div 
        className="md:w-1/2 flex justify-center md:justify-end" 
        data-aos="zoom-in" 
        data-aos-delay="400"
      >
        {useIllustration ? (
          <Image
            src="/images/illustration.png"
            alt="Ilustración de perfil"
            width={300}
            height={300}
            className="w-64 h-64 md:w-80 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          image && (
            <Image
              src={image}
              alt={`Foto de ${name}`}
              width={300}
              height={300}
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500 shadow-lg hover:border-blue-400 transition-all duration-300"
            />
          )
        )}
      </div>
    </section>
  );
};

export default Hero;
