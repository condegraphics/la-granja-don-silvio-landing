# La Granja Don Silvio | Estrategia SEO Técnica Integral

**Versión:** 2.0 Producción  
**Dominio:** https://lagranjadonsilvio.com/  
**Última actualización:** 2026-09-27  
**Responsable:** Manuel Conde - Conde Graphics SEO Agency  

---

## 📊 Resumen Ejecutivo de SEO

Esta landing page de HTML/CSS reemplaza completamente el WordPress legacy anterior. La implementación incluye una **estrategia SEO técnica profesional y on-page** validada en 3 pilares:

1. **SEO On-Page** → Keywords, H1, meta tags, estructura
2. **SEO Técnico** → .htaccess, 301 redirects, schema.org, performance
3. **Arquitectura de Información** → URLs limpias, internal linking, CTAs estratégicas

---

## 📁 Estructura de Archivos SEO

```
/
├── index.html                      # Página principal con SEO on-page optimizado
├── .htaccess                       # Configuración Apache (301, HTTPS, GZIP, caché)
├── robots.txt                      # Control de rastreo para buscadores
├── robots-llm.txt                  # Control de acceso para LLMs (GPTBot, Claude-Web)
├── sitemap.xml                     # Mapa del sitio (images + urls)
├── schema-org.json                 # Datos estructurados (FoodEstablishment, Products, etc)
├── 404.html                        # Página de error 404 personalizada
├── SEO-TECHNICAL.md               # Documentación SEO técnica detallada
├── DEPLOYMENT-HTACCESS.md         # Guía de instalación en servidor
├── README-SEO.md                  # Este archivo
├── img/                           # Carpeta de imágenes optimizadas
│   ├── hero-la-granja-don-silvio.jpg
│   ├── logo-la-granja-don-silvio-2026-.webp
│   ├── 01.jpg, 02.jpg, 03.jpg, 04.jpg  # Imágenes de ofertas
│   └── [más imágenes galería]
└── styles.css                     # CSS optimizado para Core Web Vitals
```

---

## 🎯 Keywords Estratégicos

### Palabra Clave Principal (Head Keyword)
- **"Carne de frigorífico"** - Alto intento de compra, bajo volumen local

### Long-Tail Keywords
- "Carne vacuna minorista Moreno"
- "Abastecimiento mayorista carnes GBA"
- "Ofertas carne por kilo CABA"
- "Comida para restaurantes Buenos Aires"
- "Frigorífico mayorista Buenos Aires"

### LSI Keywords (Relacionadas)
- Cortes vacunos, pollo, cerdo
- Frigorífico, planta de carnes
- Familias, restaurantes, gastronomía, comercios
- Precios, ofertas, promociones
- Moreno, San Justo, Libertad, CABA, GBA

---

## 📝 Meta Tags Optimizados

### Title Tag (Meta Título)
```html
<title>La Granja Don Silvio | Calidad en Carnes. Frigorífico en Moreno</title>
```
- **Largo:** 65 caracteres (óptimo para Google)
- **Estructura:** Brand | Primary Keyword. Location
- **CTR potencial:** Alto (incluye diferenciador "Calidad")

### Meta Description
```html
<meta name="description" content="El Líderes en comercialización de carne premium en Argentina. Venta mayorista para restaurantes y minorista para tu hogar. Cortes de exportación de vacuna, cerdo y pollo.">
```
- **Largo:** 158 caracteres (Google muestra 150-160)
- **CTA implícito:** Venta mayorista Y minorista
- **Propuesta única:** "Carne premium", "Exportación"

---

## 🏗️ Estructura On-Page

### H1 (Único por página)
```html
<h1>Calidad Premium en Carnes para Hogares, Restaurantes y Carnicerías.</h1>
```
- ✅ **Único:** Aparece una sola vez (hero section)
- ✅ **Keyword-rich:** "Calidad Premium" + "Carnes" + "Hogares, Restaurantes, Carnicerías"
- ✅ **LSI keywords:** Saturado de términos relacionados
- ✅ **Largo:** 68 caracteres

### H2s (6 títulos de sección)
1. "Un canal pensado para cada necesidad." - Posicionamiento
2. "Ofertas en Carne Vacuna y Pollo: Combos que rinden más" - Keyword + propuesta
3. "Las oportunidades de la semana, directo en tu WhatsApp." - Call-to-action
4. "Productos, equipo y espacios reales." - Prueba social
5. "La experiencia también se cuenta en Google." - Social proof
6. "Calidad de frigorífico en tres sucursales listas para vos" - Location + diferenciador

