// src/components/XSS.tsx
import xssImg from '../img/xss_munmar.png';

export const XSS = () => {
  return (
    <div>
      <h2 className="section-title">💻 Vulnerabilidad: Cross-Site Scripting (XSS) Reflejado</h2>

      {/* EVIDENCIA */}
      <div className="evidence-box">
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-dim)', marginBottom: 8 }}>
              Evidencia del Ataque
            </div>
            <div className="info-row">
              <span className="info-label">Módulo DVWA</span>
              <span className="info-value">XSS (Reflected)</span>
            </div>
            <div className="info-row">
              <span className="info-label">Payload</span>
              <span><code className="payload-tag">{'<script>alert(\'XSS\')</script>'}</code></span>
            </div>
            <div className="info-row">
              <span className="info-label">Resultado</span>
              <span className="info-value">Ejecución de JavaScript en el navegador de la víctima</span>
            </div>
          </div>
        </div>
        <img src={xssImg} alt="Captura DVWA — XSS Reflejado ejecutando alert('XSS') en el navegador" />
        <p className="evidence-caption">
          Fig. 2 — DVWA XSS Reflected: el payload <code>{'<script>alert(\'XSS\')</script>'}</code> es
          reflejado sin sanitizar por el servidor y ejecutado como JavaScript por el navegador,
          mostrando la alerta "XSS" desde el dominio dvwa-dnwe.onrender.com.
        </p>
      </div>

      {/* EXPLICACIÓN TÉCNICA */}
      <h3 className="sub-title">Explicación Técnica</h3>
      <div className="card">
        <p style={{ color: 'var(--text)', fontSize: 14, lineHeight: 1.7 }}>
          El XSS Reflejado ocurre cuando la aplicación recibe datos del usuario y los{' '}
          <strong style={{ color: 'var(--text-head)' }}>incluye directamente en la respuesta HTML</strong>{' '}
          sin aplicar codificación. El navegador de la víctima asume erróneamente que el código
          es parte legítima de la página y lo ejecuta.
        </p>
        <div className="code-block">
          <span style={{ color: '#8b949e' }}>{/* Entrada vulnerable del usuario: */}</span>
          <br />
          nombre = <span style={{ color: '#a5d6ff' }}>"{'<script>alert(\'XSS\')</script>'}"</span>
          <br /><br />
          <span style={{ color: '#8b949e' }}>{/* Respuesta del servidor sin sanitizar: */}</span>
          <br />
          {'<p>Hola, <script>alert(\'XSS\')</script>!</p>'}
          <br />
          <span style={{ color: '#8b949e' }}>{'// → El navegador ejecuta el <script> como código válido'}</span>
        </div>
        <div className="alert-box warning" style={{ marginTop: 14 }}>
          <span className="alert-icon">⚠️</span>
          <div>
            <strong>Impacto en Terranova:</strong> Un atacante puede crear un enlace con el payload
            incrustado y enviárselo a clientes simulando ser una "Oferta de descuento". Si la víctima
            tiene sesión activa, el script roba su cookie (<em>Session Hijacking</em>), permitiendo
            suplantar su identidad, alterar datos bancarios o desviar fondos de reservas.
          </div>
        </div>
      </div>

      {/* CVSS */}
      <h3 className="sub-title">Puntuación CVSS v3.1</h3>
      <div className="cvss-block">
        <div style={{ textAlign: 'center' }}>
          <div className="cvss-score medium">6.1</div>
          <div className="cvss-label" style={{ marginTop: 4 }}>MEDIO</div>
        </div>
        <div className="cvss-desc">
          <div className="cvss-vector">CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N</div>
          <div style={{ marginTop: 10, fontSize: 13, color: 'var(--text)', lineHeight: 1.65 }}>
            <strong style={{ color: 'var(--text-head)' }}>AV:N</strong> — Acceso remoto · {' '}
            <strong style={{ color: 'var(--text-head)' }}>UI:R</strong> — Requiere que la víctima haga clic · {' '}
            <strong style={{ color: 'var(--text-head)' }}>S:C</strong> — Alcance cruzado (navegador) · {' '}
            <strong style={{ color: 'var(--text-head)' }}>C:L / I:L</strong> — Impacto limitado a la sesión del usuario
          </div>
        </div>
      </div>

      {/* DEFENSA */}
      <h3 className="sub-title">Estrategia de Defensa</h3>
      <div className="defense-grid">
        <div className="defense-card prevention">
          <h4>🛡️ Política de Prevención</h4>
          <p>
            <strong>Codificación de Salida (Output Encoding):</strong> Todo dato dinámico reflejado
            en la interfaz debe codificarse antes de renderizarse. Los caracteres especiales HTML
            (<code style={{ fontSize: 11 }}>{'<, >, ", \', &'}</code>) deben transformarse en
            entidades (<code style={{ fontSize: 11 }}>{'&lt;, &gt;'}</code>) para que el navegador
            los trate como texto, no como código ejecutable.
          </p>
        </div>
        <div className="defense-card mitigation">
          <h4>🔧 Control de Mitigación</h4>
          <p>
            <strong>Atributo HttpOnly en Cookies (OWASP A03):</strong> El servidor debe configurar
            todas las cookies de autenticación con la bandera{' '}
            <code style={{ fontSize: 11 }}>HttpOnly</code>. Esto impide que JavaScript del lado
            del cliente acceda al valor de la cookie, neutralizando el robo de sesiones incluso
            si el XSS se ejecuta.
          </p>
        </div>
      </div>
    </div>
  );
};