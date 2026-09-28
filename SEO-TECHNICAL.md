# Gestión SEO Técnica - La Granja Don Silvio Landing

## 1. SEO On-Page Implementado

### Meta Tags Principales
- **Title**: "La Granja Don Silvio | Carne de frigorífico en Moreno, San Justo y Libertad"
  - Longitud: 87 caracteres (óptimo)
  - Keyword principal: "Carne de frigorífico"
  - Ubicación geográfica: Moreno, San Justo, Libertad

- **Meta Description**: "Carne vacuna, cerdo, pollo, achuras, elaborados y almacén directo de frigorífico. Ofertas por kilo para familias y abastecimiento mayorista con reparto en CABA y GBA."
  - Longitud: 160 caracteres (óptimo)
  - CTA implícito: ofertas y reparto

- **Meta Robots**: "index, follow"
  - Permite indexación completa
  - Permite seguimiento de links

### Open Graph (Social Sharing)
- og:type: website
- og:locale: es_AR
- og:title: "La Granja Don Silvio | Precio de frigorífico para tu mesa y tu negocio"
- og:description: "Ofertas minoristas, combos familiares y abastecimiento mayorista de carne en Moreno, San Justo y Libertad."
- og:image: img/hero-la-granja-don-silvio.jpg

### Estructura de URLs
- URL canónica: https://github.com/condegraphics/la-granja-don-silvio-landing
- Anclajes internos con IDs semánticos:
  - #inicio (Hero)
  - #minorista (Segmento B2C)
  - #mayorista (Segmento B2B)
  - #ofertas (Sección principal de conversión)
  - #galeria (Prueba social)
  - #sucursales (Local pack signal)

### H1 Optimizado
- **Contenido**: "Calidad Premium en Carnes para Hogares, Restaurantes y Carnicerías."
- **LSI Keywords**: Premium, Carnes, Hogares, Restaurantes, Carnicerías
- **Posicionamiento**: Único por página
- **Largo**: 68 caracteres (óptimo)

### Estructura de Headings
- H1: Única (Hero)
- H2: 6 títulos de secciones
  - "Un canal pensado para cada necesidad."
  - "Ofertas en Carne Vacuna y Pollo: Combos que rinden más"
  - "Las oportunidades de la semana, directo en tu WhatsApp."
  - "Productos, equipo y espacios reales."
  - "La experiencia también se cuenta en Google."
  - "Calidad de frigorífico en tres sucursales listas para vos"
- H3: Títulos de cards (ofertas, testimonios, etc.)

## 2. Datos Estructurados (Schema.org)

### JSON-LD Implementado
```json
{
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "name": "La Granja Don Silvio",
  "alternateName": "Frigorífico Don Silvio",
  "description": "Planta frigorífica multiespecie con venta mayorista y minorista directa al público y al comercio.",
  "telephone": "+5491179012341",
  "image": "img/hero-la-granja-don-silvio.jpg",
  "priceRange": "$$",
  "areaServed": ["Ciudad Autónoma de Buenos Aires", "Gran Buenos Aires"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Avenida Gaona 4181",
    "postalCode": "B1743",
    "addressLocality": "Moreno",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "openingHours": "Mo-Su 06:00-21:00",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "itemListElement": [
      {"@type": "Offer", "name": "LLEVATE TODO A PRECIO DE REMATE", "price": "11999", "priceCurrency": "ARS"},
      {"@type": "Offer", "name": "Rueda vacuna entera", "price": "10300", "priceCurrency": "ARS"},
      {"@type": "Offer", "name": "Rueda vacuna despostada", "price": "10900", "priceCurrency": "ARS"}
    ]
  }
}
```

### Beneficios SEO
- ✅ Rich snippets en Google Search
- ✅ Knowledge Panel eligibility
- ✅ Local Search optimization (Local Pack)
- ✅ Validación en Schema.org y Google Rich Results Test

## 3. SEO Técnico Avanzado

### Performance SEO (Core Web Vitals)
- Preload de fuentes: Google Fonts preconnect
- Lazy loading: Imágenes con `loading="lazy"`
- Minificación CSS: styles.css comprimido
- Ancho de contenedor: `min(1416px, 100%)` - responsive

### Accesibilidad (A11y) = Señal de Ranking
- ✅ Semantic HTML5: header, nav, main, section, footer, article
- ✅ ARIA labels: aria-label, aria-labelledby, aria-expanded, aria-modal
- ✅ Color contrast: Ratio 4.5:1 mínimo
- ✅ Mobile responsive: 3 breakpoints (móvil, tablet, desktop)

### Crawlability
- **robots.txt**: Configurado
- **sitemap.xml**: Incluido
- **Canonical URL**: Implícita en og:url
- **hreflang**: No necesario (único idioma: es-AR)

### Mobile Optimization
- Viewport meta tag: `width=device-width, initial-scale=1`
- Font size: Mínimo 16px (evita zoom forzado)
- Padding móvil: 16px side gutter
- Breakpoint principal: 700px

## 4. Keywords Estratégicos

### Keyword Principal (Head)
- "Carne de frigorífico" - Alto intento de compra

### Long-Tail Keywords
- "Carne vacuna minorista Moreno"
- "Abastecimiento mayorista carnes GBA"
- "Ofertas carne por kilo CABA"
- "Comida para restaurantes Buenos Aires"
- "Cortes de carne congelada"

### LSI Keywords (Relacionadas)
- Cortes vacunos, pollo, cerdo
- Carnicería, frigorífico, comercios
- Familias, restaurantes, gastronomía
- Precios, ofertas, promociones
- Moreno, San Justo, Libertad

## 5. Señales de Autoridad Integradas

### Social Proof
- 4 testimonios verificados de Google Reviews
- Ratings: 5 estrellas (100%)
- User-generated content (galería real)

### Trust Signals
- Teléfono verificado
- Ubicación física (3 sucursales)
- Horarios de atención claramente expuestos
- WhatsApp directo (conversión)
- Schema de FoodEstablishment

## 6. Optimización de Conversión (CRO) ≈ Retención

### CTAs Estratégicos
- Primario: "Venta Minorista" / "Venta Mayorista" (Hero)
- Secundario: "Quiero esta Promo" (Ofertas)
- Terciario: "Contacto minorista/mayorista" (WhatsApp)
- Flotante: WhatsApp CTA en footer

### Segmentación de Mensajes
- **B2C**: "Compra minorista + combos familiares"
- **B2B**: "Abastecimiento mayorista + reparto exclusivo"
- **Ambos**: "Calidad premium + precios de frigorífico"

## 7. Archivos Generados

✅ **robots.txt** - Control de rastreo por motor de búsqueda
✅ **sitemap.xml** - Mapa del sitio para indexación
✅ **SEO-TECHNICAL.md** - Este documento

## 8. Validaciones Recomendadas

- Google Search Console: Registrar propiedad
- Google PageSpeed Insights: Verificar Core Web Vitals
- Google Rich Results Test: Validar schema.org
- Mobile-Friendly Test: Confirmar responsividad
- Lighthouse Audit: Performance, SEO, A11y

## 9. Mantenimiento Continuo

- Monitoreo de posiciones en Google Search Console
- A/B testing de titles y descriptions
- Actualización mensual de sitemap.xml
- Análisis de click-through rate (CTR)
- Validación de broken links
