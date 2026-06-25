// src/components/inyeccionSQL.tsx
export const InyeccionSQL = () => {
  return (
    <section>
      <h2>Inyección SQL</h2>
      <p>Análisis de la vulnerabilidad de base de datos:</p>
      <div style={{ backgroundColor: '#fffbe6', padding: '15px', borderLeft: '5px solid #ffe58f' }}>
        <p><strong>Riesgo:</strong> Alto</p>
        <p><strong>Descripción:</strong> Manipulación de consultas SQL a través de campos de entrada no validados, permitiendo el acceso o modificación no autorizada de la base de datos.</p>
      </div>
    </section>
  );
};