import React from 'react';

export default function DetalleObjeto({ item, onBack }) {
  return (
    <div className="magic-card">
      <h2>{item.name}</h2>
      <p style={{ marginTop: '10px' }}><strong>Índice del Sistema:</strong> {item.index}</p>
      <p>Este poderoso artefacto emana una energía mística inexplicable directamente desde los servidores de D&D. Manipular con precaución en entornos móviles.</p>
      <button className="magic-button" style={{ marginTop: '10px' }} onClick={onBack}>🔙 Volver al catálogo</button>
    </div>
  );
}