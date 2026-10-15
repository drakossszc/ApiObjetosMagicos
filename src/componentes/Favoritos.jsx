import React from 'react';

export default function Favoritos({ favorites, toggleFavorite, onSelectDetail }) {
  return (
    <div>
      <h2>Tus Reliquias</h2>
      <p style={{ marginTop: '8px', marginBottom: '15px' }}>Artefactos guardados en tu grimorio personal offline.</p>
      
      {favorites.length === 0 ? (
        <div className="magic-card">
          <p>Aún no has seleccionado ningún artefacto como favorito.</p>
        </div>
      ) : (
        favorites.map(item => (
          <div key={item.index} className="magic-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span onClick={() => onSelectDetail(item)} style={{ cursor: 'pointer', color: '#d4af37', fontWeight: 'bold' }}>
              ✨ {item.name}
            </span>
            <button className="magic-button" onClick={() => toggleFavorite(item)}>Remover</button>
          </div>
        ))
      )}
    </div>
  );
}