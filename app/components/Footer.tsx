// app/components/Footer.tsx
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

interface FooterProps {
  name: string;
  profession: string;
}

const Footer: React.FC<FooterProps> = ({ name, profession }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-aos="fade-up" className="footer">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p className="mb-2 md:mb-0">
          &copy; {currentYear} {name} – {profession}.
        </p>
        <div className="flex space-x-3">
          <a 
            href="https://www.linkedin.com/in/juanperez" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn" 
            className="social-link"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a 
            href="https://github.com/juanperez" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub" 
            className="social-link"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a 
            href="https://twitter.com/juanperez" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Twitter" 
            className="social-link"
          >
            <FaTwitter aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
