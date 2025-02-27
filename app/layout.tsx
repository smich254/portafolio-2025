import './globals.css';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Cargar componentes de forma diferida (Lazy Loading)
const Header = dynamic(() => import('./components/Header'), { ssr: false });
const Footer = dynamic(() => import('./components/Footer'), { ssr: false });
const AOSInitializer = dynamic(() => import('./components/AOSInitializer'), { ssr: false });
const MatrixWrapper = dynamic(() => import('./components/MatrixWrapper'), { ssr: false });

export const metadata: Metadata = {
  title: 'Willy Cardenas - Portafolio',
  description: 'Portafolio personal de Willy Cardenas, Desarrollador Full-Stack.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Suspense fallback={<div>Cargando fondo...</div>}>
          <MatrixWrapper />
        </Suspense>
        <Suspense fallback={<div>Cargando efectos...</div>}>
          <AOSInitializer />
        </Suspense>
        <Suspense fallback={<div>Cargando encabezado...</div>}>
          <Header name="Willy Cardenas" />
        </Suspense>
        <main className="relative z-10">{children}</main>
        <Suspense fallback={<div>Cargando pie de página...</div>}>
          <Footer name="Willy Cardenas" profession="Desarrollador Full-Stack" />
        </Suspense>
      </body>
    </html>
  );
}
