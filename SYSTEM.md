# NEXORA - Sistema Modular v2.0

## 📋 Descripción General

Se ha transformado completamente el sistema de Nexora de un portafolio de proyectos a una **plataforma profesional multiusuario**, con 5 secciones modulares:

```
🎯 Servicios (2x2 - grande)
⭐ Reseñas (2x2 - grande)
👥 Sobre Nosotros (1x1 - pequeño)
💬 Contacto (1x1 - pequeño)
📁 Portafolios (1x1 - pequeño)
```

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas
```
nexora/
├── index.html              (entry point)
├── style.css               (926+ líneas, estilos completos)
├── 
├── js/
│   ├── theme.js            (gestión de temas)
│   ├── data.js             (carga de datos JSON)
│   ├── datetime.js         (fecha/hora en tiempo real)
│   ├── modal.js            (sistema de modales dinámicos)
│   └── main.js             (orquestación)
│
├── data/
│   ├── services.json       (5 servicios con características)
│   ├── reviews.json        (4 reseñas de clientes)
│   ├── about.json          (empresa, equipo, estadísticas)
│   ├── portfolio.json      (12 proyectos)
│   └── contact.json        (métodos y formulario)
│
└── images/
    ├── service-*.svg       (5 iconos de servicios)
    ├── client-*.svg        (4 avatares de clientes)
    ├── team-*.svg          (4 miembros del equipo)
    ├── about-hero.svg      (imagen hero)
    └── portfolio-*.svg     (24 imágenes de portafolio)
```

## 📊 Contenido por Sección

### 1️⃣ SERVICIOS
**Ubicación**: Grid Item 1 (2x2 grande)  
**Datos**: `data/services.json`

5 servicios profesionales:
- 💻 **Frontend**: React, Vue, TypeScript
- ⚙️ **Backend**: Node.js, Python, APIs
- 🎨 **UX/UI**: Figma, prototipos, design systems
- ⚡ **SEO**: Google, optimización técnica
- 🛠️ **Soporte**: Mantenimiento 24/7

Cada servicio incluye:
- Icono emoji
- Descripción corta y larga
- 4-5 características principales
- Tecnologías utilizadas
- Entregables garantizados

**Renderizado**: Grid de cards responsivo (3 columnas en desktop, 2 en tablet, 1 en móvil)

### 2️⃣ RESEÑAS
**Ubicación**: Grid Item 2 (2x2 grande)  
**Datos**: `data/reviews.json`

4 reseñas de clientes verificadas:
- Cada una con foto de avatar (SVG)
- Nombre, empresa y cargo
- Rating de 4.5-5 estrellas ⭐
- Testimonio inspirador
- Proyecto realizado y fecha

**Renderizado**: Grid de cards con imagen, foto de avatar, y testimonio con efectos hover

### 3️⃣ SOBRE NOSOTROS
**Ubicación**: Grid Item 3 (1x1 pequeño)  
**Datos**: `data/about.json`

Sección completa con:
- **Hero**: Heading principal + imagen
- **3 Secciones**: Quiénes somos, Expertise, Valores
- **Estadísticas**: 120+ proyectos, 85+ clientes, 8+ años, 12 personas
- **Equipo**: 4 miembros con foto, rol y especialidad
- **Tecnologías**: Stack completo (React, Vue, Node, Python, etc)

**Renderizado**: Layout limpio con secciones, cards del equipo, badges de tecnología

### 4️⃣ CONTACTO
**Ubicación**: Grid Item 4 (1x1 pequeño)  
**Datos**: `data/contact.json`

Dos formas de contacto:
1. **Métodos directos**: 4 cards con email, WhatsApp, teléfono, ubicación
2. **Formulario completo** con 7 campos:
   - Nombre (required)
   - Email (required, validado)
   - Teléfono (opcional)
   - Empresa (opcional)
   - Asunto (select: Nuevo Proyecto, Consultoría, Bug Fix, etc)
   - Mensaje (required, textarea)
   - Presupuesto (select: rangos económicos)

**Características del formulario**:
- Validación HTML5
- Estilos focus mejorados
- Disponibilidad: "24-48 horas"
- Mensaje de éxito/error al enviar

**Renderizado**: Cards de contacto + formulario responsive

### 5️⃣ PORTAFOLIOS
**Ubicación**: Grid Item 5 (1x1 pequeño)  
**Datos**: `data/portfolio.json`

12 proyectos completamente documentados:
- Título, categoría, descripción
- Imagen principal + thumbnail
- 3-6 tecnologías por proyecto
- Año de completación
- Links a proyecto y detalles
- Overlay interactivo al pasar el mouse

