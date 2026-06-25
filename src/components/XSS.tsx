// src/components/XSS.tsx
export const XSS = () => {
  return (
    <section>
      <h2>Cross-Site Scripting (XSS)</h2>
      <p>Análisis de vulnerabilidad en la interfaz de usuario:</p>
      <div style={{ backgroundColor: '#fff0f6', padding: '15px', borderLeft: '5px solid #eb2f96' }}>
        <p><strong>Riesgo:</strong> Medio/Alto</p>
        <p><strong>Descripción:</strong> Inyección de scripts maliciosos en el lado del cliente. Los scripts ejecutados en el navegador de la víctima pueden robar cookies de sesión o redirigir el tráfico.</p>
      </div>
    </section>
  );
};