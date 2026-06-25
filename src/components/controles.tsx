// src/components/controles.tsx
export const Controles = () => {
  return (
    <section>
      <h2>Controles de Seguridad</h2>
      <p>Medidas preventivas y correctivas recomendadas:</p>
      <ul>
        <li><strong>Validación de Entradas:</strong> Implementar listas blancas en todos los formularios.</li>
        <li><strong>Principio de Menor Privilegio:</strong> Limitar los permisos del usuario que ejecuta el servidor web.</li>
        <li><strong>Actualizaciones:</strong> Mantener parches de seguridad al día en el sistema operativo y dependencias.</li>
      </ul>
    </section>
  );
};