# Políticas de Prevención y Controles de Mitigación

## 1. Políticas de Prevención (Nivel Estratégico y Organizacional)
Para asegurar que las vulnerabilidades críticas encontradas en el "Portal Clientes Terranova Max" no vuelvan a presentarse en futuros desarrollos, la gerencia de Inmobiliaria Terranova debe adoptar formalmente las siguientes políticas:

* **Política de Desarrollo Seguro (Secure SDLC):** Integrar la seguridad desde la fase inicial de diseño del software. Todo nuevo módulo web (por ejemplo, un nuevo simulador de créditos hipotecarios) debe pasar por pruebas de seguridad estáticas (SAST) y revisión de código antes de ser promovido al entorno de producción[cite: 1].
* **Política de Capacitación Continua en Ciberseguridad:** Establecer un programa de formación técnica anual obligatorio para los analistas programadores y el equipo de TI de la inmobiliaria. Este entrenamiento debe estar enfocado en las normativas del OWASP Top 10, haciendo énfasis en la prevención de inyecciones y sanitización de datos.
* **Política de Gestión de Identidades y Accesos:** Imponer el "Principio de Menor Privilegio" por defecto en todos los entornos. Las cuentas de servicio que conectan el portal web con la base de datos financiera y el servidor de archivos deben operar con los permisos mínimos e indispensables para su función, denegando accesos administrativos generales.

## 2. Controles de Mitigación (Nivel Técnico y Operativo)
Dado que las vulnerabilidades de Inyección SQL, XSS Reflejado y Command Injection ya están identificadas en la infraestructura actual, se deben aplicar de inmediato los siguientes controles para mitigar el riesgo mientras se parchea el código fuente[cite: 1]:

* **Implementación de un Web Application Firewall (WAF):** Desplegar un WAF de grado empresarial delante del portal de clientes. Este control perimetral detectará y bloqueará automáticamente los *payloads* maliciosos típicos (como `' OR '1'='1`, etiquetas `<script>`, o concatenación de comandos de terminal con `;`) antes de que logren alcanzar el servidor web[cite: 1].
* **Validación de Entrada Rigurosa (Input Validation):** Configurar el backend para operar mediante "Listas Blancas" (Allow-listing). El sistema debe rechazar cualquier dato de entrada que no cumpla estrictamente con el formato esperado. Por ejemplo, si el campo es "RUT del Cliente", solo debe aceptar números y la letra K, bloqueando sistemáticamente caracteres especiales y metacaracteres.
* **Auditorías Periódicas y Pentesting:** Contratar un servicio externo de pruebas de penetración (Ethical Hacking) de manera semestral. Esto permitirá evaluar la efectividad de los controles implementados y detectar nuevas brechas en el portal antes de que cibercriminales puedan explotarlas.