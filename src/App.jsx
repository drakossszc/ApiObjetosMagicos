import React, { useState, useEffect } from 'react';
import Inicio from './components/Inicio';
import Objetos from './components/Objetos';
import DetalleObjeto from './components/DetalleObjeto';
import Favoritos from './components/Favoritos';
import Reglas from './components/Reglas';
import ElMago from './components/ElMago';
import Navbar from './components/Navbar';
import './index.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Carga de la API de D&D 5e
  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/2014/magic-items')
      .then(res => res.json())
      .then(data => setItems(data.results))
      .catch(err => console.error("Error al conectar con la torre mágica:", err));
  }, []);

  const toggleFavorite = (item) => {
    if (favorites.some(fav => fav.index === item.index)) {
      setFavorites(favorites.filter(fav => fav.index !== item.index));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const handleSelectDetail = (item) => {
    setSelectedItem(item);
  };

  const handleBack = () => {
    setSelectedItem(null);
  };

  const cambiarPestana = (tab) => {
    setSelectedItem(null);
    setActiveTab(tab);
  };

  return (
    <div className="app-container">
      {/* Cabecera estilo App */}
      <header className="app-header">
        <h1>🧙‍♂️ Emporio Arcano</h1>
        <p>Edición Móvil para Android</p>
      </header>

      {/* Contenido scrolleable central */}
      <main className="content-scroll">
        {selectedItem ? (
          <DetalleObjeto item={selectedItem} onBack={handleBack} />
        ) : (
          <>
            {activeTab === 'inicio' && <Inicio cambiarPestana={cambiarPestana} />}
            {activeTab === 'objetos' && (
              <Objetos 
                items={items} 
                onSelectDetail={handleSelectDetail} 
                favorites={favorites} 
                toggleFavorite={toggleFavorite} 
              />
            )}
            {activeTab === 'favoritos' && (
              <Favoritos 
                favorites={favorites} 
                toggleFavorite={toggleFavorite} 
                onSelectDetail={handleSelectDetail} 
              />
            )}
            {activeTab === 'reglas' && <Reglas />}
            {activeTab === 'elmago' && <ElMago />}
          </>
        )}
      </main>

      {/* Barra de navegación inferior nativa */}
      <Navbar activeTab={activeTab} setActiveTab={cambiarPestana} />
    </div>
  );
}