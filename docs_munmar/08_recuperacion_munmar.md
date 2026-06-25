# Mejora Tecnológica y Plan de Recuperación ante Desastres (DRP)

## 1. Propuesta de Mejora Tecnológica
La arquitectura actual del "Portal Clientes Terranova Max" demostró ser vulnerable a ataques de alto impacto, como la inyección de comandos, que pueden comprometer el servidor por completo[cite: 1]. Para robustecer la infraestructura y minimizar el radio de daño futuro, se propone la siguiente evolución tecnológica:

* **Migración a Arquitectura Cloud y Contenedores:** Desplegar la aplicación web utilizando contenedores (como Docker) orquestados en la nube. Esto aislará los procesos de la aplicación del sistema operativo anfitrión.
* **Segmentación de Red (VLANs):** Separar física y lógicamente el servidor web público de la red interna que aloja las bases de datos financieras y el servidor de archivos corporativos.
* **Desacoplamiento de Almacenamiento:** Los activos críticos (promesas de compraventa digitalizadas, liquidaciones de sueldo) ya no deben residir en el disco local del servidor web. Deben migrarse a un servicio de almacenamiento de objetos cifrado en la nube (como Amazon S3 o Azure Blob Storage), al cual la aplicación acceda temporalmente mediante APIs restringidas.

## 2. Plan de Recuperación ante Desastres (DRP)
En el peor escenario posible, donde un atacante explote una inyección de comandos e infecte con *Ransomware* los servidores principales de la inmobiliaria alojados en el data center de Valparaíso, se deberá ejecutar el siguiente protocolo[cite: 1]:

### Fase 1: Contención y Aislamiento
* Desconectar de forma inmediata el servidor web comprometido de la red externa e interna.
* Aislar la base de datos central de clientes para evitar la propagación del código malicioso hacia los sistemas financieros y las salas de venta a lo largo del país.

### Fase 2: Estrategia de Respaldos (Regla 3-2-1)
Para garantizar la resiliencia de la información frente a incidentes destructivos, Inmobiliaria Terranova mantendrá una política estricta de respaldos:
* **3** copias de los datos (la base de datos en producción y dos copias de seguridad).
* **2** medios de almacenamiento distintos (alojamiento en la nube y almacenamiento físico en frío).
* **1** copia *off-site* e inmutable (alojada en una región geográfica distinta y protegida contra escritura/borrado, lo que impide que el *Ransomware* encripte también el respaldo).

### Fase 3: Restauración y Retorno a la Operación (DR)
* Aprovisionar una infraestructura limpia y paralela en el sitio de contingencia a partir de imágenes de sistema (plantillas) seguras y auditadas.
* Restaurar la última instantánea (*snapshot*) inmutable de la base de datos (ACT-01) y del servidor de archivos (ACT-02).
* Redirigir el tráfico de red (DNS) hacia la nueva infraestructura segura para reestablecer el acceso de los clientes al portal, asegurando un Objetivo de Tiempo de Recuperación (RTO) inferior a 4 horas para no afectar el procesamiento de créditos y pagos.