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
    <section id="contact" data-aos="fade-up" className="section">
      <h2 className="section-header">Contacto</h2>
      <form className="contact-form">
        <label htmlFor="name">Nombre</label>
        <input 
          id="name" 
          type="text" 
          required 
          className="contact-input"
          placeholder="Tu nombre" 
        />

        <label htmlFor="email">Correo</label>
        <input 
          id="email" 
          type="email" 
          required 
          className="contact-input"
          placeholder="tu@correo.com" 
        />

        <label htmlFor="subject">Asunto</label>
        <input 
          id="subject" 
          type="text" 
          required 
          className="contact-input"
          placeholder="Asunto del mensaje" 
        />

        <label htmlFor="message">Mensaje</label>
        <textarea 
          id="message" 
          rows={4} 
          required 
          className="contact-textarea"
          placeholder="Escribe tu mensaje..." 
        />

        <button type="submit" className="contact-button">
          Enviar
        </button>
      </form>

      <div className="text-center mt-6">
        <p className="text-gray-700">
          También puedes contactarme en <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
        </p>
        <div className="flex justify-center space-x-4 text-2xl text-gray-700 mt-4">
          {socialLinks.linkedin && (
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="hover:text-blue-600 transition-colors"
            >
              <FaLinkedin />
            </a>
          )}
          {socialLinks.github && (
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub" 
              className="hover:text-blue-600 transition-colors"
            >
              <FaGithub />
            </a>
          )}
          {socialLinks.twitter && (
            <a 
              href={socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter" 
              className="hover:text-blue-600 transition-colors"
            >
              <FaTwitter />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
