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
      data-aos="fade-up"
      className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center"
    >
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="heading-lg mb-4">{name}</h2>
        <p className="hero-subtitle">
          {profession}
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="#projects" className="btn">
            Ver Proyectos
          </a>
          <a href="#contact" className="btn-outline">
            Contáctame
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        {useIllustration ? (
          <Image
            src="/images/illustration.png"
            alt="Ilustración de perfil"
            width={300}
            height={300}
            className="w-64 h-64 md:w-80 md:h-80 object-cover"
          />
        ) : (
          image && (
            <Image
              src={image}
              alt={`Foto de ${name}`}
              width={300}
              height={300}
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full"
            />
          )
        )}
      </div>
    </section>
  );
};

export default Hero;
