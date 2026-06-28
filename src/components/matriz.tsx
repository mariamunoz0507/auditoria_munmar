// src/components/matriz.tsx

const riesgos = [
  {
    id: 'R-01',
    vuln: 'Inyección de Comandos',
    activo: 'ACT-03 / ACT-02',
    p: 4,
    i: 5,
    score: 20,
    nivel: 'Crítico',
    prioridad: '1° — Inmediata',
    justificacion: 'Si el servidor web es comprometido, el atacante puede deshabilitar toda la plataforma, inyectar Ransomware y paralizar la gestión de ventas y entregas de viviendas a nivel nacional.',
  },
  {
    id: 'R-02',
    vuln: 'Inyección SQL (SQLi)',
    activo: 'ACT-01',
    p: 4,
    i: 4,
    score: 16,
    nivel: 'Alto',
    prioridad: '2° — Alta',
    justificacion: 'Compromete directamente la confidencialidad de la BD. La fuga de datos financieros acarrearía multas de entes reguladores y pérdida total de confianza de los compradores.',
  },
  {
    id: 'R-03',
    vuln: 'XSS Reflejado',
    activo: 'ACT-04',
    p: 3,
    i: 3,
    score: 9,
    nivel: 'Medio',
    prioridad: '3° — Media',
    justificacion: 'Impacto acotado a usuarios individuales. Requiere ingeniería social (que la víctima haga clic en un enlace malicioso) para lograr secuestrar una sesión específica.',
  },
];

const nivelColor: Record<string, string> = {
  Crítico: '#e74c3c',
  Alto:    '#e67e22',
  Medio:   '#f39c12',
};

const nivelClass: Record<string, string> = {
  Crítico: 'critical',
  Alto:    'high',
  Medio:   'medium',
};

type CellDot = { id: string; label: string } | null;

function getHeatClass(p: number, i: number): string {
  const score = p * i;
  if (score >= 20) return 'hm-critical';
  if (score >= 12) return 'hm-high';
  if (score >= 6)  return 'hm-medium';
  return 'hm-low';
}

function getDotForCell(p: number, i: number): CellDot {
  if (p === 4 && i === 5) return { id: 'R-01', label: 'R01' };
  if (p === 4 && i === 4) return { id: 'R-02', label: 'R02' };
  if (p === 3 && i === 3) return { id: 'R-03', label: 'R03' };
  return null;
}

