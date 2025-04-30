"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      // Configuración principal
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      
      // Configuraciones adicionales
      offset: 120,        // Offset (en px) desde el punto de activación original
      delay: 0,           // Valores de 0 a 3000, con paso 50ms
      anchorPlacement: 'top-bottom', // Posición del elemento respecto al viewport
      
      // Desactivar en dispositivos móviles/tablets
      disable: false,
      startEvent: 'DOMContentLoaded', // Nombre del evento enviado en el documento para iniciar la animación
      disableMutationObserver: false, // Desactivar detección automática de mutaciones DOM
      
      // Configuraciones para depuración
      debounceDelay: 50,   // El tiempo de espera para debounce en dispositivos móviles
      throttleDelay: 99,   // El tiempo de espera para throttle en dispositivos móviles
    });
  }, []);
  return null;
};

export default AOSInitializer;
