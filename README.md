# Julian Gartenbau - Moderne Website

Eine moderne, responsive und DSGVO-konforme Website für einen selbstständigen Garten- und Landschaftsbauer, entwickelt mit Astro.js und Tailwind CSS.

## 🌿 Features

- **Modern & Responsive**: Mobile-First Design mit Tailwind CSS
- **Performance-optimiert**: Astro.js für schnelle Ladezeiten
- **DSGVO-konform**: Cookie-Banner und Datenschutzerklärung
- **SEO-optimiert**: Meta-Tags und strukturierte Daten
- **Kontaktformular**: Funktionales Formular mit Validierung
- **Professionelles Design**: Natürliche Farbpalette in Grün- und Erdtönen

## 📁 Projektstruktur

```
julian-gartenbau-website/
├── src/
│   ├── components/
│   │   ├── Header.astro          # Navigation und Header
│   │   └── Footer.astro          # Footer mit Cookie-Banner
│   ├── layouts/
│   │   └── Layout.astro          # Haupt-Layout mit Meta-Tags
│   └── pages/
│       ├── index.astro           # Startseite
│       ├── ueber-uns.astro       # Über uns Seite
│       ├── leistungen.astro      # Leistungen im Detail
│       ├── kontakt.astro         # Kontakt mit Formular
│       ├── impressum.astro       # Rechtliches Impressum
│       └── datenschutz.astro     # DSGVO-Datenschutzerklärung
├── public/
│   └── favicon.svg               # Website-Icon
├── astro.config.mjs             # Astro-Konfiguration
├── tailwind.config.mjs          # Tailwind CSS-Konfiguration
└── package.json                 # Abhängigkeiten und Scripts
```

## 🛠️ Installation & Setup

### Voraussetzungen
- Node.js (Version 18 oder höher)
- npm oder yarn

### Erste Schritte

1. **Abhängigkeiten installieren**
   ```bash
   npm install
   ```

2. **Entwicklungsserver starten**
   ```bash
   npm run dev
   ```
   Die Website ist dann unter `http://localhost:4321` erreichbar.

3. **Für Produktion bauen**
   ```bash
   npm run build
   ```

4. **Build-Vorschau**
   ```bash
   npm run preview
   ```

## 🎨 Anpassung der Website

### Firmeninformationen ändern

**Kontaktdaten aktualisieren** in:
- `src/components/Footer.astro`
- `src/pages/kontakt.astro`
- `src/pages/impressum.astro`
- `src/pages/datenschutz.astro`

Suche nach:
- `kontakt@julian-gartenbau.de`
- `+49 (0) 123 456 789`
- `Musterstraße 123, 12345 Musterstadt`

### Logo und Branding

1. **Firmenname ändern**:
   - In `src/components/Header.astro` (Logo-Text)
   - In allen `<title>` Tags in den Seiten

2. **Favicon anpassen**:
   - Ersetze `public/favicon.svg` mit eigenem Logo

### Farben anpassen

Die Farbpalette kann in `tailwind.config.mjs` geändert werden:

```javascript
colors: {
  green: {
    // Deine Grüntöne hier
  },
  stone: {
    // Deine Erdtöne hier
  }
}
```

### Leistungen anpassen

In `src/pages/leistungen.astro` und `src/pages/index.astro`:
- Leistungsbeschreibungen ändern
- Neue Leistungen hinzufügen
- Bilder ersetzen (aktuell Platzhalter)

## 📧 Kontaktformular einrichten

Das Kontaktformular in `src/pages/kontakt.astro` ist vorbereitet für einen Backend-Service.

### Für Netlify Forms:
```html
<form netlify name="contact">
```

### Für Formspree:
```html
<form action="https://formspree.io/f/DEINE_FORM_ID" method="POST">
```

### Eigener Server:
Ändere das JavaScript in `src/pages/kontakt.astro` für deinen API-Endpoint.

## 🖼️ Bilder hinzufügen

1. **Produktbilder**:
   - Lege Bilder in `public/images/` ab
   - Ersetze Platzhalter-URLs (`/api/placeholder/...`) 
   - Empfohlene Formate: WebP oder JPEG
   - Optimale Größen: 600x400px für Dienstleistungen

2. **Beispiel**:
   ```astro
   <img src="/images/pflasterarbeiten.jpg" alt="Pflasterarbeiten" />
   ```

## 🔧 Weitere Konfiguration

### SEO verbessern

1. **Meta-Beschreibungen anpassen** in jeder Seite
2. **Strukturierte Daten hinzufügen** für lokale Suche
3. **Sitemap generieren**:
   ```bash
   npx astro add sitemap
   ```

### Analytics hinzufügen

Für Google Analytics oder andere Tools, füge den Tracking-Code in `src/layouts/Layout.astro` hinzu.

### Cookie-Banner anpassen

Das Cookie-Banner ist in `src/components/Footer.astro` implementiert. Passe die Texte und Funktionalität nach deinen Bedürfnissen an.

## 📱 Responsive Design

Die Website ist mobile-first entwickelt:
- Breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
- Alle Komponenten sind vollständig responsive
- Touch-optimierte Navigation auf mobilen Geräten

## 🚀 Deployment

### Netlify (empfohlen)
1. GitHub-Repository verbinden
2. Build-Command: `npm run build`
3. Publish-Directory: `dist`
4. Automatische Deployments bei Git-Push

### Vercel
1. GitHub-Repository importieren
2. Framework: Astro
3. Automatische Konfiguration

### Eigener Server
1. `npm run build` ausführen
2. `dist/` Ordner auf Server hochladen
3. Webserver auf `dist/` verweisen

## 📄 Rechtliche Hinweise

### DSGVO-Compliance

- ✅ Cookie-Banner implementiert
- ✅ Datenschutzerklärung vorhanden
- ✅ Impressum vollständig
- ⚠️ **Wichtig**: Texte sind Platzhalter und müssen angepasst werden!

### Anpassungen erforderlich:
- Alle Kontaktdaten ersetzen
- Umsatzsteuer-ID eintragen
- Handelsregister-Nummer aktualisieren
- Rechtliche Texte prüfen lassen

## 💡 Tipps & Best Practices

1. **Bilder optimieren**: Verwende WebP-Format für bessere Performance
2. **Regelmäßige Updates**: Halte Astro und Tailwind aktuell
3. **Testing**: Teste die Website auf verschiedenen Geräten
4. **Backup**: Sichere regelmäßig dein Git-Repository
5. **Content**: Aktualisiere Inhalte regelmäßig für besseres SEO

## 🆘 Häufige Probleme

### Build-Fehler
```bash
# Dependencies neu installieren
rm -rf node_modules package-lock.json
npm install
```

### TypeScript-Fehler
```bash
# Type-Check ausführen
npm run astro check
```

### Tailwind-Styles werden nicht geladen
- Prüfe `tailwind.config.mjs` content-Pfade
- Stelle sicher, dass Klassen korrekt geschrieben sind

## 📞 Support

Bei Fragen zur Website-Entwicklung:
- Astro Dokumentation: [https://docs.astro.build](https://docs.astro.build)
- Tailwind CSS: [https://tailwindcss.com](https://tailwindcss.com)

---

**Erstellt mit ❤️ für Julian Gartenbau**

Viel Erfolg mit deiner neuen Website! 🌱 