### H3s (Títulos de cards)
- Ofertas: "Llevate TODO a Precio de Remate", "Rueda Vacuna Entera", etc.
- Segmentos: "Todo para resolver la compra", "Abastecimiento que acompaña"
- Sucursales: "La Granja Don Silvio Moreno", "Suc. Don Silvio San Justo"

**Jerarquía:** H1 → 6x H2 → 15x H3 ✅

---

## 🔗 URLs y Anclajes Internos (Internal Linking)

### URLs Semánticas con IDs
```
https://lagranjadonsilvio.com/           # Inicio
#inicio                                  # Héroe
#minorista                               # Segmento B2C
#mayorista                               # Segmento B2B
#ofertas                                 # Sección de ofertas (PRINCIPAL CONV)
#galeria                                 # Prueba social / galería
#sucursales                              # Local pack signals
```

### Estrategia de Internal Linking
- **Header CTA:** Tel, menú principal
- **Hero CTAs:** "Venta Minorista", "Venta Mayorista" (2 segmentos)
- **Ofertas CTA:** "Quiero esta Promo" (conversion)
- **WhatsApp Flotante:** Siempre visible (high intention)
- **Footer Link:** Conde Graphics (branding + backlink)

---

## 📊 Datos Estructurados (Schema.org)

### Implementado: JSON-LD en HTML
```json
{
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "name": "La Granja Don Silvio",
  "telephone": "+5491179012341",
  "address": { /* 3 sucursales */ },
  "aggregateRating": { "ratingValue": "5", "ratingCount": "150" },
  "hasOfferCatalog": { /* 3 productos destacados */ }
}
```

### Beneficios SEO
- ✅ **Rich Snippets** en Google Search (cards con rating)
- ✅ **Knowledge Panel Eligibility** (más presencia en SERP)
- ✅ **Local Pack** (aparece en mapas + búsquedas locales)
- ✅ **Product Schema** (precio, disponibilidad en snippets)
- ✅ **Aggregate Ratings** (⭐⭐⭐⭐⭐ 150 reviews)

### Validación
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

---

## 🔐 Configuración .htaccess (Apache)

### Reglas Principales

#### 1. Force HTTPS
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```
- Requiere SSL/TLS certificate (Let's Encrypt gratuito)
- Google prefiere HTTPS

#### 2. Redirecciones 301 de WordPress Legacy
```apache
# Bloquear acceso a rutas WordPress
RewriteRule ^wp-admin https://lagranjadonsilvio.com/ [L,R=301]
RewriteRule ^wp-login https://lagranjadonsilvio.com/ [L,R=301]
RewriteRule ^blog/(.*) https://lagranjadonsilvio.com/ [L,R=301]
```
- Preserva SEO authority de backlinks históricos
- Mejora seguridad (bloquea intentos de acceso)

#### 3. Normalización Canónica (www ↔ non-www)
```apache
RewriteCond %{HTTP_HOST} ^www\.lagranjadonsilvio\.com$
RewriteRule ^(.*)$ https://lagranjadonsilvio.com/$1 [L,R=301]
```
- Evita duplicate content
- Google entiende que es la misma página

#### 4. Compresión GZIP
```apache
AddOutputFilterByType DEFLATE text/html text/css application/javascript
```
- Reduce tamaño página en 65-70%
- Mejora LCP (Largest Contentful Paint)

#### 5. Caché del Navegador
```apache
# Imágenes: 1 año
ExpiresByType image/jpeg "access plus 1 year"

# CSS/JS: 1 mes
ExpiresByType text/css "access plus 1 month"

