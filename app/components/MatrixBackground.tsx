"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const CHARACTERS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzあいうえおカキクケコ"; // Caracteres variados

interface MatrixBackgroundProps {
  opacity?: number;
  enabled?: boolean;
}

export default function MatrixBackground({ opacity = 0.5, enabled = true }: MatrixBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    // Inicializar escena, cámara y renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -window.innerWidth / 2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      -window.innerHeight / 2,
      1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.domElement.style.pointerEvents = "none";
    renderer.domElement.style.opacity = String(opacity);
    containerRef.current?.appendChild(renderer.domElement);

    // Configuración del efecto Matrix
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    const fontSize = 10; // Reducido para más caracteres en pantalla
    const columns = Math.floor(window.innerWidth / fontSize); 
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${fontSize}px monospace`;
    ctx.fillStyle = "#00FF00";

    // Preparar caracteres iniciales en cada columna
    const drops: number[] = Array(columns).fill(Math.random() * canvas.height);

    // Textura de Three.js a partir del canvas
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    material.opacity = opacity;
    const geometry = new THREE.PlaneGeometry(canvas.width, canvas.height);
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Función para actualizar el efecto Matrix
    function updateMatrixRain() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Ajuste para mejorar la estela
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      texture.needsUpdate = true;
    }

    let animationFrameId: number;
    function animate() {
      updateMatrixRain();
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    function onWindowResize() {
      camera.left = -window.innerWidth / 2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = -window.innerHeight / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops.fill(Math.random() * canvas.height);
    }
    window.addEventListener("resize", onWindowResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
      plane.geometry.dispose();
      material.dispose();
      texture.dispose();
      scene.clear();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [enabled, opacity]);

  return <div ref={containerRef} className="matrix-bg-container" />;
}
