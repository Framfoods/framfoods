import { site } from "./site";

export const logoFooter = {
    logo: "../public/media/logo-dark.webp?width=600",
    ancho: 252,
    alto: 52,
    resolucion: 500,
    alt: site.brandName,
    title: site.regresarInicio
}

export const navAriaLabel = {
    titulo: "Menú de navegación footer",
}

export const derechosReservados = {
  anio: new Date().getFullYear(),
  marca: site.brandName,
  frase: "Todos los derechos reservados.",
};

export const menus = [
  {
    titulo: "",
    links: [
      { label: "Servicios", href: site.desarrolloproductos },
      { label: "Clientes", href: site.clientes },
      { label: "Capacitaciones", href: site.soluciones },
      { label: "Nosotros", href: site.nosotros },
      { label: "Contacto", href: site.contacto },
    ],
  },
  {
    titulo: "Legales",
    links: [
      { label: "Aviso de privacidad", href: site.politicaPrivacidad },
    ],
  },
  {
    titulo: "Oficinas Comerciales",
    links: [
      { label: `<span class="direccion">CAMPUS CORPORATIVO COYOACÁN<br>Av. Coyoacán 1622, Torre 4 Ofna. 101, <br>Col. Del Valle, C.P. 03100, CDMX, México<br>Tel. +52 33 9689 2203</span>` },
      { label: "Contacto"},
      { label: `<span>karla.cayetano@framfoods.com.mx</span> <span>mariana.garcia@framfoods.com.mx</span>` },
      { label: `<span class="whatsapp">WhatsApp: +52 33 9689 2203</span>`},
    ],
  },
  {
    titulo: "Redes Sociales",
    links: [
      { label: "LinkedIn", href: site.socialLinkedIn, target: "_blank", rel: "noopener", clases: "fa-brands fa-linkedin" }
    ],
  },
];