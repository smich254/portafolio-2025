// app/components/MatrixWrapper.tsx
"use client"; // Este componente maneja la re-montura en el cliente

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Cargar MatrixBackground dinámicamente
const MatrixBackground = dynamic(() => import('./MatrixBackground'), {
  ssr: false,
});

export default function MatrixWrapper() {
  const pathname = usePathname();
  const [showMatrix, setShowMatrix] = useState(true);

  useEffect(() => {
    setShowMatrix(false);
    setTimeout(() => setShowMatrix(true), 100);
  }, [pathname]);

  return showMatrix ? <MatrixBackground opacity={0.4} enabled={true} /> : null;
}
