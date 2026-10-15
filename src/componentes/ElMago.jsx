import React from 'react';
import magoImg from '../assets/magovendedor.jpg'; 

export default function ElMago() {
  return (
    <div>
      <h2>Sobre el Conocedor de la Magia</h2>
      <div className="magic-card" style={{ textAlign: 'center' }}>
        <img 
          src={magoImg} 
          alt="Ignis el Gris" 
          style={{ width: '100px', height: '100px', borderRadius: '0px', border: '3px solid #f8b229', marginBottom: '10px', objectFit: 'cover', imageRendering: 'pixelated' }} 
        />
        <p>Saludos, valiente viajero. Opero esta tienda conectando directamente con los servidores de D&D para equiparte con los mejores artefactos del reino en tu dispositivo Android.</p>
      </div>
    </div>
  );
}