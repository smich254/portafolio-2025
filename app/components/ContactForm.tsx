// app/components/ContactForm.tsx
import React from 'react';
import { SocialLinks } from '../../interface/SocialLinks';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

interface ContactFormProps {
  email: string;
  socialLinks: SocialLinks;
}

const ContactForm: React.FC<ContactFormProps> = ({ email, socialLinks }) => {
  return (
    <section 
      id="contact" 
      data-aos="fade-up" 
      className="section bg-black bg-opacity-80 py-16 text-white"
    >
      <h2 
        className="text-4xl font-bold text-center mb-8 text-gray-800 text-shadow" 
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Contacto
      </h2>
      <form className="contact-form max-w-xl mx-auto bg-black bg-opacity-30 p-8 rounded-xl shadow-xl backdrop-blur-sm border border-blue-900/30" data-aos="fade-up" data-aos-delay="200">
        <label 
          htmlFor="name" 
          className="text-blue-100 font-medium mb-2 block text-shadow-sm"
          data-aos="fade-right"
          data-aos-delay="250"
        >
          Nombre
        </label>
        <input 
          id="name" 
          type="text" 
          required 
          className="contact-input focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 bg-white bg-opacity-90 backdrop-blur-sm shadow-inner hover:shadow-md"
          placeholder="Tu nombre" 
          data-aos="fade-right"
          data-aos-delay="300"
        />

        <label 
          htmlFor="email" 
          className="text-blue-100 font-medium mb-2 block mt-4 text-shadow-sm"
          data-aos="fade-right"
          data-aos-delay="350"
        >
          Correo
        </label>
        <input 
          id="email" 
          type="email" 
          required 
          className="contact-input focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 bg-white bg-opacity-90 backdrop-blur-sm shadow-inner hover:shadow-md"
          placeholder="tu@correo.com" 
          data-aos="fade-right"
          data-aos-delay="400"
        />

        <label 
          htmlFor="subject" 
          className="text-blue-100 font-medium mb-2 block mt-4 text-shadow-sm"
          data-aos="fade-right"
          data-aos-delay="450"
        >
          Asunto
        </label>
        <input 
          id="subject" 
          type="text" 
          required 
          className="contact-input focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 bg-white bg-opacity-90 backdrop-blur-sm shadow-inner hover:shadow-md"
          placeholder="Asunto del mensaje" 
          data-aos="fade-right"
          data-aos-delay="500"
        />

        <label 
          htmlFor="message" 
          className="text-blue-100 font-medium mb-2 block mt-4 text-shadow-sm"
          data-aos="fade-right"
          data-aos-delay="550"
        >
          Mensaje
        </label>
        <textarea 
          id="message" 
          rows={4} 
          required 
          className="contact-textarea focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 bg-white bg-opacity-90 backdrop-blur-sm shadow-inner hover:shadow-md"
          placeholder="Escribe tu mensaje..." 
          data-aos="fade-right"
          data-aos-delay="600"
        />
        
        <button 
          type="submit" 
          className="contact-button mt-6 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:shadow-blue-500/50 hover:shadow-lg relative overflow-hidden group"
          data-aos="zoom-in"
          data-aos-delay="650"
        >
          <span className="relative z-10">Enviar mensaje</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
        </button>
        
        <div className="mt-8 flex justify-center space-x-8" data-aos="fade-up" data-aos-delay="700">
          {socialLinks.linkedin && (
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-6 hover:shadow-glow"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={36} />
            </a>
          )}
          {socialLinks.github && (
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-6 hover:shadow-glow"
              aria-label="GitHub"
            >
              <FaGithub size={36} />
            </a>
          )}
          {socialLinks.twitter && (
            <a 
              href={socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-6 hover:shadow-glow"
              aria-label="Twitter"
            >
              <FaTwitter size={36} />
            </a>
          )}
        </div>
        
        <p className="text-center mt-6 text-blue-200 text-shadow" data-aos="fade-up" data-aos-delay="800">
          O envíame un correo directamente a <a href={`mailto:${email}`} className="text-white hover:text-blue-300 underline transition-colors hover:scale-105 inline-block transform">{email}</a>
        </p>
      </form>
    </section>
  );
};

export default ContactForm;
