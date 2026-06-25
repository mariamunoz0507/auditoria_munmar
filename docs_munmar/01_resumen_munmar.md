# Resumen Ejecutivo: Auditoría de Seguridad

## 1. Descripción de la Organización Auditada
**Nombre:** Inmobiliaria Terranova
**Giro Comercial:** Gestión, desarrollo, venta y financiamiento de proyectos inmobiliarios habitacionales a lo largo del país.

Inmobiliaria Terranova es una empresa líder en el rubro de la construcción y venta de departamentos y casas. Su modelo de negocio no solo abarca la venta física de propiedades, sino que actúa como intermediario financiero, gestionando créditos hipotecarios directos, evaluación de antecedentes comerciales y procesamiento de pagos de reservas. 

Debido a la naturaleza de sus operaciones, la empresa custodia un alto volumen de información altamente sensible, sujeta a normativas de protección de datos personales y bancarios.

## 2. Plataforma Auditada: Portal de Clientes
La presente auditoría de seguridad se enfoca en el ambiente web principal de la empresa, denominado **"Portal Clientes Terranova Max"**. 

Esta plataforma web es el canal principal de interacción entre los compradores y la inmobiliaria. Permite a los usuarios registrados realizar las siguientes acciones críticas:
*   **Gestión Documental:** Carga de liquidaciones de sueldo, certificados de cotizaciones y autorizaciones para revisión de antecedentes comerciales (Dicom).
*   **Gestión Financiera:** Procesamiento de pagos de reservas de propiedades (integración con pasarelas de pago) y visualización del estado de créditos hipotecarios pre-aprobados.
*   **Seguimiento de Proyectos:** Visualización de planos digitales, avances de obras y descarga de promesas de compraventa digitalizadas.

## 3. Objetivo de la Auditoría
El objetivo de este proceso es evaluar la resiliencia del Portal de Clientes frente a vectores de ataque web comunes. Mediante un entorno de pruebas controlado, se busca identificar vulnerabilidades críticas que podrían comprometer la confidencialidad, integridad y disponibilidad de la infraestructura y los datos de Inmobiliaria Terranova. 

A través de la demostración de tres ataques específicos (Inyección SQL, Cross-Site Scripting e Inyección de Comandos), se medirá el nivel de riesgo del negocio y se propondrán controles de mitigación estructurados para salvaguardar la información de los clientes y la continuidad operativa de la empresa.