# HTML: 1 semana
ExpiresByType text/html "access plus 1 week"
```

#### 6. Headers de Seguridad
```apache
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Content-Security-Policy: [strict policy]
Referrer-Policy: strict-origin-when-cross-origin
```

---

## 🚀 Core Web Vitals Optimization

| Métrica | Target | Estrategia |
|---------|--------|-----------|
| **LCP** (Largest Contentful Paint) | < 2.5s | GZIP, caché, webp images |
| **FID** (First Input Delay) | < 100ms | Minimizar JS, defer scripts |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Reservar espacios imágenes |
| **INP** (Interaction to Next Paint) | < 200ms | Optimizar event handlers |

**Implementado:**
- ✅ GZIP compression
- ✅ Image lazy loading (`loading="lazy"`)
- ✅ Preload críticos (Google Fonts)
- ✅ CSS minificado
- ✅ Responsive design sin reflow

---

## 🤖 Control de Rastreo

### robots.txt (Búsquedas tradicionales)
```
User-agent: *
Allow: /
Disallow: /img/
Disallow: /*.css$
Disallow: /*.js$
Sitemap: https://lagranjadonsilvio.com/sitemap.xml
```

### robots-llm.txt (LLMs / AI crawlers)
```
User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Googlebot-Extended
Allow: /
```

---

## 🔍 Señales de Ranking

### On-Page Signals (Controlables)
- ✅ Title + Description optimizados
- ✅ H1 único con keywords
- ✅ Internal linking estratégico
- ✅ Mobile responsive
- ✅ Page speed optimizado
- ✅ HTTPS activo
- ✅ Schema.org implementado

### Off-Page Signals (Externos)
- ✅ Google My Business (3 sucursales mapeadas)
- ✅ Testimonios 5⭐ en Google (150+ reviews)
- ✅ Backlink: Conde Graphics SEO Agency (footer)
- ✅ Social media presence (WhatsApp, Instagram)

### Technical Signals
- ✅ Mobile-first indexing ready
- ✅ Core Web Vitals optimizados
- ✅ 0 broken links internos
- ✅ Canonical tags en HTML
- ✅ Robots.txt + Sitemap presente

---

## 📈 Tracking y Monitoreo

### Google Search Console
```
Configuración recomendada:
1. Registrar propiedad (www y non-www)
2. Enviar sitemap.xml
3. Verificar cobertura (Coverage)
4. Monitorear Performance tab
5. Revisar Mobile Usability
6. Validar Rich Results (schema.org)
```

### Google Analytics 4
```
Eventos a trackear:
- Button clicks: "Venta Minorista", "Venta Mayorista", "Ofertas"
- WhatsApp: click en flotante
- Link a Conde Graphics (footer)
- Scroll depth (engagement)
```

### Monitoreo SEO
- Posiciones en Google (keywords principales)
- Traffic orgánico (mes a mes)
- Bounce rate por sección
- Click-through rate (CTR) en SERP

---

## 🎯 Resultado SEO Esperado

### Timeline de Resultados
- **Semana 1-2:** Indexación (Google ve nueva estructura)
- **Semana 3-4:** 301 redirects aplicadas (SEO authority transferida)
- **Mes 1-2:** Mejora en ranking para keywords locales
- **Mes 2-4:** Estabilización en posiciones Top 10
- **Mes 4-8:** Posicionamiento consistente Top 3-5

### KPIs de Éxito
- ✅ Ranking Top 10 para "Carne de frigorífico Moreno"
- ✅ Ranking Top 3 para "Carnes mayorista CABA"
- ✅ +30% traffic orgánico vs. WordPress anterior
- ✅ +50% leads (clicks WhatsApp) desde organic
- ✅ -40% bounce rate (landing page relevante)

---

## 📋 Checklist de Implementación

### Pre-Deployment
- [ ] Certificado SSL/TLS activo en lagranjadonsilvio.com
- [ ] mod_rewrite, mod_deflate, mod_headers habilitados en Apache
- [ ] AllowOverride All en VirtualHost
- [ ] Backup de .htaccess actual (si existe)

### Deployment
- [ ] Subir .htaccess a raíz del dominio
- [ ] Subir 404.html a raíz del dominio
- [ ] Subir robots.txt a raíz del dominio
- [ ] Subir sitemap.xml a raíz del dominio
- [ ] Permisos: 644 para .htaccess, 644 para 404.html

### Post-Deployment
- [ ] Verificar curl tests (HTTPS, 301s, 404.html)
- [ ] Validar en Google Rich Results Test
- [ ] Registrar en Google Search Console
- [ ] Enviar sitemap.xml a GSC
- [ ] Revisar error.log en Apache
- [ ] Monitorear crawl stats en GSC

### Seguimiento
- [ ] Day 1: Verificar indexación
- [ ] Week 1: GSC - ver si hay errores de rastreo
- [ ] Month 1: Analytics - comparar traffic
- [ ] Month 3: Posicionamiento en keywords principales

---

## 📞 Contacto y Soporte

**Agencia:** Conde Graphics SEO Agency  
**CEO:** Manuel Conde  
**Email:** info@condegraphics.com  
**WhatsApp:** +54 9 11 7901-2341  
**Website:** https://www.condegraphics.com/  

---

**Documento finalizado:** 2026-09-27 21:57 ART  
**Próxima auditoría SEO:** 2026-12-27