export const Matriz = () => {
  return (
    <div>
      <h2 className="section-title">📊 Matriz de Riesgo y Priorización</h2>

      {/* CRITERIOS */}
      <div className="card">
        <div className="card-title">Criterios de Evaluación</div>
        <p style={{ color: 'var(--text)', fontSize: 14, lineHeight: 1.7 }}>
          Para cuantificar el riesgo de negocio en Inmobiliaria Terranova, se utiliza una escala
          del 1 al 5 para <strong style={{ color: 'var(--text-head)' }}>Probabilidad</strong> e{' '}
          <strong style={{ color: 'var(--text-head)' }}>Impacto</strong>. El riesgo resultante
          se calcula como:
        </p>
        <div className="code-block" style={{ marginTop: 14, textAlign: 'center', fontSize: 16, color: 'var(--text-head)' }}>
          Riesgo (R) = Probabilidad (P) × Impacto (I)
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginTop: 16 }}>
          {[
            { label: 'Bajo',    range: '1 – 5',   color: '#27ae60' },
            { label: 'Medio',   range: '6 – 11',  color: '#f39c12' },
            { label: 'Alto',    range: '12 – 19', color: '#e67e22' },
            { label: 'Crítico', range: '20 – 25', color: '#e74c3c' },
          ].map(n => (
            <div key={n.label} style={{
              background: 'var(--bg-card2)',
              border: `1px solid ${n.color}`,
              borderRadius: 6,
              padding: '10px 14px',
              textAlign: 'center',
            }}>
              <div style={{ fontWeight: 800, color: n.color, fontSize: 14 }}>{n.label}</div>
              <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 4 }}>{n.range}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TABLA DE RIESGO */}
      <h3 className="sub-title">Tabla de Riesgos Identificados</h3>
      <table className="risk-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vulnerabilidad</th>
            <th>Activo Afectado</th>
            <th>Prob. (P)</th>
            <th>Impacto (I)</th>
            <th>Score (P×I)</th>
            <th>Nivel</th>
            <th>Prioridad</th>
          </tr>
        </thead>
        <tbody>
          {riesgos.map(r => (
            <tr key={r.id} className={`risk-${nivelClass[r.nivel]}`}>
              <td style={{ fontFamily: 'var(--mono)', fontWeight: 700, color: 'var(--text-head)' }}>{r.id}</td>
              <td style={{ textAlign: 'left', fontWeight: 600 }}>{r.vuln}</td>
              <td style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-dim)' }}>{r.activo}</td>
              <td>{r.p}</td>
              <td>{r.i}</td>
              <td style={{ fontWeight: 900, fontSize: 16 }}>{r.score}</td>
              <td>
                <span className={`risk-badge ${nivelClass[r.nivel]}`}>
                  {r.nivel === 'Crítico' ? '🔴' : r.nivel === 'Alto' ? '🟠' : '🟡'} {r.nivel}
                </span>
              </td>
              <td style={{ fontSize: 11, fontWeight: 700, color: nivelColor[r.nivel] }}>{r.prioridad}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MAPA DE CALOR */}
      <h3 className="sub-title" style={{ marginTop: 28 }}>Mapa de Calor — Probabilidad × Impacto</h3>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div>
          <div style={{ marginBottom: 8 }}>
            <span style={{ fontSize: 11, color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
              ↑ Probabilidad
            </span>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '32px repeat(5, 52px)',
            gridTemplateRows: 'repeat(5, 52px) 32px',
            gap: 3,
          }}>
            {[5, 4, 3, 2, 1].flatMap(p => [
              <div key={`py-${p}`} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 700, color: 'var(--text-dim)',
              }}>{p}</div>,
              ...[1, 2, 3, 4, 5].map(i => {
                const dot = getDotForCell(p, i);
                return (
                  <div key={`${p}-${i}`} className={`hm-cell ${getHeatClass(p, i)}`}>
                    <span style={{ fontSize: 10, opacity: 0.5 }}>{p * i}</span>
                    {dot && (
                      <div className="hm-dot" title={dot.id}>{dot.label.slice(-3)}</div>
                    )}
                  </div>
                );
              }),
            ])}
            <div></div>
            {[1, 2, 3, 4, 5].map(i => (
              <div key={`xi-${i}`} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 700, color: 'var(--text-dim)',
              }}>{i}</div>
            ))}
          </div>
          <div style={{
            fontSize: 11, color: 'var(--text-dim)', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: 1,
            marginTop: 6, textAlign: 'center',
          }}>
            Impacto →
          </div>
        </div>

        {/* LEYENDA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 40 }}>
          {[
            { cls: 'hm-critical', label: 'Crítico (20–25)', desc: 'Atención inmediata' },
            { cls: 'hm-high',     label: 'Alto (12–19)',    desc: 'Atención urgente' },
            { cls: 'hm-medium',   label: 'Medio (6–11)',    desc: 'Monitorear' },
            { cls: 'hm-low',      label: 'Bajo (1–5)',      desc: 'Riesgo aceptable' },
          ].map(l => (
            <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className={`hm-cell ${l.cls}`} style={{
                width: 28, height: 28, minHeight: 'unset', borderRadius: 4, flex: 'none',
              }}></div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-head)' }}>{l.label}</div>
                <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>{l.desc}</div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 10, borderTop: '1px solid var(--border)', paddingTop: 10 }}>
            {riesgos.map(r => (
              <div key={r.id} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <div style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: 'white', color: '#000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 9, fontWeight: 900, flexShrink: 0,
                }}>
                  {r.id.slice(-2)}
                </div>
                <span style={{ fontSize: 12, color: 'var(--text)' }}>{r.vuln}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRIORIZACIÓN */}
      <h3 className="sub-title" style={{ marginTop: 28 }}>Justificación de la Priorización</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {riesgos.map((r, idx) => (
          <div key={r.id} style={{
            background: 'var(--bg-card2)',
            border: '1px solid var(--border)',
            borderLeft: `4px solid ${nivelColor[r.nivel]}`,
            borderRadius: 'var(--radius)',
            padding: '16px 20px',
            display: 'flex',
            gap: 16,
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: nivelColor[r.nivel],
              color: 'white', fontWeight: 900, fontSize: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>{idx + 1}</div>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-head)', fontSize: 14, marginBottom: 4 }}>
                {r.vuln} — Score:{' '}
                <span style={{ color: nivelColor[r.nivel] }}>{r.score}</span>
                <span className={`risk-badge ${nivelClass[r.nivel]}`} style={{ marginLeft: 8, fontSize: 11 }}>
                  {r.nivel}
                </span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.65 }}>{r.justificacion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};