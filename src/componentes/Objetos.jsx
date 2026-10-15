import React, { useState } from 'react';

export default function Objetos({ items, onSelectDetail, favorites, toggleFavorite }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || 
      item.name.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      item.index.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h2>🔮 Catálogo Mágico</h2>
      
      {/* Buscador optimizado para móvil */}
      <input 
        type="text" 
        className="magic-input"
        placeholder="Buscar artefacto..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filtro rápido por tipo (Palabras clave en el nombre) */}
      <div style={{ marginBottom: '15px' }}>
        <select 
          className="magic-input" 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Filtro: Todos los objetos</option>
          <option value="armor">Armaduras (Armor)</option>
          <option value="amulet">Amuletos (Amulet)</option>
          <option value="ring">Anillos (Ring)</option>
          <option value="staff">Bastones (Staff)</option>
          <option value="potion">Pociones (Potion)</option>
          <option value="shield">Escudos (Shield)</option>
        </select>
      </div>

      {/* Contador de resultados */}
      <p style={{ fontSize: '0.8rem', marginBottom: '10px', color: '#f8b229' }}>
        Mostrando {filteredItems.length} artefactos encontrados
      </p>

      {/* Lista de elementos en formato tarjeta móvil */}
      <div>
        {filteredItems.length === 0 ? (
          <div className="magic-card">
            <p>No se encontraron objetos mágicos con ese filtro.</p>
          </div>
        ) : (
          filteredItems.slice(0, 20).map(item => {
            const isFav = favorites.some(fav => fav.index === item.index);
            return (
              <div key={item.index} className="magic-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div onClick={() => onSelectDetail(item)} style={{ flex: 1, cursor: 'pointer' }}>
                  <h3 style={{ fontSize: '1rem', margin: 0 }}>✨ {item.name}</h3>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="magic-button" onClick={() => toggleFavorite(item)}>
                    {isFav ? '❤️' : '🤍'}
                  </button>
                  <button className="magic-button" onClick={() => onSelectDetail(item)}>Ver</button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}