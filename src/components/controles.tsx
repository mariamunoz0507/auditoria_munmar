// src/components/controles.tsx
export const Controles = () => {
  const politicas = [
    {
      icon: '🔒',
      title: 'Política de Desarrollo Seguro (Secure SDLC)',
      tag: 'prevention',
      tagLabel: 'Prevención',
      text: 'Integrar la seguridad desde la fase inicial de diseño del software. Todo nuevo módulo web (ej. simulador de créditos hipotecarios) debe pasar por pruebas de seguridad estáticas (SAST) y revisión de código antes de ser promovido al entorno de producción. Marco de referencia: OWASP SAMM.',
    },
    {
      icon: '🎓',
      title: 'Política de Capacitación Continua en Ciberseguridad',
      tag: 'prevention',
      tagLabel: 'Prevención',
      text: 'Establecer un programa de formación técnica anual obligatorio para analistas programadores y el equipo de TI de la inmobiliaria. El entrenamiento debe estar enfocado en las normativas del OWASP Top 10, con énfasis en prevención de inyecciones y sanitización de datos de entrada.',
    },
    {
      icon: '🪪',
      title: 'Política de Gestión de Identidades y Accesos (IAM)',
      tag: 'prevention',
      tagLabel: 'Prevención',
      text: 'Imponer el "Principio de Menor Privilegio" (CIS Control 6) por defecto en todos los entornos. Las cuentas de servicio que conectan el portal con la BD financiera y el servidor de archivos deben operar con permisos mínimos e indispensables, denegando accesos administrativos generales.',
    },
  ];

  const controles = [
    {
      icon: '🧱',
      title: 'Web Application Firewall (WAF)',
      tag: 'mitigation',
      tagLabel: 'Mitigación',
      marco: 'OWASP Top 10 — A03',
      text: "Desplegar un WAF empresarial delante del portal de clientes. Este control perimetral detectará y bloqueará automáticamente los payloads maliciosos típicos (como ' OR '1'='1, etiquetas <script>, o concatenación con ;) antes de que alcancen el servidor web.",
    },
    {
      icon: '✅',
      title: 'Validación de Entrada con Listas Blancas (Allow-listing)',
      tag: 'mitigation',
      tagLabel: 'Mitigación',
      marco: 'OWASP Input Validation — A03',
      text: 'Configurar el backend para rechazar cualquier dato que no cumpla estrictamente con el formato esperado. Ejemplo: si el campo es "RUT del Cliente", solo debe aceptar números y la letra K, bloqueando sistemáticamente caracteres especiales y metacaracteres.',
    },
    {
      icon: '🔍',
      title: 'Auditorías Periódicas y Pentesting Externo',
      tag: 'mitigation',
      tagLabel: 'Mitigación',
      marco: 'NIST CSF — Identify / Detect',
      text: 'Contratar un servicio externo de pruebas de penetración (Ethical Hacking) de manera semestral. Permite evaluar la efectividad de los controles implementados y detectar nuevas brechas en el portal antes de que cibercriminales puedan explotarlas.',
    },
  ];

  return (
    <div>
      <h2 className="section-title">🛡️ Políticas de Prevención y Controles de Mitigación</h2>

      <div className="alert-box info">
        <span className="alert-icon">📋</span>
        <div>
          Las medidas se organizan en dos niveles:{' '}
          <strong>Prevención</strong> (ataca la causa raíz, aplica en diseño y desarrollo) y{' '}
          <strong>Mitigación</strong> (controles operativos que reducen el riesgo mientras se
          parchea el código). Se referencian los marcos <strong>OWASP</strong>,{' '}
          <strong>CIS Controls</strong> y <strong>NIST CSF</strong>.
        </div>
      </div>

      <h3 className="sub-title">Políticas de Prevención (Nivel Estratégico)</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {politicas.map(p => (
          <div key={p.title} className="control-item">
            <div className="control-icon">{p.icon}</div>
            <div className="control-body">
              <span className={`control-tag tag-${p.tag}`}>{p.tagLabel}</span>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="sub-title">Controles de Mitigación (Nivel Técnico / Operativo)</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {controles.map(c => (
          <div key={c.title} className="control-item">
            <div className="control-icon">{c.icon}</div>
            <div className="control-body">
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                <span className={`control-tag tag-${c.tag}`}>{c.tagLabel}</span>
                <span style={{ fontSize: 11, color: 'var(--accent)', fontFamily: 'var(--mono)' }}>
                  {c.marco}
                </span>
              </div>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="sub-title" style={{ marginTop: 28 }}>Resumen de Controles por Vulnerabilidad</h3>
      <table className="risk-table">
        <thead>
          <tr>
            <th>Vulnerabilidad</th>
            <th>Prevención (Causa Raíz)</th>
            <th>Mitigación (Defensa Activa)</th>
            <th>Marco</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              vuln: 'Inyección SQL',
              prev: 'Consultas Parametrizadas (Prepared Statements)',
              mit: 'Menor privilegio BD + WAF',
              marco: 'OWASP A03',
              cls: 'risk-high',
            },
            {
              vuln: 'XSS Reflejado',
              prev: 'Output Encoding (entidades HTML)',
              mit: 'Cookies HttpOnly + CSP Headers',
              marco: 'OWASP A03',
              cls: 'risk-medium',
            },
            {
              vuln: 'Inyección de Comandos',
              prev: 'APIs nativas seguras (sin shell_exec)',
              mit: 'Contenedores Docker + usuario sin privilegios',
              marco: 'CIS Control 4',
              cls: 'risk-critical',
            },
          ].map(r => (
            <tr key={r.vuln} className={r.cls}>
              <td style={{ textAlign: 'left', fontWeight: 700, color: 'var(--text-head)' }}>{r.vuln}</td>
              <td style={{ textAlign: 'left', fontSize: 12 }}>{r.prev}</td>
              <td style={{ textAlign: 'left', fontSize: 12 }}>{r.mit}</td>
              <td style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)' }}>{r.marco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};