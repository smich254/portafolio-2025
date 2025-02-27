// app/components/AOSInitializer.tsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * AOSInitializer se encarga de inicializar la librería AOS para animaciones al hacer scroll.
 * Recuerda instalar AOS con: npm install aos
 */
const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,       // Duración de las animaciones en milisegundos
      easing: 'ease-in-out',
      once: true,          // Las animaciones se ejecutan una sola vez
      mirror: false,
    });
  }, []);
  return null;
};

export default AOSInitializer;
