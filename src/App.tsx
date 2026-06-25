// src/App.tsx
import { Matriz } from './components/matriz';
import { Resumen } from './components/resumen';
import { Activos } from './components/activos';
import { InyeccionSQL } from './components/inyeccionSQL';
import { XSS } from './components/XSS';
import { Comandos } from './components/comandos';
import { Controles } from './components/controles';
import { Recuperacion } from './components/recuperacion';
import { Prompts } from './components/prompts';
import './App.css';

function App() {
  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#2c3e50' }}>Informe de Auditoría - Inmobiliaria Terranova</h1>
        <p>Portal de Seguridad y Gestión de Riesgos - Unidad 3</p>
      </header>

      <main>
        <section id="resumen" style={{ marginBottom: '40px' }}>
          <Resumen />
        </section>

        <section id="activos" style={{ marginBottom: '40px' }}>
          <Activos />
        </section>

        {/* Sección de Vulnerabilidades */}
        <section id="vulnerabilidades" style={{ marginBottom: '40px' }}>
          <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Análisis de Vulnerabilidades</h2>
          <InyeccionSQL />
          <XSS />
          <Comandos />
        </section>

        <section id="matriz" style={{ marginBottom: '40px' }}>
          <Matriz />
        </section>

        <section id="controles" style={{ marginBottom: '40px' }}>
          <Controles />
        </section>

        <section id="recuperacion" style={{ marginBottom: '40px' }}>
          <Recuperacion />
        </section>

        <section id="prompts" style={{ marginBottom: '40px' }}>
          <Prompts />
        </section>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '50px', fontSize: '0.8em', color: '#7f8c8d' }}>
        <p>Proyecto de Fundamentos de Seguridad de la Información - INACAP Valparaíso</p>
      </footer>
    </div>
  );
}

export default App;
