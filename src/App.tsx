// src/App.tsx
import { useState } from 'react';
import { Resumen } from './components/resumen';
import { Activos } from './components/activos';
import { InyeccionSQL } from './components/inyeccionSQL';
import { XSS } from './components/XSS';
import { Comandos } from './components/comandos';
import { Controles } from './components/controles';
import { Recuperacion } from './components/recuperacion';
import { Prompts } from './components/prompts';
import { Matriz } from './components/matriz';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('informeA');

  return (
    <div className="app-container">
      <nav className="sidebar">
        <h2 style={{ color: '#880e4f' }}>🏢 Terranova</h2>
        <button onClick={() => setActiveTab('informeA')}>Auditoría (A)</button>
        <button onClick={() => setActiveTab('informeB')}>Matriz (B)</button>
      </nav>

      <main className="content">
        {activeTab === 'informeA' ? (
          <div>
            <h1>Informe de Vulnerabilidades (A)</h1>
            <Resumen />
            <Activos />
            <InyeccionSQL />
            <XSS />
            <Comandos />
            <Controles />
            <Recuperacion />
            <Prompts />
          </div>
        ) : (
          <div>
            <h1>Informe de Matriz (B)</h1>
            <Matriz />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;