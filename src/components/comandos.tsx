// src/components/comandos.tsx
import comandosImg from '../img/comandos_munmar.png';

export const Comandos = () => {
  return (
    <div>
      <h2 className="section-title">⚙️ Vulnerabilidad: Inyección de Comandos</h2>

      {/* EVIDENCIA */}
      <div className="evidence-box">
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-dim)', marginBottom: 8 }}>
              Evidencia del Ataque
            </div>
            <div className="info-row">
              <span className="info-label">Módulo DVWA</span>
              <span className="info-value">Command Injection</span>
            </div>
            <div className="info-row">
              <span className="info-label">Payload</span>
              <span><code className="payload-tag">127.0.0.1; cat /etc/passwd</code></span>
            </div>
            <div className="info-row">
              <span className="info-label">Resultado</span>
              <span className="info-value">Lectura del archivo /etc/passwd — control total del servidor</span>
            </div>
          </div>
        </div>
        <img src={comandosImg} alt="Captura DVWA — Command Injection exponiendo /etc/passwd" />
        <p className="evidence-caption">
          Fig. 3 — DVWA Command Injection: el payload <code>127.0.0.1; cat /etc/passwd</code> concatena
          un segundo comando al ping legítimo, exponiendo el archivo de usuarios del sistema operativo
          del servidor (root, daemon, www-data, mysql, etc.).
        </p>
      </div>

      {/* EXPLICACIÓN TÉCNICA */}
      <h3 className="sub-title">Explicación Técnica</h3>
      <div className="card">
        <p style={{ color: 'var(--text)', fontSize: 14, lineHeight: 1.7 }}>
          Esta vulnerabilidad ocurre cuando la aplicación necesita ejecutar una operación del sistema
          operativo (como un <em>ping</em>) y pasa los datos del usuario directamente a funciones
          del sistema como{' '}
          <code style={{ fontSize: 12, color: '#f0a070', background: '#0d1117', padding: '1px 6px', borderRadius: 3 }}>exec()</code>{' '}
          o{' '}
          <code style={{ fontSize: 12, color: '#f0a070', background: '#0d1117', padding: '1px 6px', borderRadius: 3 }}>shell_exec()</code>{' '}
          sin validación.
        </p>
        <div className="code-block">
          <span style={{ color: '#8b949e' }}># Código vulnerable en PHP:</span>
          <br />
          $cmd = <span style={{ color: '#a5d6ff' }}>"ping -c 1 "</span> . <span style={{ color: '#ff7b72' }}>$_GET['ip']</span>;
          <br />
          shell_exec($cmd);
          <br /><br />
          <span style={{ color: '#8b949e' }}># Con el payload inyectado:</span>
          <br />
          ping -c 1 <span style={{ color: '#a5d6ff' }}>127.0.0.1</span>
          <span style={{ color: '#ff7b72' }}>; cat /etc/passwd</span>
          <br />
          <span style={{ color: '#8b949e' }}># El ';' encadena un segundo comando arbitrario</span>
        </div>
        <div className="alert-box danger" style={{ marginTop: 14 }}>
          <span className="alert-icon">🚨</span>
          <div>
            <strong>Impacto en Terranova (Escenario Catastrófico):</strong> El atacante obtiene
            control total del servidor web. Puede robar promesas de compraventa digitalizadas,
            escrituras en PDF y planos de ingeniería. También puede utilizar el servidor como
            punto de pivoteo para inyectar <strong>Ransomware</strong> en la red corporativa,
            paralizando por completo la gestión de ventas y la firma de escrituras a nivel nacional.
          </div>
        </div>
      </div>

      {/* CVSS */}
      <h3 className="sub-title">Puntuación CVSS v3.1</h3>
      <div className="cvss-block">
        <div style={{ textAlign: 'center' }}>
          <div className="cvss-score critical">9.8</div>
          <div className="cvss-label" style={{ marginTop: 4 }}>CRÍTICO</div>
        </div>
        <div className="cvss-desc">
          <div className="cvss-vector">CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</div>
          <div style={{ marginTop: 10, fontSize: 13, color: 'var(--text)', lineHeight: 1.65 }}>
            <strong style={{ color: 'var(--text-head)' }}>AV:N</strong> — Acceso remoto total · {' '}
            <strong style={{ color: 'var(--text-head)' }}>AC:L</strong> — Baja complejidad técnica · {' '}
            <strong style={{ color: 'var(--text-head)' }}>PR:N</strong> — Sin autenticación · {' '}
            <strong style={{ color: 'var(--text-head)' }}>C:H / I:H / A:H</strong> — Confidencialidad,
            Integridad y Disponibilidad totalmente comprometidas
          </div>
        </div>
      </div>

      {/* DEFENSA */}
      <h3 className="sub-title">Estrategia de Defensa</h3>
      <div className="defense-grid">
        <div className="defense-card prevention">
          <h4>🛡️ Política de Prevención</h4>
          <p>
            <strong>Prohibición de llamadas al SO:</strong> Se prohíbe el uso de funciones que
            interactúen directamente con el intérprete de comandos del sistema operativo. Si se
            requieren operaciones de red o archivos, los desarrolladores deben usar exclusivamente
            las <strong>APIs nativas seguras</strong> del lenguaje, que no invocan un shell del sistema.
          </p>
        </div>
        <div className="defense-card mitigation">
          <h4>🔧 Control de Mitigación</h4>
          <p>
            <strong>Aislamiento y Privilegios Mínimos (CIS Control 4):</strong> El servicio web
            debe ejecutarse bajo un usuario del SO con permisos restrictivos (ej.{' '}
            <code style={{ fontSize: 11 }}>www-data</code>) y dentro de un entorno contenedorizado
            (Docker/Chroot). Si el atacante inyecta comandos, queda atrapado en el contenedor sin
            poder afectar la infraestructura central de Terranova.
          </p>
        </div>
      </div>
    </div>
  );
};