import { site } from "./site";

export const logoHeader = {
    logo: "../public/media/logo-dark.webp",
    ancho: 294,
    alto: 61,
    resolucion: 600,
    alt: site.brandName
}

export const navAriaLabel = {
    titulo: "Menú de navegación principal",
    abrir: "Abrir menú de navegación",
    cerrar: "Cerrar menú de navegación"
}

export const componentes = [
  { href: site.soluciones, label: "Soluciones" },
  { href: site.desarrolloproductos, label: "Desarrollo de productos" },
  { href: site.clientes, label: "Clientes" },
  { href: site.modeloframfoods, label: "Modelo FramFoods" },
  { href: site.nosotros, label: "Nosotros" },
  { href: site.testimonios, label: "Testimonios" },
  { href: site.contacto, label: "Contacto" },
  { href: "#", label: "Idioma", primary: true },
];
