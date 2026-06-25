// src/components/resumen.tsx
export const Resumen = () => {
  return (
    <section>
      <h2>Resumen Ejecutivo</h2>
      <p>Este informe detalla el proceso de auditoría realizado sobre la plataforma de pruebas "Terranova".</p>
      <p>El objetivo principal fue identificar vulnerabilidades críticas, documentar los hallazgos mediante pruebas de concepto y proponer estrategias de mitigación alineadas con estándares de seguridad.</p>
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e6f7ff', borderLeft: '5px solid #1890ff' }}>
        <strong>Alcance:</strong> Auditoría de seguridad sobre infraestructura web y recuperación de datos críticos.
      </div>
    </section>
  );
};