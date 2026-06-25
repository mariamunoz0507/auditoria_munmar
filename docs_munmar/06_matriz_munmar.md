# Matriz de Riesgo y Priorización de Hallazgos

## 1. Criterios de Evaluación
Para cuantificar el riesgo de negocio en Inmobiliaria Terranova, utilizaremos una escala clásica del 1 al 5 tanto para la **Probabilidad** (frecuencia con la que un atacante podría explotar la falla) como para el **Impacto** (gravedad del daño a la empresa si el ataque tiene éxito)[cite: 1].

*   **Riesgo (R) = Probabilidad (P) × Impacto (I)**[cite: 1]
*   **Escala de Criticidad:**
    *   **Bajo:** 1 a 5
    *   **Medio:** 6 a 11
    *   **Alto:** 12 a 19
    *   **Crítico:** 20 a 25

## 2. Tabla de Matriz de Riesgo

| ID Riesgo | Vulnerabilidad Asociada | Activo Afectado | Probabilidad (1-5) | Impacto (1-5) | Puntuación (P×I) | Nivel de Riesgo | Prioridad de Atención |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **R-01** | Inyección de Comandos | ACT-03 / ACT-02 | 4 | 5 | **20** | 🔴 Crítico | **1° (Inmediata)** |
| **R-02** | Inyección SQL (SQLi) | ACT-01 | 4 | 4 | **16** | 🟠 Alto | **2° (Alta)** |
| **R-03** | XSS Reflejado | ACT-04 | 3 | 3 | **9** | 🟡 Medio | **3° (Media)** |

## 3. Justificación de la Priorización
1.  **Inyección de Comandos (R-01 - Puntuación: 20):** Se prioriza en primer lugar con nivel máximo de impacto. Si el servidor web es comprometido, el atacante puede deshabilitar toda la plataforma, inyectar código malicioso y paralizar por completo la gestión de ventas y la construcción de nuevos condominios en la región de Valparaíso y el resto del país.
2.  **Inyección SQL (R-02 - Puntuación: 16):** Ocupa el segundo lugar de prioridad. Compromete directamente la confidencialidad de la base de datos. Aunque su alcance operativo inicial está limitado al motor SQL, la fuga de datos confidenciales y financieros acarrearía multas de los entes reguladores y una pérdida total de confianza de los compradores.
3.  **XSS Reflejado (R-03 - Puntuación: 9):** Se sitúa en tercer lugar debido a que su impacto está más acotado. A diferencia de las otras dos amenazas, este ataque no es masivo por defecto, sino que requiere obligatoriamente la interacción y el engaño de una víctima individual (ingeniería social) para lograr secuestrar su sesión específica.