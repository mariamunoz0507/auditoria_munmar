// src/components/prompts.tsx
export const Prompts = () => {
  return (
    <section>
      <h2>Metodología: Prompts de Auditoría</h2>
      <p>Se utilizaron prompts estructurados para el análisis de vulnerabilidades:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <strong>SQLi:</strong> "Analiza este fragmento de código en busca de consultas SQL concatenadas inseguras."
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong>XSS:</strong> "Identifica si los inputs de este formulario son sanitizados correctamente antes de ser renderizados."
        </li>
        <li>
          <strong>Comandos:</strong> "Verifica si existe el uso de funciones exec() o system() con entradas de usuario."
        </li>
      </ul>
    </section>
  );
};