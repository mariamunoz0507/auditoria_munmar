# Inventario de Activos de Información y Análisis de Riesgos

## 1. Identificación de Activos de Información Críticos
Para Inmobiliaria Terranova, el "Portal Clientes Terranova Max" interactúa con diversos componentes tecnológicos y lógicos que almacenan o procesan información de alto valor[cite: 1]. Se han priorizado los siguientes cuatro activos esenciales:

1.  **ACT-01: Base de Datos de Clientes (SQL Server):** Almacena registros de usuarios, RUT, correos, contraseñas, historial de navegación por proyectos habitacionales y datos confidenciales de pre-evaluación financiera (liquidaciones de sueldo y deudas).
2.  **ACT-02: Servidor de Almacenamiento de Archivos (File Server):** Repositorio digital que resguarda copias en PDF de certificados de cotizaciones, escrituras de propiedades, promesas de compraventa firmadas y planos arquitectónicos técnicos de los proyectos en construcción.
3.  **ACT-03: Servidor Web de la Aplicación (Infraestructura Core):** El servidor físico o virtual que ejecuta la aplicación en producción. Es el encargado de procesar las peticiones de los usuarios, desplegar el portal web y conectar con los sistemas internos de la inmobiliaria.
4.  **ACT-04: API de Integración con Pasarela de Pagos:** Componente de software encargado de tokenizar y procesar las transacciones financieras para el pago de reservas de inmuebles y cuotas de pies a través de tarjetas de crédito o débito.

## 2. Asociación de Amenazas y Riesgos por Industria
En el contexto del negocio inmobiliario y de la construcción, las tres vulnerabilidades descubiertas en la auditoría técnica representan riesgos directos y catastróficos sobre estos activos de información[cite: 1]:

*   **Riesgo de Inyección SQL sobre ACT-01:** La explotación de SQLi permite a un atacante saltarse los mecanismos de autenticación. El riesgo asociado es el **robo masivo de identidad y filtración de datos financieros**. Esto expondría el patrimonio y la privacidad de los postulantes a subsidios o créditos hipotecarios, generando demandas colectivas contra Terranova y multas por infracción a la ley de protección de datos.
*   **Riesgo de Inyección de Comandos sobre ACT-02 y ACT-03:** Un atacante con capacidad de ejecutar instrucciones en el servidor web puede vulnerar todo el sistema de archivos. El riesgo específico incluye el **espionaje industrial** (fuga de planos de ingeniería o estrategias de licitación) y el **secuestro de información mediante Ransomware**, lo cual paralizaría la firma de escrituras y la entrega de viviendas.
*   **Riesgo de XSS Reflejado sobre ACT-04:** Un atacante que logre inyectar scripts maliciosos en la sesión del navegador de un usuario puede secuestrar su token de acceso. El riesgo asociado es el **fraude transaccional y suplantación de identidad**, permitiendo al atacante desviar fondos de reservas de propiedades o alterar datos de transferencias bancarias dentro de la cuenta del cliente afectado.