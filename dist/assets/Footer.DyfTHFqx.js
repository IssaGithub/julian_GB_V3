import { b as createAstro, c as createComponent, a as renderTemplate, d as renderSlot, e as renderHead, f as addAttribute, m as maybeRenderHead } from './astro/server.DyGNY9cz.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.julian-gorreja-gartenbau.de");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Professioneller Garten- und Landschaftsbau in Heilbronn - Ihr Experte f\xFCr Pflasterarbeiten, Erdarbeiten, Baumschnitt und mehr",
    keywords = "Gartenbau, Landschaftsbau, Pflasterarbeiten, Erdarbeiten, Baumschnitt, Gartenreinigung, Zaunbau, Freibadbau, Heilbronn, Julian Gorreja",
    image = "/api/placeholder/1200/630",
    type = "website",
    canonical
  } = Astro2.props;
  const canonicalURL = canonical || new URL(Astro2.url.pathname, Astro2.site);
  (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate(_a || (_a = __template(['<html lang="de"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Primary Meta Tags --><title>', '</title><meta name="title"', '><meta name="description"', '><meta name="keywords"', '><meta name="author" content="Julian Gorreja"><meta name="robots" content="index, follow"><meta name="language" content="German"><meta name="geo.region" content="DE-BW"><meta name="geo.placename" content="Heilbronn"><meta name="geo.position" content="49.1427;9.2109"><meta name="ICBM" content="49.1427, 9.2109"><!-- Canonical URL --><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:locale" content="de_DE"><meta property="og:site_name" content="Julian Gorreja Gartenbau"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><!-- Performance --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="dns-prefetch" href="https://fonts.gstatic.com"><!-- Structured Data --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "LocalBusiness",\n        "name": "Julian Gorreja Gartenbau",\n        "image": {\n          "@type": "ImageObject",\n          "url": "https://www.julian-gorreja-gartenbau.de/api/placeholder/1200/630"\n        },\n        "description": "Professioneller Garten- und Landschaftsbau in Heilbronn. Spezialist f\xFCr Pflasterarbeiten, Erdarbeiten, Baumschnitt, Gartenreinigung, Zaunbau und Freibadbau.",\n        "address": {\n          "@type": "PostalAddress",\n          "streetAddress": "Werderstr 164",\n          "addressLocality": "Heilbronn",\n          "postalCode": "74074",\n          "addressCountry": "DE"\n        },\n        "geo": {\n          "@type": "GeoCoordinates",\n          "latitude": 49.1427,\n          "longitude": 9.2109\n        },\n        "url": "https://www.julian-gorreja-gartenbau.de",\n        "telephone": "01729136853",\n        "email": "juliangorreja9@gmail.com",\n        "openingHours": [\n          "Mo-Fr 07:00-17:00",\n          "Sa 08:00-14:00",\n          "Su by appointment"\n        ],\n        "serviceArea": {\n          "@type": "GeoCircle",\n          "geoMidpoint": {\n            "@type": "GeoCoordinates",\n            "latitude": 49.1427,\n            "longitude": 9.2109\n          },\n          "geoRadius": "50000"\n        },\n        "services": [\n          "Pflasterarbeiten",\n          "Erdarbeiten", \n          "Baumschnitt",\n          "Gartenreinigung",\n          "Zaunbau",\n          "Freibadbau",\n          "Montagearbeiten"\n        ],\n        "foundingDate": {currentYear - 15},\n        "priceRange": "\u20AC\u20AC"\n      }\n    <\/script>', '</head> <body class="font-sans antialiased bg-stone-50 text-stone-900"> ', "  </body> </html>"])), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(keywords, "content"), addAttribute(canonicalURL, "href"), addAttribute(type, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.site), "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.site), "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/izayt/OneDrive/Dokumente/repo/julian_GB_V3/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-lg sticky top-0 z-50"> <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16"> <!-- Logo --> <div class="flex-shrink-0"> <a href="/" class="text-2xl font-bold text-green-700 hover:text-green-800 transition-colors">
🌿 Julian Gorreja
</a> </div> <!-- Desktop Navigation --> <div class="hidden md:block"> <div class="ml-10 flex items-baseline space-x-4"> <a href="/" class="text-stone-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
Startseite
</a> <a href="/ueber-uns" class="text-stone-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
Über uns
</a> <a href="/leistungen" class="text-stone-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
Leistungen
</a> <a href="/blog" class="text-stone-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
Blog
</a> <a href="/kontakt" class="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
Kontakt
</a> </div> </div> <!-- Mobile menu button --> <div class="md:hidden"> <button id="mobile-menu-button" class="text-stone-700 hover:text-green-700 focus:outline-none focus:text-green-700"> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Mobile Navigation --> <div id="mobile-menu" class="md:hidden hidden"> <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t"> <a href="/" class="text-stone-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">
Startseite
</a> <a href="/ueber-uns" class="text-stone-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">
Über uns
</a> <a href="/leistungen" class="text-stone-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">
Leistungen
</a> <a href="/kontakt" class="bg-green-600 text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium">
Kontakt
</a> </div> </div> </nav> </header> `;
}, "C:/Users/izayt/OneDrive/Dokumente/repo/julian_GB_V3/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-stone-800 text-stone-200"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Kontakt --> <div> <h3 class="text-white font-semibold text-lg mb-4">Kontakt</h3> <div class="space-y-2"> <p> <a href="mailto:juliangorreja9@gmail.com" class="hover:text-green-400 transition-colors">
juliangorreja9@gmail.com
</a> </p> <p> <a href="tel:01729136853" class="hover:text-green-400 transition-colors">
01729136853
</a> </p> </div> </div> <!-- Adresse --> <div> <h3 class="text-white font-semibold text-lg mb-4">Adresse</h3> <address class="not-italic text-stone-300">
Werderstr 164<br>
74074 Heilbronn<br>
Deutschland
</address> </div> <!-- Schnelllinks --> <div> <h3 class="text-white font-semibold text-lg mb-4">Navigation</h3> <ul class="space-y-2"> <li><a href="/" class="hover:text-green-400 transition-colors">Start</a></li> <li><a href="/leistungen" class="hover:text-green-400 transition-colors">Leistungen</a></li> <li><a href="/ueber-uns" class="hover:text-green-400 transition-colors">Über uns</a></li> <li><a href="/kontakt" class="hover:text-green-400 transition-colors">Kontakt</a></li> </ul> </div> </div> <!-- Rechtliches --> <div class="border-t border-stone-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center"> <div class="flex space-x-6 mb-4 sm:mb-0"> <a href="/impressum" class="text-stone-400 hover:text-green-400 transition-colors text-sm">
Impressum
</a> <a href="/datenschutz" class="text-stone-400 hover:text-green-400 transition-colors text-sm">
Datenschutz
</a> </div> <div class="text-stone-400 text-sm">
&copy; 2024 Julian Gorreja Gartenbau. Alle Rechte vorbehalten.
</div> </div> </div> </footer> <!-- DSGVO Cookie Banner --> <div id="cookie-banner" class="fixed bottom-0 left-0 right-0 bg-stone-900 text-white p-4 shadow-lg z-50 hidden"> <div class="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"> <div class="flex-1"> <p class="text-sm">
Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. 
        Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu.
<a href="/datenschutz" class="text-green-400 hover:text-green-300 underline ml-1">Mehr erfahren</a> </p> </div> <div class="flex gap-2"> <button onclick="acceptCookies()" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
Akzeptieren
</button> </div> </div> </div>`;
}, "C:/Users/izayt/OneDrive/Dokumente/repo/julian_GB_V3/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Header as a, $$Footer as b };
