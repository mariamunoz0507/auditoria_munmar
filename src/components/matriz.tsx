// src/components/matriz.tsx
export const Matriz = () => {
  const riesgos = [
    { id: 'R-01', vuln: 'Inyección de Comandos', p: 4, i: 5, score: 20, nivel: 'Crítico' },
    { id: 'R-02', vuln: 'Inyección SQL', p: 4, i: 4, score: 16, nivel: 'Alto' },
    { id: 'R-03', vuln: 'XSS Reflejado', p: 3, i: 3, score: 9, nivel: 'Medio' },
  ];

  return (
    <div className="matriz-container">
      <h3>Matriz de Riesgo y Mapa de Calor</h3>
      <table border={1} style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead>
          <tr><th>ID</th><th>Vulnerabilidad</th><th>Prob</th><th>Imp</th><th>Score</th><th>Nivel</th></tr>
        </thead>
        <tbody>
          {riesgos.map(r => (
            <tr key={r.id} style={{ 
              backgroundColor: r.nivel === 'Crítico' ? '#ff4d4f' : r.nivel === 'Alto' ? '#ffa940' : '#ffd666' 
            }}>
              <td>{r.id}</td><td>{r.vuln}</td><td>{r.p}</td><td>{r.i}</td><td>{r.score}</td><td>{r.nivel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};