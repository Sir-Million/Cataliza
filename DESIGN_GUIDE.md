# 🎨 Cataliza - Guía de Diseño

Documento oficial que define la identidad visual, arquitectura de componentes y decisiones de diseño del portafolio **Cataliza**.

---

## 📋 Contenido

1. [Filosofía de Diseño](#filosofía-de-diseño)
2. [Paleta de Colores](#paleta-de-colores)
3. [Tipografía](#tipografía)
4. [Sistema de Temas](#sistema-de-temas)
5. [Componentes](#componentes)
6. [Espaciado & Layout](#espaciado--layout)
7. [Glasmorphism](#glasmorphism)
8. [Accesibilidad](#accesibilidad)
9. [Variables CSS](#variables-css)
10. [Guías de Mantenimiento](#guías-de-mantenimiento)

---

## 🎯 Filosofía de Diseño

### Core Principles

**Cataliza** sigue una filosofía de diseño moderna, limpia y accesible:

- **Minimalismo Moderno**: Eliminamos lo innecesario. Solo lo que suma se queda.
- **Glasmorphism**: Fondos semi-transparentes con blur crean profundidad sin saturar.
- **Coherencia**: Todas las decisiones se basan en un sistema consistente.
- **Inclusividad**: Accesible para todos (WCAG 2.1 AA).
- **Responsividad**: Funciona perfecto en cualquier dispositivo.

### ¿Por qué estos principios?

1. **Minimalismo**: Los portafolios profesionales no deben competir con su contenido. El foco debe estar en los proyectos.
2. **Glasmorphism**: Es trendy pero funcional. Crea jerarquía visual sin necesidad de sombras pesadas.
3. **Consistencia**: Reduce carga cognitiva. El usuario sabe qué esperar.
4. **Accesibilidad**: Es lo correcto. Además, mejora SEO y experiencia general.

---

## 🎨 Paleta de Colores

### Light Mode (Defecto)

```
Primario:     #ff6b9d (Rosa Pastel)
Primario Light: #ff8fb7 (Rosa Claro)
Primario Dark:  #e84c73 (Rosa Oscuro)
Primario BG:    #ffe0e6 (Rosa Muy Claro)

Fondo:        #faf7fc (Casi Blanco + Toque Rosa)
Fondo Sec:    #f3eff6 (Gris Rosado)
Texto:        #1a1a1a (Negro)
Texto Sec:    #666666 (Gris Medio)
Texto Terc:   #999999 (Gris Claro)

Bordes:       #e0e0e0
Sombras:      rgba(0, 0, 0, 0.08-0.15)
```

### Dark Mode

```
Primario:     #ff8fb7 (Rosa Claro - más visible en oscuro)
Primario Light: #ffb0d0
Primario Dark:  #e84c73
Primario BG:    rgba(255, 107, 157, 0.15)

Fondo:        #0f0f0f (Negro Puro)
Fondo Sec:    #1a1a1a (Negro + Gris)
Texto:        #f5f5f5 (Blanco)
Texto Sec:    #b0b0b0 (Gris Claro)
Texto Terc:   #808080 (Gris Medio)

Bordes:       #333333
Sombras:      rgba(0, 0, 0, 0.3-0.5)
```

### ¿Por qué Rosa Pastel?

- **Diferenciador**: No es azul como todos los otros portfolios.
- **Profesional**: El rosa pastel es elegante, no juguetón.
- **Eyecatching**: Destaca sin ser agresivo.
- **Versatilidad**: Funciona en light y dark mode.
- **Tendencia**: Glasmorphism + Rosa Pastel = Diseño moderno 2026.

### ¿Por qué ese Fondo?

- **Light**: `#faf7fc` tiene un toque rosa muy sutil. Mantiene coherencia cromática sin saturar.
- **Dark**: Negro puro `#0f0f0f` es menos fatigante para los ojos que gris.

---

## 🔤 Tipografía

### Fuente Principal: Poppins

```css
font-family: "Poppins", sans-serif;
font-weights: 400 (regular), 600 (semibold), 700 (bold)
```

### Jerarquía Tipográfica

| Elemento | Tamaño | Peso | Uso |
|----------|--------|------|-----|
| `h1` (Header) | 28px | 700 | Nombre principal (Cataliza) |
| `h2` (Footer) | 20px | 700 | Logo footer |
| `h3` | 12px | 600 | Secciones secundarias |
| Body | 16px | 400 | Texto general |
| Small | 11-12px | 400 | Metadata, copyright |

### ¿Por qué Poppins?

- **Google Fonts**: Gratis, carga rápida, múltiples weights.
- **Moderno**: Geométrica, limpia, sans-serif profesional.
- **Legible**: Funciona en todos los tamaños.
- **Variable**: Soporta varios weights para jerarquía visual.

---

## 🌓 Sistema de Temas

### Estructura

```
:root { /* Light Mode Default */ }
html[data-theme="dark"] { /* Dark Mode Override */ }
```

### Cómo Funciona

1. Las variables CSS se definen en `:root` (light mode)
2. `html[data-theme="dark"]` sobrescribe solo lo necesario
3. JavaScript detecta preferencia del sistema + localStorage
4. Transiciones suaves entre temas (0.3s)

### Implementación JavaScript

```javascript
// ThemeManager class maneja:
- Detección de preferencia del sistema (prefers-color-scheme)
- Persistencia en localStorage
- Aplicación inmediata del tema
- Múltiples transiciones suaves
```

### ¿Por qué Two Themes?

- **Inclusividad**: Respeta preferencia del usuario.
- **Comfort**: Light mode para día, dark mode para noche.
- **Tendencia**: Los sitios modernos ofrecen ambos.
- **Técnico**: CSS variables hacen fácil mantener consistencia.

---

## 🧩 Componentes

### Header

**Propósito**: Navegación principal + contexto visual

**Composición**:
- Logo (Cataliza)
- Fecha/Hora en vivo
- Toggle de Tema (Sun/Moon icons)

**Estilos**:
- Glasmorphism: `backdrop-filter: blur(20px)`
- Gradiente rosa pastel (light mode)
- Semi-transparente: `rgba(..., 0.7-0.85)`
- Bordes sutiles: `rgba(255, 255, 255, 0.4-0.5)`

**¿Por qué así?**
- Glasmorphism crea separación visual sin ser agresivo
- Blur suave sugiere profundidad
- Semi-transparencia = diseño moderno
- Sombra suave = tridimensionalidad

### Theme Toggle

**Propósito**: Cambiar entre light/dark mode

**Features**:
- Iconos SVG (Sol/Luna) que rotan
- Animación smooth (0.6s)
- Accesible: aria-pressed, aria-label dinámico
- Hover effect: scale(1.05) + fondo más opaco

**¿Por qué iconos SVG?**
- Escalables (no pixelados)
- Personalizables
- Mejor que emojis (consistencia)
- Más visibles que texto

### Footer

**Propósito**: Contacto + información legal + redes

**Composición**:
- Logo + Tagline (izquierda)
- Redes Sociales (centro) - LinkedIn, GitHub, Twitter, Instagram
- Enlaces Legales (derecha) - Términos, Privacidad, etc.
- Copyright watermark (abajo)

**Layout**:
- Flexbox horizontal en desktop
- Stack vertical en mobile
- Espacio eficiente (padding mínimo)

**¿Por qué así?**
- Horizontal aprovecha el ancho
- Las redes centradas = jerarquía visual
- Copyright al bottom = marca de agua profesional
- Responsive natural con flexbox

---

## 📐 Espaciado & Layout

### Sistema de Espaciado

```css
Pequeño:  8px
Normal:   12px
Medio:    15px
Grande:   20px
X-Grande: 30-40px

Padding Header:   20px
Padding Footer:   15px (tight)
Padding Main:     40px (breathing room)
```

### Gaps & Margins

- **Header items**: 10px
- **Footer sections**: 30px (flex gap)
- **Social icons**: 8px
- **List items**: 6-8px

### ¿Por qué estos valores?

- **Tight Footer**: Mantiene el pie compacto, no roba pantalla
- **Spacious Main**: El contenido principal respira
- **Header Balanced**: Ni muy apretado ni muy espacioso
- **Múltiplos de 4-8**: Facilita escalado en responsive

---

## 💫 Glasmorphism

### Definición

Glasmorphism es un estilo de diseño que simula vidrio frosted (helado):
- Semi-transparencia
- Backdrop blur
- Bordes sutiles
- Sombras suaves

### Implementación

```css
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px); /* Safari support */
background: rgba(255, 200, 220, 0.7); /* Semi-transparent */
border: 1px solid rgba(255, 255, 255, 0.4); /* Subtle border */
box-shadow: 0 8px 32px rgba(255, 107, 157, 0.15); /* Soft shadow */
```

### Dónde Se Aplica

- Header principal
- Footer
- Theme toggle button
- Social links (hover)

### ¿Por qué Glasmorphism?

- **Visual Depth**: Crea capas sin ser confuso
- **Modern**: Tendencia de diseño 2024-2026
- **Subtle**: No es agresivo, funciona de fondo
- **Cohesivo**: Conecta elementos visualmente

### Consideraciones

- Requiere blur CSS (soporte moderno)
- Compatible con: Chrome 76+, Firefox 103+, Safari 9+
- Fallback automático en navegadores viejos

---

## ♿ Accesibilidad (WCAG 2.1 AA)

### Contrast Ratios

| Elemento | Ratio | Standard |
|----------|-------|----------|
| Text Negro sobr Blanco | 7:1 | AAA (excepcional) |
| Text Blanco sobre Rosa | 5.5:1 | AA (normal) |
| Icons en Header | 4.5:1 | AA (normal) |

### Implementación

```html
<!-- Skip to Main Content -->
<a href="#main" class="sr-only">Saltar al contenido</a>

<!-- Semantic HTML -->
<header role="banner">
<main role="main">
<footer role="contentinfo">

<!-- ARIA Labels -->
<label aria-label="Cambiar a modo claro">
<svg aria-hidden="true"><!-- decorative --> </svg>

<!-- Live Regions -->
<span id="date" aria-live="polite">
<span id="time" aria-live="polite">
```

### ¿Por qué Importante?

- **Inclusividad**: ~15% de la población tiene algún tipo de discapacidad visual
- **SEO**: Google rank más alto accesibilidad
- **Técnicamente**: Mejora estructura HTML
- **Ético**: Lo correcto es hacer sitios inclusivos

---

## 🎛️ Variables CSS

### Estructura

```css
/* Color Variables */
--primary: [main color]
--bg-color: [background]
--text-color: [foreground]

/* Design System */
--transition-speed: 0.3s
--transition-timing: cubic-bezier(0.4, 0, 0.2, 1)
--border-radius: 12px

/* Responsive Breakpoints (en media queries) */
@media (max-width: 768px) /* Tablet */
@media (max-width: 480px) /* Mobile */
```

### Cómo Usarlas

```css
/* ❌ Evita */
color: #ff6b9d;
background: rgba(255, 107, 157, 0.15);

/* ✅ Usa */
color: var(--primary);
background-color: var(--primary-bg);
```

### ¿Por qué CSS Variables?

- **Mantenimiento**: Un cambio = actualiza todo
- **Consistencia**: Todos usan los mismos colores
- **Temas**: Dark mode sobrescribe variables automáticamente
- **Performance**: Mejor que SCSS/Less

---

## 🔧 Guías de Mantenimiento

### Añadir un Nuevo Color

1. Define en `:root`
2. Override en `html[data-theme="dark"]`
3. Usa `var(--nombre)` en los estilos

```css
:root {
    --accent: #06b6d4;
}

html[data-theme="dark"] {
    --accent: #0891b2;
}

/* Use it */
button { background: var(--accent); }
```

### Cambiar la Paleta Completa

Si en el futuro se quiere cambiar de rosa a otro color:

1. Modifica variables principales en `:root`
2. Ajusta dark mode equivalentes
3. Regenera colores secundarios (light, dark, bg variations)
4. Prueba contrast ratios
5. Actualiza esta guía

### Respetar Glasmorphism

Siempre que añadas elemento flotante:

```css
.nuevo-elemento {
    backdrop-filter: blur(10px-20px); /* Depends on intensity */
    border: 1px solid rgba(255, 255, 255, 0.3-0.5);
    background: rgba(..., 0.7-0.85);
    box-shadow: 0 8px 32px rgba(..., 0.1-0.15);
}
```

### Mobile First Approach

```css
/* Mobile first */
.elemento { font-size: 14px; }

/* Then override for larger screens */
@media (min-width: 768px) {
    .elemento { font-size: 16px; }
}
```

### Mantener Consistencia Tipográfica

- **Títulos**: font-weight 700
- **Texto Normal**: font-weight 400
- **Secciones**: font-weight 600
- **No mezcles sin razón**

---

## 📱 Responsive Design

### Breakpoints

```
Desktop:  > 768px (1, 2, 3 columns)
Tablet:   ≤ 768px (ajustes spacing/font)
Mobile:   ≤ 480px (1 column, minimal)
```

### Estrategia

1. **Desktop First**: Definimos estilos para desktop
2. **Media Queries**: Reducimos complejidad en mobile
3. **Flexbox**: Natural responsive sin grid en small screens
4. **Readable**: Min 16px font en mobile

### Checklist Responsive

- [ ] Header se adapta a ancho disponible
- [ ] Footer stacks en mobile
- [ ] No hay overflow horizontal
- [ ] Touch targets ≥ 44x44px
- [ ] Readable sin zoom en mobile

---

## 🚀 Performance

### Consideraciones

- **Font Loading**: Poppins es Google Font (carga rápida)
- **Icons**: SVG inline (no HTTP requests)
- **CSS**: Minificado en producción
- **Images**: Aún no hay, placeholder cuando lleguen

### Futuro

Cuando se añadan imágenes:
- Usar WebP con fallback JPG/PNG
- Lazy loading
- Responsive images (srcset)
- Optimizar con tools como TinyPNG

---

## 📝 Notas Finales

### Para Desarrolladores

- Lee esta guía antes de cambiar estilos
- Usa variables CSS siempre
- Mantén HTML semántico
- Testea en light/dark mode
- Valida WCAG 2.1 AA

### Para Diseñadores

- El rosa pastel `#ff6b9d` es intentional y coherente
- Glasmorphism es la dirección visual
- Espacios negativos son aliados
- Menos = más (minimalismo moderno)

### Para Futuros Desarrolladores

Si encuentras código que no sigue esto:
1. No lo dejes como está
2. Refactoriza a estándares
3. Actualiza esta guía
4. Mantén coherencia

---

## 🔗 Referencias

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Glasmorphism Design](https://www.glassmorphism.com/)
- [CSS Variables MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Poppins Font](https://fonts.google.com/specimen/Poppins)

---

**Última Actualización**: 5 de Marzo, 2026  
**Versión**: 1.0  
**Responsable**: Equipo de Diseño Cataliza
