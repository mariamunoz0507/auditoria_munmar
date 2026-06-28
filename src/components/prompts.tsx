// src/components/prompts.tsx
export const Prompts = () => {
  const prompts = [
    {
      num: 1,
      seccion: '01_resumen + 05_activos',
      herramienta: 'Gemini (Google)',
      prompt: 'Debo representar a un auditor de ciberseguridad para una empresa ficticia. Elegí una inmobiliaria llamada "Terranova". Necesito que me ayudes a inventar el contexto tecnológico del negocio: qué tipo de portal web tendrían, qué datos sensibles manejarían (como créditos hipotecarios, promesas de compraventa) y cuáles serían sus activos de información más críticos para armar un informe de auditoría.',
      acepto: 'El framework de activos propuesto (BD clientes, servidor de archivos, pasarela de pagos). El nombre "Portal Clientes Terranova Max" y la inclusión de datos como liquidaciones de sueldo y escrituras, que otorgaron realismo y peso argumentativo.',
      corrigio: 'Se ajustó la descripción del activo ACT-05 (Correo Corporativo) para vincularlo específicamente al vector XSS como canal de ingeniería social, conexión que la IA no estableció de forma directa.',
    },
    {
      num: 2,
      seccion: '06_matriz',
      herramienta: 'Gemini (Google)',
      prompt: 'Basado en el portal inmobiliario "Terranova" que definimos, tengo que priorizar 3 ataques: Inyección SQL, XSS Reflejado e Inyección de Comandos. ¿Cuál representa el mayor riesgo (Probabilidad × Impacto) para la empresa y por qué? Necesito justificar el orden del más al menos crítico en términos de negocio inmobiliario.',
      acepto: 'La argumentación lógica que posiciona la Inyección de Comandos como la más catastrófica por comprometer la infraestructura completa. La estructura de la justificación fue usada directamente para construir los scores (20, 16, 9).',
      corrigio: 'Se añadió la conexión explícita entre el score de la Matriz y el puntaje CVSS de cada vulnerabilidad para cumplir con el criterio 3.1.3 de la rúbrica, que la IA no vinculó automáticamente.',
    },
  ];

  return (
    <div>
      <h2 className="section-title">🤖 Bitácora de Uso de Inteligencia Artificial</h2>

      <div className="card">
        <div className="card-title">Herramienta Utilizada</div>
        <div className="info-row">
          <span className="info-label">Plataforma IA</span>
          <span className="info-value">Gemini (Google)</span>
        </div>
        <div className="info-row">
          <span className="info-label">Propósito General</span>
          <span className="info-value">
            Asistencia en la contextualización de vulnerabilidades técnicas (laboratorio DVWA)
            hacia un escenario de negocio realista (Inmobiliaria Terranova), redacción estructurada
            en Markdown y generación de componentes React.
          </span>
        </div>
      </div>

      <h3 className="sub-title">Registro de Prompts Destacados</h3>
      {prompts.map(p => (
        <div key={p.num} className="prompt-card">
          <div className="prompt-meta">
            <span className="prompt-number">Prompt {p.num}</span>
            <span className="prompt-section-tag">📄 {p.seccion}</span>
            <span className="prompt-section-tag">🤖 {p.herramienta}</span>
          </div>
          <div className="prompt-text">"{p.prompt}"</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
            <div style={{
              background: 'rgba(39,174,96,0.08)',
              border: '1px solid rgba(39,174,96,0.3)',
              borderRadius: 6,
              padding: '10px 14px',
            }}>
              <div style={{
                fontSize: 11, fontWeight: 700, color: '#27ae60',
                textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6,
              }}>✅ Acepté</div>
              <p className="prompt-analysis">{p.acepto}</p>
            </div>
            <div style={{
              background: 'rgba(243,156,18,0.08)',
              border: '1px solid rgba(243,156,18,0.3)',
              borderRadius: 6,
              padding: '10px 14px',
            }}>
              <div style={{
                fontSize: 11, fontWeight: 700, color: '#f39c12',
                textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6,
              }}>✏️ Corregí</div>
              <p className="prompt-analysis">{p.corrigio}</p>
            </div>
          </div>
        </div>
      ))}

      <h3 className="sub-title">Reflexión Final</h3>
      <div className="card">
        <p style={{ color: 'var(--text)', fontSize: 14, lineHeight: 1.75 }}>
          La inteligencia artificial demostró ser una herramienta invaluable en este proyecto,
          operando como un agente de <em>brainstorming</em> dirigido. Permitió acortar la brecha
          entre el conocimiento técnico de hacking (la explotación de payloads en DVWA) y la
          visión estratégica de negocio requerida en una auditoría profesional.
        </p>
        <p style={{ color: 'var(--text)', fontSize: 14, lineHeight: 1.75, marginTop: 12 }}>
          La formulación de{' '}
          <strong style={{ color: 'var(--text-head)' }}>prompts detallados</strong>{' '}
          —especificando el rubro inmobiliario, los activos concretos y los resultados esperados—
          fue clave para obtener respuestas estructuradas y alineadas con los criterios de
          evaluación. En contraste, los prompts genéricos producían respuestas superficiales
          que requerían múltiples iteraciones de corrección.
        </p>
        <div className="alert-box info" style={{ marginTop: 16 }}>
          <span className="alert-icon">💡</span>
          <div>
            La <strong>responsabilidad técnica</strong> sigue siendo del auditor: la IA puede
            generar análisis incorrectos o incompletos. En este proyecto se revisó, corrigió y
            complementó cada respuesta antes de integrarla al informe final.
          </div>
        </div>
      </div>
    </div>
  );
};