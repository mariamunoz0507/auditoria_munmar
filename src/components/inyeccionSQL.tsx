// src/components/inyeccionSQL.tsx
import sqliImg from '../img/sqli_munmar.png';

export const InyeccionSQL = () => {
  return (
    <div>
      <h2 className="section-title">🗄️ Vulnerabilidad: Inyección SQL (SQLi)</h2>

      {/* EVIDENCIA */}
      <div className="evidence-box">
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-dim)', marginBottom: 8 }}>
              Evidencia del Ataque
            </div>
            <div className="info-row">
              <span className="info-label">Módulo DVWA</span>
              <span className="info-value">SQL Injection</span>
            </div>
            <div className="info-row">
              <span className="info-label">Payload</span>
              <span><code className="payload-tag">' OR '1'='1</code></span>
            </div>
            <div className="info-row">
              <span className="info-label">Resultado</span>
              <span className="info-value">Exposición completa de la base de datos de clientes</span>
            </div>
          </div>
        </div>
        <img src={sqliImg} alt="Captura DVWA — SQL Injection con payload ' OR '1'='1 exponiendo todos los registros" />
        <p className="evidence-caption">
          Fig. 1 — DVWA SQL Injection: el payload <code>' OR '1'='1</code> retorna todos los
          registros de la tabla de usuarios, incluyendo admin, Gordon Brown, Pablo Picasso y Bob Smith.
        </p>
      </div>

      {/* EXPLICACIÓN TÉCNICA */}
      <h3 className="sub-title">Explicación Técnica</h3>
      <div className="card">
        <p style={{ color: 'var(--text)', fontSize: 14, lineHeight: 1.7 }}>
          Esta vulnerabilidad ocurre porque la aplicación recibe los datos ingresados por el usuario
          y los <strong style={{ color: 'var(--text-head)' }}>concatena directamente</strong> dentro
          de una consulta SQL sin validación previa. La consulta original es del tipo:
        </p>
        <div className="code-block">
          SELECT * FROM users WHERE id = '<span style={{ color: '#ff7b72' }}>ENTRADA_USUARIO</span>';
        </div>
        <p style={{ color: 'var(--text)', fontSize: 14, lineHeight: 1.7, marginTop: 12 }}>
          Al inyectar <code className="payload-tag">' OR '1'='1</code>, el atacante cierra
          prematuramente la cadena original y añade una condición siempre verdadera. La consulta
          resultante ignora el filtro <code style={{ color: '#79c0ff', background: '#0d1117', padding: '2px 6px', borderRadius: 3 }}>WHERE</code> y devuelve todos los registros:
        </p>
        <div className="code-block">
          SELECT * FROM users WHERE id = '<span style={{ color: '#ff7b72' }}>' OR '1'='1</span>';
          <br />
          <span style={{ color: '#8b949e' }}>-- equivale a: WHERE (id = '') OR (1=1) → siempre TRUE</span>
        </div>
        <div className="alert-box danger" style={{ marginTop: 14 }}>
          <span className="alert-icon">⚠️</span>
          <div>
            <strong>Impacto en Terranova:</strong> Un atacante podría extraer RUT, contraseñas
            hasheadas, correos, liquidaciones de sueldo y montos de pre-aprobaciones hipotecarias
            de miles de clientes. Esto conllevaría multas por incumplimiento de protección de datos
            y daño reputacional irreversible.
          </div>
        </div>
      </div>

      {/* CVSS */}
      <h3 className="sub-title">Puntuación CVSS v3.1</h3>
      <div className="cvss-block">
        <div style={{ textAlign: 'center' }}>
          <div className="cvss-score high">8.2</div>
          <div className="cvss-label" style={{ marginTop: 4 }}>ALTO</div>
        </div>
        <div className="cvss-desc">
          <div className="cvss-vector">CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:L/A:N</div>
          <div style={{ marginTop: 10, fontSize: 13, color: 'var(--text)', lineHeight: 1.65 }}>
            <strong style={{ color: 'var(--text-head)' }}>AV:N</strong> — Acceso vía red · {' '}
            <strong style={{ color: 'var(--text-head)' }}>AC:L</strong> — Baja complejidad · {' '}
            <strong style={{ color: 'var(--text-head)' }}>PR:N</strong> — Sin credenciales · {' '}
            <strong style={{ color: 'var(--text-head)' }}>UI:N</strong> — Sin interacción de víctima · {' '}
            <strong style={{ color: 'var(--text-head)' }}>C:H</strong> — Confidencialidad totalmente comprometida
          </div>
        </div>
      </div>

      {/* DEFENSA */}
      <h3 className="sub-title">Estrategia de Defensa</h3>
      <div className="defense-grid">
        <div className="defense-card prevention">
          <h4>🛡️ Política de Prevención</h4>
          <p>
            <strong>Consultas Parametrizadas (Prepared Statements):</strong> Queda prohibida la
            concatenación directa de variables en código SQL. Toda consulta debe usar sentencias
            preparadas que separan estrictamente el código ejecutable de los datos del usuario,
            eliminando la causa raíz de la vulnerabilidad.
          </p>
        </div>
        <div className="defense-card mitigation">
          <h4>🔧 Control de Mitigación</h4>
          <p>
            <strong>Principio de Menor Privilegio (OWASP A05):</strong> La cuenta de servicio
            que conecta el portal a la BD debe operar solo con permisos básicos
            (<code style={{ fontSize: 11 }}>SELECT, INSERT, UPDATE</code>) sobre tablas necesarias.
            Nunca con privilegios de administrador (<code style={{ fontSize: 11 }}>root/sa</code>).
          </p>
        </div>
      </div>
    </div>
  );
};