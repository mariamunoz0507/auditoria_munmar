// src/App.tsx
import { useState } from 'react';
import { Resumen } from './components/resumen';
import { InyeccionSQL } from './components/inyeccionSQL';
import { XSS } from './components/XSS';
import { Comandos } from './components/comandos';
import { Activos } from './components/activos';
import { Matriz } from './components/matriz';
import { Controles } from './components/controles';
import { Recuperacion } from './components/recuperacion';
import { Prompts } from './components/prompts';
import './App.css';

type Tab = 'resumen' | 'sqli' | 'xss' | 'comandos' | 'activos' | 'matriz' | 'controles' | 'recuperacion' | 'prompts';

const navInformeA: { id: Tab; label: string; icon: string; severity?: string; sevClass?: string }[] = [
  { id: 'resumen',   label: 'Resumen Ejecutivo', icon: '📋' },
  { id: 'sqli',      label: 'Inyección SQL',      icon: '🗄️', severity: '8.2 ALTO',    sevClass: 'sev-high' },
  { id: 'xss',       label: 'XSS Reflejado',      icon: '💻', severity: '6.1 MEDIO',   sevClass: 'sev-medium' },
  { id: 'comandos',  label: 'Inyec. Comandos',    icon: '⚙️', severity: '9.8 CRÍTICO', sevClass: 'sev-critical' },
  { id: 'controles', label: 'Prevención y Mitig.', icon: '🛡️' },
  { id: 'prompts',   label: 'Bitácora de IA',     icon: '🤖' },
];

const navInformeB: { id: Tab; label: string; icon: string }[] = [
  { id: 'activos',      label: 'Inventario de Activos', icon: '📦' },
  { id: 'matriz',       label: 'Matriz de Riesgo',      icon: '📊' },
  { id: 'recuperacion', label: 'Plan DRP',              icon: '🔄' },
];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('resumen');

  const renderContent = () => {
    switch (activeTab) {
      case 'resumen':      return <Resumen />;
      case 'sqli':         return <InyeccionSQL />;
      case 'xss':          return <XSS />;
      case 'comandos':     return <Comandos />;
      case 'controles':    return <Controles />;
      case 'prompts':      return <Prompts />;
      case 'activos':      return <Activos />;
      case 'matriz':       return <Matriz />;
      case 'recuperacion': return <Recuperacion />;
      default:             return <Resumen />;
    }
  };

  const inA = navInformeA.map(n => n.id);
  const currentReport = inA.includes(activeTab) ? 'A' : 'B';

  return (
    <div className="app-shell">
      <nav className="sidebar">
        <div className="sidebar-logo">
          <div className="company">🏢 TerraNova</div>
          <div className="subtitle">Auditoría de Seguridad Web</div>
        </div>

        <div className="sidebar-badge">
          DVWA — Ambiente Controlado
        </div>

        <div className="sidebar-section-label">Informe A — Vulnerabilidades</div>
        {navInformeA.map(item => (
          <button
            key={item.id}
            className={`nav-btn ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span style={{ flex: 1 }}>{item.label}</span>
            {item.severity && (
              <span className={`nav-severity ${item.sevClass}`}>{item.severity}</span>
            )}
          </button>
        ))}

        <div className="sidebar-section-label" style={{ marginTop: 8 }}>Informe B — Matriz de Riesgo</div>
        {navInformeB.map(item => (
          <button
            key={item.id}
            className={`nav-btn ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}

        <div className="sidebar-footer">
          <div>TI3034 — INACAP Valparaíso</div>
          <div style={{ marginTop: 4 }}>Docente: Rubén Schnettler</div>
          <div style={{ marginTop: 4, color: 'var(--accent)' }}>Otoño 2026</div>
        </div>
      </nav>

      <main className="main-content">
        <div className="page-header">
          <div className="page-eyebrow">
            {currentReport === 'A'
              ? 'Informe A — Análisis de Vulnerabilidades Web'
              : 'Informe B — Matriz de Riesgo y Tratamiento'}
          </div>
          <div className="page-title">
            {navInformeA.find(n => n.id === activeTab)?.label ||
             navInformeB.find(n => n.id === activeTab)?.label ||
             'Resumen Ejecutivo'}
          </div>
          <div className="page-meta">
            <span>Empresa: Inmobiliaria TerraNova</span>
            <span>Plataforma: Portal Clientes Terranova Max</span>
            <span>Ambiente: DVWA</span>
          </div>
        </div>

        {renderContent()}
      </main>
    </div>
  );
}

export default App;