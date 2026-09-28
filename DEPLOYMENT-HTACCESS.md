# Guía de Instalación .htaccess | lagranjadonsilvio.com

**Versión:** 1.0  
**Fecha:** 2026-09-27  
**Responsable:** Manuel Conde - Conde Graphics SEO Agency  
**Ambiente:** Producción - lagranjadonsilvio.com

---

## 📋 Resumen Ejecutivo

Este documento describe la instalación y configuración del archivo `.htaccess` en el servidor de producción de La Granja Don Silvio. El archivo implementa:

✅ Redirecciones 301 de WordPress legacy → HTML nuevo  
✅ Force HTTPS en todos los accesos  
✅ Normalización www/non-www (canonical)  
✅ Compresión GZIP (Core Web Vitals)  
✅ Caché estratégico de navegador  
✅ Bloqueo de acceso a archivos sensibles  
✅ Manejo 404 profesional  
✅ Seguridad HTTP headers  

---

## 🔧 Requisitos Previos

### Servidor
- **Servidor web:** Apache 2.4+
- **Módulos habilitados:** mod_rewrite, mod_deflate, mod_expires, mod_headers
- **Acceso:** Administrador/SSH o cPanel/Plesk

### Dominio
- **Nombre de dominio:** lagranjadonsilvio.com
- **Certificado SSL/TLS:** Activo y válido (Let's Encrypt recomendado)
- **DNS:** Propagado correctamente

---

## 📦 Archivos a Deploying

```
.htaccess                    # Reglas de reescritura y seguridad
404.html                     # Página de error 404 personalizada
robots.txt                   # Control de crawling
sitemap.xml                  # Mapa del sitio
SEO-TECHNICAL.md            # Documentación SEO
DEPLOYMENT-HTACCESS.md      # Este archivo
```

---

## 🚀 Pasos de Instalación

### Paso 1: Verificar que mod_rewrite está habilitado

**En Linux/Apache:**
```bash
a2enmod rewrite
a2enmod deflate
a2enmod expires
a2enmod headers
systemctl restart apache2
```

**Verificar:**
```bash
apache2ctl -M | grep rewrite
```

Salida esperada: `rewrite_module (shared)`

---

### Paso 2: Verificar configuración del VirtualHost

Editar el archivo de configuración del VirtualHost de Apache:

**Ruta típica:** `/etc/apache2/sites-available/lagranjadonsilvio.com.conf`

```apache
<VirtualHost *:80>
  ServerName lagranjadonsilvio.com
  ServerAlias www.lagranjadonsilvio.com
  DocumentRoot /var/www/lagranjadonsilvio.com/html

  <Directory /var/www/lagranjadonsilvio.com/html>
    AllowOverride All
    Require all granted
  </Directory>

  # Redireccionar HTTP a HTTPS
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</VirtualHost>

<VirtualHost *:443>
  ServerName lagranjadonsilvio.com
  ServerAlias www.lagranjadonsilvio.com
  DocumentRoot /var/www/lagranjadonsilvio.com/html

  SSLEngine on
  SSLCertificateFile /etc/letsencrypt/live/lagranjadonsilvio.com/fullchain.pem
  SSLCertificateKeyFile /etc/letsencrypt/live/lagranjadonsilvio.com/privkey.pem

  <Directory /var/www/lagranjadonsilvio.com/html>
    AllowOverride All
    Require all granted
  </Directory>
</VirtualHost>
```

Guardar y recargar:
```bash
systemctl reload apache2
```

---

### Paso 3: Subir archivo .htaccess al servidor

**Opción A: Via SSH/SFTP**
```bash
scp .htaccess usuario@lagranjadonsilvio.com:/var/www/lagranjadonsilvio.com/html/
```

**Opción B: Via cPanel File Manager**
1. Loguearse en cPanel
2. Navegr a `Public_html` → `File Manager`
3. Subir `.htaccess` a la raíz del dominio
4. Cambiar permisos a `644` (lectura)

**Opción C: Via Plesk**
1. Loguearse en Plesk
2. Navegar a `Hosting & Subscriptions` → Dominio → `File Manager`
3. Subir `.htaccess` a la raíz
4. Establecer permisos `644`

---

### Paso 4: Verificar permisos del archivo

```bash
chmod 644 /var/www/lagranjadonsilvio.com/html/.htaccess
chown www-data:www-data /var/www/lagranjadonsilvio.com/html/.htaccess
```

---

### Paso 5: Subir página 404 personalizada

```bash
scp 404.html usuario@lagranjadonsilvio.com:/var/www/lagranjadonsilvio.com/html/
chmod 644 /var/www/lagranjadonsilvio.com/html/404.html
```

---

## ✅ Verificación Post-Instalación

### Test 1: Verificar HTTPS Force

```bash
curl -I http://lagranjadonsilvio.com
```

**Esperado:** HTTP 301 → HTTPS

```
HTTP/1.1 301 Moved Permanently
Location: https://lagranjadonsilvio.com/
```

---

### Test 2: Verificar Redirección www/non-www

```bash
curl -I https://www.lagranjadonsilvio.com
```

**Esperado:** HTTP 301 → non-www

```
HTTP/1.1 301 Moved Permanently
Location: https://lagranjadonsilvio.com/
```

---

### Test 3: Verificar Bloqueo de rutas WordPress

```bash
curl -I https://lagranjadonsilvio.com/wp-admin
curl -I https://lagranjadonsilvio.com/wp-login.php
curl -I https://lagranjadonsilvio.com/blog/
```

**Esperado:** HTTP 301 → raíz

```
HTTP/1.1 301 Moved Permanently
Location: https://lagranjadonsilvio.com/
```

---

### Test 4: Verificar 404 Personalizado

```bash
curl -I https://lagranjadonsilvio.com/pagina-no-existe
```

**Esperado:** HTTP 404 con contenido de 404.html

```
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8
```

---

### Test 5: Verificar Compresión GZIP

```bash
curl -I -H "Accept-Encoding: gzip" https://lagranjadonsilvio.com/
```

**Esperado:** Header `Content-Encoding: gzip`

```
Content-Encoding: gzip
```

---

### Test 6: Verificar Caché del Navegador

```bash
curl -I https://lagranjadonsilvio.com/styles.css
curl -I https://lagranjadonsilvio.com/img/logo-la-granja-don-silvio-2026-.webp
```

**Esperado:** Header `Cache-Control` y `Expires`

```
Cache-Control: max-age=2592000
Expires: Thu, 27 Oct 2026 21:57:00 GMT
```

---

## 🔐 Monitoreo y Mantenimiento

### Logs de Apache

**Ubicación:** `/var/www/log/lagranjadonsilvio.com/` o `/var/log/apache2/`

**Ver errores 404:**
```bash
tail -f /var/log/apache2/error.log | grep 404
```

**Ver redirecciones 301:**
```bash
grep "301" /var/log/apache2/access.log
```

---

### Google Search Console

1. Verificar que Google indexa correctamente
2. Revisar errores de rastreo (Cobertura)
3. Monitorear búsquedas (Performance)
4. Validar que no hay "Duplicate content" (canonical working)

---

### Monitoreo de Performance

**Herramientas recomendadas:**
- Google PageSpeed Insights
- Google Lighthouse Audit
- GTmetrix
- WebPageTest

**Métricas clave post-.htaccess:**
- ✅ Reducción de tamaño página (GZIP)
- ✅ Caché efectivo en navegadores
- ✅ Sin warnings de duplicate content
- ✅ Redirecciones 301 sin cadenas

---

## 🚨 Troubleshooting

### Problema: "Internal Server Error" (500)

**Causas:**
- mod_rewrite no habilitado
- Sintaxis incorrecta en .htaccess
- Permisos insuficientes

**Solución:**
```bash
# 1. Verificar mod_rewrite
a2enmod rewrite

# 2. Validar sintaxis .htaccess
apachectl configtest

# 3. Revisar error.log
tail -f /var/log/apache2/error.log

# 4. Corregir permisos
chmod 644 .htaccess
chown www-data:www-data .htaccess
```

---

### Problema: Las redirecciones no funcionan

**Causas:**
- AllowOverride no habilitado en VirtualHost
- .htaccess no está en raíz correcta

**Solución:**
```apache
# En VirtualHost, verificar:
<Directory /var/www/lagranjadonsilvio.com/html>
  AllowOverride All  # ← Debe estar en All
</Directory>
```

---

### Problema: Caché demasiado agresiva (usuarios ven versión vieja)

**Solución:** Limpiar caché del navegador o usar CTRL+SHIFT+DEL

**Para desarrolladores:** Añadir parámetro de versión en URLs
```html
<link rel="stylesheet" href="styles.css?v=2026.09.27">
<script src="script.js?v=2026.09.27"></script>
```

---

## 📊 Impacto SEO Esperado

### Antes del .htaccess (WordPress legacy)
- ❌ Múltiples versiones de URLs (duplicate content)
- ❌ URLs con /index.php, ?p=123, etc.
- ❌ Rutas /wp-admin, /wp-json accesibles (security risk)
- ❌ Sin compresión GZIP
- ❌ Sin caché efectiva

### Después del .htaccess (HTML limpio)
- ✅ URLs limpias y canónicas
- ✅ 301 redirects preservan autoridad SEO
- ✅ Rutas WordPress bloqueadas
- ✅ GZIP comprimiendo (↓ 70% tamaño)
- ✅ Caché efectiva (↓ latencia)
- ✅ Seguridad mejorada (HSTS, CSP, etc.)
- ✅ Core Web Vitals optimizados

**Resultado esperado:** Mejora de 15-25% en ranking para keywords principales en 4-8 semanas.

---

## 🔄 Rollback (Reversión)

Si hay problemas, revertir es simple:

```bash
# Opción 1: Eliminar .htaccess
rm /var/www/lagranjadonsilvio.com/html/.htaccess

# Opción 2: Renombrarlo
mv /var/www/lagranjadonsilvio.com/html/.htaccess /var/www/lagranjadonsilvio.com/html/.htaccess.bak

# Recargar Apache
systemctl reload apache2
```

---

## 📞 Soporte

**Contacto SEO:** Manuel Conde - Conde Graphics SEO Agency  
**Email:** info@condegraphics.com  
**WhatsApp:** +54 9 11 7901-2341

---

## 📝 Historial de Cambios

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | 2026-09-27 | Versión inicial - Migración WordPress → HTML |

---

**Documento finalizado:** 2026-09-27 21:57 ART  
**Próxima revisión recomendada:** 2026-12-27 (post-holiday check)
