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
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Menú Lateral Inmobiliario */}
      <nav style={{ width: '280px', backgroundColor: '#f8bbd0', padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', borderRight: '4px solid #f48fb1' }}>
        <h2 style={{ color: '#880e4f', textAlign: 'center' }}>🏢 Terranova</h2>
        
        <button onClick={() => setActiveTab('informeA')} style={navButtonStyle}>Auditoría de Seguridad (A)</button>
        <button onClick={() => setActiveTab('informeB')} style={navButtonStyle}>Propuesta Inmobiliaria (B)</button>
      </nav>

      {/* Área de Contenido */}
      <main style={{ flex: 1, padding: '40px', backgroundColor: '#fce4ec' }}>
        {activeTab === 'informeA' ? (
          <div>
            <h1 style={{ color: '#d81b60', textAlign: 'center' }}>Informe de Auditoría - Inmobiliaria Terranova</h1>
            <Resumen />
            <Activos />
            <section id="vulnerabilidades">
              <h2>Análisis de Vulnerabilidades</h2>
              <InyeccionSQL />
              <XSS />
              <Comandos />
            </section>
            <Matriz />
            <Controles />
            <Recuperacion />
            <Prompts />
          </div>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ color: '#d81b60' }}>Propuesta Inmobiliaria B</h1>
            <section>
              <p>Bienvenida al módulo de gestión inmobiliaria.</p>
              <p>Aquí puedes visualizar los activos y planes de expansión de Terranova.</p>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

const navButtonStyle = {
  padding: '15px',
  borderRadius: '20px',
  border: 'none',
  backgroundColor: '#ffffff',
  cursor: 'pointer',
  fontWeight: 'bold',
  color: '#d81b60',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  transition: '0.3s'
};

export default App;