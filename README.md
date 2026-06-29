# Auditoría de Seguridad Web — Inmobiliaria TerraNova

**Asignatura:** TI3034 — Fundamentos de Seguridad de la Información  
**Docente:** Rubén Schnettler  
**Estudiante:** María Muñoz  
**Período:** Otoño 2026  

---

## Empresa Asignada
**Inmobiliaria TerraNova** — Portal Clientes Terranova Max  
Auditoría realizada sobre el ambiente controlado DVWA, demostrando tres ataques web:
Inyección SQL, XSS Reflejado e Inyección de Comandos.

---

## Entregas

| Entrega | URL |
|---------|-----|
| 🌐 Sitio Vercel | https://auditoria-munmar.vercel.app/ |
| 📁 Repositorio GitHub | https://github.com/mariamunoz0507/auditoria_munmar |

---

## Ataques Demostrados

| Ataque | CVSS | Severidad |
|--------|------|-----------|
| Inyección de Comandos | 9.8 | Crítico |
| Inyección SQL | 8.2 | Alto |
| XSS Reflejado | 6.1 | Medio |

---

## Estructura del Proyecto

```
auditoria_munmar/
├── docs_munmar/          # Archivos Markdown del informe
│   ├── 01_resumen_munmar.md
│   ├── 02_sqli_munmar.md
│   ├── 03_xss_munmar.md
│   ├── 04_comandos_munmar.md
│   ├── 05_activos_munmar.md
│   ├── 06_matriz_munmar.md
│   ├── 07_controles_munmar.md
│   ├── 08_recuperacion_munmar.md
│   └── 09_prompts_munmar.md
├── src/
│   ├── components/       # Componentes React
│   └── img/              # Capturas de evidencia DVWA
└── public/
```