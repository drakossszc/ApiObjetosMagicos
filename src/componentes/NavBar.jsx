import React from 'react';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="nav-bar">
      <button className={`nav-item ${activeTab === 'inicio' ? 'active' : ''}`} onClick={() => setActiveTab('inicio')}>
        <span className="icon">🏠</span>
        <span>Inicio</span>
      </button>
      <button className={`nav-item ${activeTab === 'objetos' ? 'active' : ''}`} onClick={() => setActiveTab('objetos')}>
        <span className="icon">🎒</span>
        <span>Objetos</span>
      </button>
      <button className={`nav-item ${activeTab === 'favoritos' ? 'active' : ''}`} onClick={() => setActiveTab('favoritos')}>
        <span className="icon">⭐</span>
        <span>Favoritos</span>
      </button>
      <button className={`nav-item ${activeTab === 'reglas' ? 'active' : ''}`} onClick={() => setActiveTab('reglas')}>
        <span className="icon">📖</span>
        <span>Reglas</span>
      </button>
      <button className={`nav-item ${activeTab === 'elmago' ? 'active' : ''}`} onClick={() => setActiveTab('elmago')}>
        <span className="icon">🧙‍♂️</span>
        <span>El Mago</span>
      </button>
    </nav>
  );
}