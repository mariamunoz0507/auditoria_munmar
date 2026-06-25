// src/components/comandos.tsx
export const Comandos = () => {
  return (
    <section>
      <h2>Inyección de Comandos</h2>
      <p>Análisis de la vulnerabilidad detectada en el portal:</p>
      <div style={{ backgroundColor: '#fff3f3', padding: '15px', borderLeft: '5px solid #ff4d4f' }}>
        <p><strong>Riesgo:</strong> Crítico</p>
        <p><strong>Descripción:</strong> Se permite la ejecución de comandos arbitrarios en el sistema operativo del servidor a través de entradas no sanitizadas.</p>
      </div>
    </section>
  );
};