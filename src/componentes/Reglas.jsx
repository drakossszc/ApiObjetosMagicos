import React from 'react';

export default function Reglas() {
  return (
    <div>
      <h2>Reglamento</h2>
      <div className="magic-card" style={{ marginTop: '10px' }}>
        <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
          <li>No nos hacemos responsables si la app invoca monstruos en tu pantalla táctil.</li>
          <li>Los datos se sincronizan directamente mediante conexiones arcanas (API).</li>
          <li>Desarrollado para despliegue en Netlify y empaquetado móvil en Android Studio.</li>
        </ul>
      </div>
    </div>
  );
}