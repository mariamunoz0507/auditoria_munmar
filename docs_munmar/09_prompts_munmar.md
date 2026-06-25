# Bitácora de Uso de Inteligencia Artificial

## 1. Herramientas Utilizadas
* **Plataforma IA:** Gemini (Google)
* **Propósito General:** Asistencia en la contextualización de las vulnerabilidades técnicas (laboratorio DVWA) hacia un escenario de negocio realista (Inmobiliaria Terranova), redacción estructurada en formato Markdown y generación de código React para visualización de datos.

## 2. Registro de Prompts Destacados

### Prompt 1: Contextualización del Negocio e Inventario de Activos
* **Sección Aplicada:** `01_resumen_munmar.md` y `05_activos_munmar.md`.
* **Prompt Ingresado:** *"Debo representar a un auditor de ciberseguridad para una empresa ficticia. Elegí una empresa inmobiliaria llamada 'Terranova'. Necesito que me ayudes a inventar el contexto tecnológico del negocio: qué tipo de portal web tendrían, qué datos sensibles manejarían (como créditos hipotecarios, promesas de compraventa) y cuáles serían sus activos de información más críticos para armar un informe."*
* **Análisis y Ajuste:** La IA proporcionó un excelente marco teórico, bautizando el sistema como "Portal Clientes Terranova Max". Acepté la propuesta de incluir datos específicos como liquidaciones de sueldo y escrituras, ya que esto otorgó mucho realismo y peso argumentativo a la hora de calcular el impacto de las vulnerabilidades.

### Prompt 2: Priorización y Justificación de la Matriz de Riesgo
* **Sección Aplicada:** `06_matriz_munmar.md`.
* **Prompt Ingresado:** *"Basado en el portal inmobiliario que definimos, tengo que priorizar 3 ataques: Inyección SQL, XSS Reflejado e Inyección de Comandos. ¿Cuál de estos tres ataques representaría el mayor nivel de riesgo (Probabilidad x Impacto) para la empresa y por qué? Necesito justificar el orden del más al menos crítico."*
* **Análisis y Ajuste:** La IA estructuró de manera lógica la respuesta, indicando correctamente que la Inyección de Comandos es la más catastrófica al comprometer la infraestructura completa. Utilicé esta argumentación para estructurar las puntuaciones en mi tabla, dándole nivel Crítico (20) a Comandos, Alto (16) a SQLi y Medio (9) a XSS.

## 3. Reflexión Final sobre el Uso de IA
La inteligencia artificial demostró ser una herramienta invaluable en este proyecto, operando como un agente de *brainstorming*. Me permitió acortar la brecha entre el conocimiento netamente técnico de hacking (la explotación de payloads en DVWA) y la visión estratégica de negocio requerida en una auditoría profesional. 

La formulación de prompts detallados, especificando el rubro inmobiliario y los resultados esperados, fue clave para obtener respuestas útiles, estructuradas y alineadas al 100% con los criterios de evaluación solicitados.