Categorías representadas:
- SaaS, E-commerce, Dashboard, App Móvil
- Healthcare, Travel, Real Estate, Delivery
- Education, Music Streaming, Social, Project Management

**Renderizado**: Grid de 3-4 columnas con imagen, overlay, y detalles

## 🎨 Sistema Visual

### Colores
```
Primario: #ff6b9d (Rosa pastel)
Primario Light: #ff8fb7
Primario Dark: #e84c73
Fondo: #faf7fc (light) / #0f0f0f (dark)
Secundario BG: #f3eff6 (light) / #1a1a1a (dark)
```

### Componentes Visuales
- **Service Cards**: Hover effect + border color change
- **Review Cards**: Avatar redondo + rating stars + testimonio en italics
- **Portfolio Items**: Overlay oscuro al hover + zoom de imagen
- **Contact Methods**: Cards interactivas con iconos
- **Form Fields**: Focus states con shadow rosa

### Tipografía
- Fuente: Poppins (400, 600, 700)
- Tamaños: 12px (tags) → 36px (headings)
- Line-height: 1.6-1.7 para readability

## 🔧 Funcionalidades Técnicas

### Modal System v2
El nuevo `modal.js` (380+ líneas) soporta:
- **5 tipos diferentes de contenido** con renderizado dinámico
- Detección automática con `data-type` attribute
- Funciones específicas: renderServicesModal(), renderReviewsModal(), etc
- **Formulario integrado** con validación y manejo de envíos
- Scroll management (bloquea page overflow cuando modal activo)
- Animaciones y transiciones suaves

### Data Management
- **Carga paralela** de 5 archivos JSON simultáneamente
- **Estado global**: MODAL_DATA con 5 propiedades
- **Error handling**: Try/catch con console logging
- Fácil de expandir (solo agregar nuevo JSON)

### Responsive Design
- **Desktop** (1400px+): 4 columnas grid
- **Tablet** (1024px): 2 columnas grid
- **Mobile** (<640px): 1 columna grid
- CSS variables para overflow management

### Accesibilidad
- ARIA labels en modales
- Keyboard navigation (Escape para cerrar)
- Semantic HTML en toda la estructura
- Color contrast mejorado

## 📝 Cómo Editar Contenido

### Agregar un Nuevo Servicio
1. Abre `data/services.json`
2. Agrega objeto nuevo en "services" con id único (ej: "6")
3. Rellena: title, icon, description, features, technologies, etc
4. Modal se actualizará automáticamente

### Agregar una Reseña
1. Abre `data/reviews.json`
2. Agrega en "reviews": nombre, empresa, imagen, rating, testimonio
3. Referencia una imagen SVG en `images/client-X.svg`

### Agregar Proyecto al Portafolio
1. Abre `data/portfolio.json`
2. Agrega objeto con: title, image, technologies, link, etc
3. Las imágenes pueden ser SVG o JPG/PNG locales
4. Grid se adapta automáticamente

### Cambiar Información de Contacto
1. Edita `data/contact.json`
2. Actualiza: methods, form fields, availability
3. Personaliza heading y subheading

## 🎯 Ventajas del Sistema

✅ **100% Modular**: Cada sección es independiente  
✅ **Dato-Driven**: Toda info en JSON, fácil de actualizar  
✅ **Visualmente Atractivo**: Cards, grids, overlays, gradients  
✅ **Profesional**: Incluye formulario, testimonios, stats  
✅ **Responsive**: Funciona en móvil, tablet, desktop  
✅ **Sin dependencias**: Vanilla JS puro  
✅ **Escalable**: Fácil agregar más servicios/proyectos  
✅ **Imágenes incluidas**: 35+ SVGs listos para usar  

## 🚀 Próximos Pasos Sugeridos

1. **Reemplazar imágenes SVG** con fotos/diseños reales
2. **Personalizar contenido** según tu negocio/portafolio
3. **Conectar formulario de contacto** a backend (email service)
4. **Agregar más proyectos** al portafolio
5. **Optimizar imágenes** (WebP, lazy loading)
6. **Agregar analytics** (Google Analytics)
7. **Deployar** a GitHub Pages, Netlify, Vercel

## 📞 Soporte

Para modificar cualquier sección:
- **HTML**: Cambiar labels está en index.html (líneas 90-120)
- **CSS**: Nuevos estilos de cards están en style.css (líneas 650+)
- **JS**: Modal rendering en js/modal.js (métodos renderX)
- **Data**: Estructura JSON en data/*.json

Todo está comentado y bien organizado para fácil mantenimiento.

---

**Nexora v2.0** - Sistema profesional, modular y visual 🎨✨
