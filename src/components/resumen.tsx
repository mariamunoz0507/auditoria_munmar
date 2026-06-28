// src/components/resumen.tsx
export const Resumen = () => {
  return (
    <div>
      <div className="summary-header">
        <h1>🏢 Inmobiliaria TerraNova S.A.</h1>
        <p>
          Inmobiliaria Terranova es una empresa líder en el rubro de la construcción y venta de
          departamentos y casas. Su modelo de negocio no solo abarca la venta física de propiedades,
          sino que actúa como intermediario financiero, gestionando créditos hipotecarios directos,
          evaluación de antecedentes comerciales y procesamiento de pagos de reservas.
        </p>
        <div className="meta-grid">
          <div className="meta-item">
            <div className="meta-key">Empresa</div>
            <div className="meta-val">Inmobiliaria TerraNova</div>
          </div>
          <div className="meta-item">
            <div className="meta-key">Rubro</div>
            <div className="meta-val">Inmobiliario / Construcción</div>
          </div>
          <div className="meta-item">
            <div className="meta-key">Sistema Auditado</div>
            <div className="meta-val">Portal Clientes Terranova Max</div>
          </div>
          <div className="meta-item">
            <div className="meta-key">Ambiente</div>
            <div className="meta-val">DVWA (Controlado)</div>
          </div>
          <div className="meta-item">
            <div className="meta-key">Auditor</div>
            <div className="meta-val">MunMar — INACAP Valparaíso</div>
          </div>
          <div className="meta-item">
            <div className="meta-key">Período</div>
            <div className="meta-val">Otoño 2026</div>
          </div>
        </div>
      </div>

      <h2 className="section-title">📋 Resumen Ejecutivo</h2>

      <div className="card">
        <div className="card-title">Plataforma Auditada</div>
        <p style={{ color: 'var(--text)', fontSize: 14, lineHeight: 1.7 }}>
          La presente auditoría se enfoca en el{' '}
          <strong style={{ color: 'var(--text-head)' }}>Portal Clientes Terranova Max</strong>,
          canal principal de interacción entre compradores e inmobiliaria. La plataforma permite
          a usuarios registrados realizar acciones críticas de negocio:
        </p>
        <ul style={{ marginTop: 14, paddingLeft: 22, color: 'var(--text)', fontSize: 14, lineHeight: 2 }}>
          <li>
            <strong style={{ color: 'var(--text-head)' }}>Gestión Documental:</strong> Carga de
            liquidaciones de sueldo, certificados de cotizaciones y autorizaciones de revisión Dicom.
          </li>
          <li>
            <strong style={{ color: 'var(--text-head)' }}>Gestión Financiera:</strong> Procesamiento
            de pagos de reservas e integración con pasarelas de pago.
          </li>
          <li>
            <strong style={{ color: 'var(--text-head)' }}>Seguimiento de Proyectos:</strong> Planos
            digitales, avances de obras y promesas de compraventa.
          </li>
        </ul>
      </div>

      <div className="card">
        <div className="card-title">Objetivo y Alcance</div>
        <p style={{ color: 'var(--text)', fontSize: 14, lineHeight: 1.7 }}>
          El objetivo es evaluar la resiliencia del portal frente a vectores de ataque web comunes,
          identificando vulnerabilidades críticas que podrían comprometer la{' '}
          <strong style={{ color: 'var(--text-head)' }}>
            confidencialidad, integridad y disponibilidad
          </strong>{' '}
          de la infraestructura y datos de la inmobiliaria.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 18 }}>
          {[
            { label: 'SQL Injection',     icon: '🗄️', color: '#e67e22' },
            { label: 'XSS Reflejado',     icon: '💻', color: '#f39c12' },
            { label: 'Command Injection', icon: '⚙️', color: '#e74c3c' },
          ].map(a => (
            <div key={a.label} style={{
              background: 'var(--bg-card2)',
              border: '1px solid var(--border)',
              borderTop: `3px solid ${a.color}`,
              borderRadius: 6,
              padding: '14px 16px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 24 }}>{a.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-head)', marginTop: 6 }}>
                {a.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="alert-box info">
        <span className="alert-icon">ℹ️</span>
        <div>
          <strong>Marco Ético-Legal:</strong> Todos los ataques se ejecutaron exclusivamente en el
          entorno controlado DVWA, autorizado para la actividad académica. Atacar sistemas ajenos
          sin permiso es delito conforme a la <strong>Ley 21.459</strong>. Estas técnicas se
          aplican con fines defensivos.
        </div>
      </div>
    </div>
  );
};