import React from 'react';

export default function Inicio({ cambiarPestana }) {
  return (
    <div>
      <h2> Mostrador del Mago</h2>
      <p style={{ marginTop: '8px' }}>Bienvenido a mi estanteria de objetos magicos. Echa un vistazo a los artefactos disponibles hoy en el reino.</p>
      <div className="magic-card" style={{ marginTop: '15px' }}>
        <h3>Oferta del Día</h3>
        <p>Poción de Vitalidad Suprema garantizada para curar fatiga de programación y deudas con dragones.</p>
        <button className="magic-button" onClick={() => cambiarPestana('objetos')}>Ver Catálogo</button>
      </div>
    </div>
  );
}