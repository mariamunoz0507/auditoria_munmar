// src/components/recuperacion.tsx
export const Recuperacion = () => {
  return (
    <div>
      <h2 className="section-title">🔄 Mejora Tecnológica y Plan de Recuperación (DRP)</h2>

      <div className="alert-box danger">
        <span className="alert-icon">🚨</span>
        <div>
          <strong>Escenario de Desastre:</strong> Un atacante explota la Inyección de Comandos e
          infecta con Ransomware los servidores principales de Inmobiliaria Terranova alojados en
          el data center de Valparaíso. La plataforma queda inaccesible y los datos cifrados.
        </div>
      </div>

      {/* MEJORAS TECNOLÓGICAS */}
      <h3 className="sub-title">Propuesta de Mejora Tecnológica</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {[
          {
            icon: '☁️',
            title: 'Migración a Arquitectura Cloud y Contenedores',
            tag: 'recovery',
            tagLabel: 'Mejora Tecnológica',
            text: 'Desplegar la aplicación web usando contenedores Docker orquestados en la nube. Esto aísla los procesos de la aplicación del sistema operativo anfitrión, limitando el radio de daño ante una inyección de comandos exitosa.',
          },
          {
            icon: '🌐',
            title: 'Segmentación de Red (VLANs)',
            tag: 'recovery',
            tagLabel: 'Mejora Tecnológica',
            text: 'Separar física y lógicamente el servidor web público de la red interna que aloja las bases de datos financieras y el servidor de archivos corporativos. Un atacante que comprometa el frontend no puede alcanzar directamente la BD de clientes.',
          },
          {
            icon: '📦',
            title: 'Desacoplamiento de Almacenamiento en la Nube',
            tag: 'recovery',
            tagLabel: 'Mejora Tecnológica',
            text: 'Los activos críticos (promesas de compraventa, liquidaciones de sueldo) no deben residir en el disco local del servidor web. Deben migrarse a un servicio de almacenamiento de objetos cifrado (Amazon S3 / Azure Blob Storage), al cual la aplicación acceda temporalmente mediante APIs restringidas.',
          },
        ].map(item => (
          <div key={item.title} className="control-item">
            <div className="control-icon">{item.icon}</div>
            <div className="control-body">
              <span className={`control-tag tag-${item.tag}`}>{item.tagLabel}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DRP FASES */}
      <h3 className="sub-title" style={{ marginTop: 28 }}>Plan de Recuperación ante Desastres (DRP)</h3>
      <div className="phase-list">

        <div className="phase-item">
          <div className="phase-num">1</div>
          <div className="phase-body">
            <h4>Fase 1 — Contención y Aislamiento</h4>
            <ul>
              <li>Desconectar de forma inmediata el servidor web comprometido de la red externa e interna.</li>
              <li>Aislar la base de datos central de clientes para evitar la propagación del código
              malicioso hacia los sistemas financieros y salas de venta a nivel nacional.</li>
              <li>Preservar evidencia forense (imágenes de disco) antes de cualquier limpieza.</li>
            </ul>
          </div>
        </div>

        <div className="phase-item">
          <div className="phase-num">2</div>
          <div className="phase-body">
            <h4>Fase 2 — Estrategia de Respaldos (Regla 3-2-1)</h4>
            <p style={{ marginBottom: 10 }}>
              Para garantizar la resiliencia frente a incidentes destructivos, Inmobiliaria Terranova
              mantendrá una política estricta de respaldos:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
              {[
                {
                  num: '3',
                  label: 'Copias de los datos',
                  desc: 'La BD en producción más dos copias de seguridad independientes.',
                },
                {
                  num: '2',
                  label: 'Medios distintos',
                  desc: 'Almacenamiento en la nube + almacenamiento físico en frío (off-site).',
                },
                {
                  num: '1',
                  label: 'Copia inmutable off-site',
                  desc: 'En región geográfica distinta, protegida contra escritura: impide que el Ransomware encripte el respaldo.',
                },
              ].map(r => (
                <div key={r.num} style={{
                  background: 'var(--bg-card2)',
                  border: '1px solid var(--border)',
                  borderTop: '3px solid var(--accent)',
                  borderRadius: 6,
                  padding: '14px 16px',
                }}>
                  <div style={{ fontSize: 36, fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>{r.num}</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-head)', fontSize: 13, marginTop: 6, marginBottom: 4 }}>{r.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--text)' }}>{r.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="phase-item">
          <div className="phase-num">3</div>
          <div className="phase-body">
            <h4>Fase 3 — Restauración y Retorno a la Operación</h4>
            <ul>
              <li>Aprovisionar una infraestructura limpia y paralela en el sitio de contingencia
              a partir de imágenes de sistema seguras y auditadas.</li>
              <li>Restaurar la última instantánea (snapshot) inmutable de la base de datos (ACT-01)
              y del servidor de archivos (ACT-02).</li>
              <li>Redirigir el tráfico de red (DNS) hacia la nueva infraestructura segura para
              reestablecer el acceso de clientes al portal.</li>
            </ul>
            <div className="alert-box success" style={{ marginTop: 14 }}>
              <span className="alert-icon">✅</span>
              <div>
                <strong>Objetivo de Tiempo de Recuperación (RTO):</strong> Inferior a{' '}
                <strong>4 horas</strong> para no afectar el procesamiento de créditos y pagos
                de reservas de propiedades.
              </div>
            </div>
          </div>
        </div>

        <div className="phase-item">
          <div className="phase-num">4</div>
          <div className="phase-body">
            <h4>Fase 4 — Notificación y Gestión del Incidente</h4>
            <ul>
              <li>Notificar a los clientes afectados dentro de las 72 horas, conforme a las
              obligaciones de la <strong>Ley 21.719</strong> de Protección de Datos Personales (Chile).</li>
              <li>Reportar el incidente a la CSIRT de Gobierno y a las autoridades regulatorias
              correspondientes.</li>
              <li>Realizar un análisis post-mortem documentado para identificar la causa raíz
              e implementar correcciones permanentes.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};