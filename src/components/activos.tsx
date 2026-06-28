// src/components/activos.tsx
export const Activos = () => {
  const activos = [
    {
      id: 'ACT-01',
      nombre: 'Base de Datos de Clientes',
      tecnologia: 'SQL Server',
      descripcion: 'Registros de usuarios, RUT, correos, contraseñas, historial de navegación por proyectos habitacionales y datos confidenciales de pre-evaluación financiera (liquidaciones de sueldo y deudas).',
      vulnerabilidad: 'Inyección SQL (SQLi)',
      riesgo: 'Filtración masiva de datos financieros y personales',
      nivel: 'Crítico',
    },
    {
      id: 'ACT-02',
      nombre: 'Servidor de Almacenamiento de Archivos',
      tecnologia: 'File Server',
      descripcion: 'Repositorio digital con copias en PDF de certificados de cotizaciones, escrituras de propiedades, promesas de compraventa firmadas y planos arquitectónicos técnicos de proyectos en construcción.',
      vulnerabilidad: 'Inyección de Comandos',
      riesgo: 'Espionaje industrial, fuga de planos y secuestro por Ransomware',
      nivel: 'Crítico',
    },
    {
      id: 'ACT-03',
      nombre: 'Servidor Web de la Aplicación',
      tecnologia: 'Infraestructura Core',
      descripcion: 'Servidor físico o virtual que ejecuta la aplicación en producción. Procesa peticiones de usuarios, despliega el portal web y conecta con los sistemas internos de la inmobiliaria.',
      vulnerabilidad: 'Inyección de Comandos',
      riesgo: 'Compromiso total de la infraestructura, Ransomware, pivoteo a red interna',
      nivel: 'Crítico',
    },
    {
      id: 'ACT-04',
      nombre: 'API de Pasarela de Pagos',
      tecnologia: 'REST API',
      descripcion: 'Componente de software que tokeniza y procesa transacciones financieras para el pago de reservas de inmuebles y cuotas de pies mediante tarjetas de crédito o débito.',
      vulnerabilidad: 'XSS Reflejado',
      riesgo: 'Fraude transaccional y suplantación de identidad en pagos',
      nivel: 'Alto',
    },
    {
      id: 'ACT-05',
      nombre: 'Plataforma de Correo Corporativo',
      tecnologia: 'SMTP / Exchange',
      descripcion: 'Servicio de notificación para clientes sobre aprobación de créditos, comprobantes de pago y reset de contraseñas. Canal crítico de comunicación con el comprador.',
      vulnerabilidad: 'XSS Reflejado (ingeniería social)',
      riesgo: 'Phishing dirigido y distribución de enlaces maliciosos',
      nivel: 'Medio',
    },
  ];

  const colorNivel: Record<string, string> = {
    Crítico: '#e74c3c',
    Alto:    '#e67e22',
    Medio:   '#f39c12',
  };

  const vulnClass: Record<string, string> = {
    'Inyección SQL (SQLi)':              'sev-high',
    'Inyección de Comandos':             'sev-critical',
    'XSS Reflejado':                     'sev-medium',
    'XSS Reflejado (ingeniería social)': 'sev-medium',
  };

  return (
    <div>
      <h2 className="section-title">📦 Inventario de Activos de Información</h2>

      <div className="card">
        <div className="card-title">Contexto del Negocio Inmobiliario</div>
        <p style={{ color: 'var(--text)', fontSize: 14, lineHeight: 1.7 }}>
          Para Inmobiliaria Terranova, el{' '}
          <strong style={{ color: 'var(--text-head)' }}>Portal Clientes Terranova Max</strong>{' '}
          interactúa con diversos componentes que almacenan o procesan información de alto valor
          económico y legal. Se han identificado y clasificado los siguientes activos críticos,
          vinculados al rubro inmobiliario y a las vulnerabilidades encontradas:
        </p>
      </div>

      <table className="assets-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Activo</th>
            <th>Tecnología</th>
            <th>Descripción</th>
            <th>Vulnerabilidad Asociada</th>
            <th>Riesgo Principal</th>
            <th>Nivel</th>
          </tr>
        </thead>
        <tbody>
          {activos.map(a => (
            <tr key={a.id}>
              <td><span className="asset-id">{a.id}</span></td>
              <td style={{ fontWeight: 600, color: 'var(--text-head)' }}>{a.nombre}</td>
              <td style={{ color: 'var(--text-dim)', fontSize: 12 }}>{a.tecnologia}</td>
              <td style={{ fontSize: 12 }}>{a.descripcion}</td>
              <td>
                <span
                  className={`nav-severity ${vulnClass[a.vulnerabilidad]}`}
                  style={{ display: 'inline-block', padding: '3px 8px', borderRadius: 3, fontSize: 11, fontWeight: 700 }}
                >
                  {a.vulnerabilidad}
                </span>
              </td>
              <td style={{ fontSize: 12 }}>{a.riesgo}</td>
              <td>
                <span style={{ color: colorNivel[a.nivel], fontWeight: 800, fontSize: 12 }}>
                  {a.nivel}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="sub-title" style={{ marginTop: 28 }}>Asociación de Amenazas por Industria</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 8 }}>
        {[
          {
            icon: '🗄️',
            title: 'SQLi → ACT-01 (BD de Clientes)',
            color: '#e67e22',
            text: 'Permite saltarse mecanismos de autenticación. El riesgo es el robo masivo de identidad y filtración de datos financieros de postulantes a créditos hipotecarios, generando demandas colectivas y multas por la ley de protección de datos.',
          },
          {
            icon: '⚙️',
            title: 'Command Injection → ACT-02 + ACT-03 (File Server + Servidor Web)',
            color: '#e74c3c',
            text: 'Con capacidad de ejecutar instrucciones en el servidor, el atacante puede acceder a todo el sistema de archivos. Riesgo de espionaje industrial (fuga de planos de ingeniería) y secuestro por Ransomware, paralizando la firma de escrituras.',
          },
          {
            icon: '💻',
            title: 'XSS Reflejado → ACT-04 (Pasarela de Pagos)',
            color: '#f39c12',
            text: 'Un atacante que secuestre el token de sesión de un cliente puede suplantar su identidad en el portal, desviando fondos de reservas o alterando datos de transferencias bancarias asociadas a la compra de propiedades.',
          },
        ].map(item => (
          <div key={item.title} className="control-item">
            <div className="control-icon" style={{ fontSize: 22 }}>{item.icon}</div>
            <div className="control-body">
              <h4 style={{ borderLeft: `3px solid ${item.color}`, paddingLeft: 8 }}>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};