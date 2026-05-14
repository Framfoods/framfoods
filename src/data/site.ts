import { siteUrl } from "../config/site.mjs";

export const site = {
  lang: "es-MX",
  ogLocale: "es_MX",
  siteUrl,
  brandName: "FramFoods",
  serviceName: "Alimentos refrigerados, congelados y ambiente",
  city: "CDMX",
  countryName: "México",

  metaDescription:
    "Somos líderes en importación, distribución y desarrollo de productos alimenticios.",

  ogDescription:
    "Somos líderes en importación, distribución y desarrollo de productos alimenticios.",

  media: {
    favicon: "/media/favicon-48x48.ico",
    faviconPng: "/media/favicon-48x48.png",
    appleTouchIcon: "/media/apple-touch-icon-180x180.png",
    ogImage: "/media/apple-touch-icon-180x180.png",
    ogImageWidth: "1200",
    ogImageHeight: "630",
  },

  socialFacebook: "",
  socialInstagram: "",
  socialLinkedIn: "https://www.linkedin.com/company/framfoods/",

  regresarInicio: "Regresar a inicio",
  politicaPrivacidad: "/politicas/privacidad",
  politicaTerminos: "",
  soluciones: "/soluciones",
  desarrolloproductos: "/desarrollo-de-productos",
  clientes: "/#nuestros-aliados",
  modeloframfoods: "/modelo-fram-foods",
  nosotros: "/nosotros",
  testimonios: "/#reseñas-clientes",
  contacto: "/contacto",

  numeroTelefonico: "+52 55 127 20763",

  numeroWhatsapp: "+52 55 127 20763",

  mensajeWhatsapp: "Buen día, escrito desde el sitio web, me gustaría recibir más información sobre sus servicios.",

  correoElectronico: [
    "atencion@framfoods.com.mx",
  ],
};

export const seo = {
  home: {
    path: "/",
    title: "FramFoods | Desarrollo de productos alimenticios",
    description:
      "En FramFoods desarrollamos, importamos y distribuimos productos alimenticios refrigerados, congelados y de ambiente con soluciones integrales de logística, ventas y marketing.",
    keywords: [
      "desarrollo de productos alimenticios",
      "distribución de alimentos en México",
      "importación de alimentos",
      "productos alimenticios refrigerados",
      "productos alimenticios congelados",
      "productos alimenticios de ambiente",
      "soluciones para industria alimentaria",
      "FramFoods México",
    ],
  },

  soluciones: {
    path: "/soluciones",
    title: "Soluciones para alimentos | FramFoods",
    description:
      "Integramos soluciones de supply chain, logística, distribución, trade marketing e inteligencia de mercado para marcas de alimentos que buscan crecer en México.",
    keywords: [
      "soluciones para industria alimentaria",
      "supply chain alimentos",
      "logística para alimentos",
      "distribución retail alimentos",
      "trade marketing alimentos",
      "inteligencia de mercado alimentos",
      "cadena de frío alimentos",
      "gestión comercial alimentos",
    ],
  },

  desarrolloproductos: {
    path: "/desarrollo-de-productos",
    title: "Desarrollo de productos | FramFoods",
    description:
      "Desarrollamos productos alimenticios alineados al consumidor, al canal y al mercado: concepto, formulación, validación, pricing, portafolio y preparación para retail.",
    keywords: [
      "desarrollo de productos alimenticios",
      "formulación de alimentos",
      "innovación alimentaria",
      "creación de productos para retail",
      "validación de producto alimenticio",
      "estrategia de pricing alimentos",
      "desarrollo de portafolio alimenticio",
    ],
  },

  modeloframfoods: {
    path: "/modelo-fram-foods",
    title: "Modelo FramFoods | Crecimiento comercial",
    description:
      "El modelo FramFoods conecta insights de consumidor, desarrollo de producto, producción, distribución, retail y marketing para escalar marcas de alimentos.",
    keywords: [
      "modelo FramFoods",
      "modelo integral para alimentos",
      "desarrollo y distribución de alimentos",
      "crecimiento de marcas alimenticias",
      "insights de consumidor alimentos",
      "ejecución comercial alimentos",
      "desarrollo de categoría alimentos",
    ],
  },

  nosotros: {
    path: "/nosotros",
    title: "Nosotros | FramFoods",
    description:
      "Somos un socio estratégico para marcas de alimentos. Integramos desarrollo de producto, logística, distribución, ventas y marketing para impulsar su crecimiento.",
    keywords: [
      "FramFoods",
      "socio estratégico industria alimentaria",
      "empresa de distribución de alimentos",
      "desarrollo de marcas alimenticias",
      "soluciones integrales alimentos",
      "industria alimentaria México",
    ],
  },

  contacto: {
    path: "/contacto",
    title: "Contacto | FramFoods",
    description:
      "Contáctanos para desarrollar, importar, distribuir o escalar tu marca de alimentos en México con una solución integral de producto, logística, ventas y marketing.",
    keywords: [
      "contacto FramFoods",
      "consultoría industria alimentaria",
      "distribución de alimentos en México",
      "desarrollo de productos alimenticios México",
      "soluciones para marcas de alimentos",
      "asesoría retail alimentos",
    ],
  },

  politicaPrivacidad: {
    path: "/politicas/privacidad",
    title: "Política de privacidad | FramFoods",
    description:
      "Consulta la política de privacidad de FramFoods y conoce cómo protegemos y gestionamos la información de nuestros usuarios y clientes.",
    keywords: [
      "política de privacidad FramFoods",
      "privacidad FramFoods",
      "datos personales FramFoods",
    ],
  },
} as const;

export type SeoKey = keyof typeof seo;

export function absoluteUrl(path: string = "") {
  const base = site.siteUrl.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${base}${cleanPath}`;
}

export function getSeo(page: SeoKey = "home") {
  const currentSeo = seo[page] ?? seo.home;

  return {
    ...currentSeo,
    canonical: absoluteUrl(currentSeo.path === "/" ? "" : currentSeo.path),
    ogTitle: currentSeo.title,
    ogDescription: currentSeo.description,
    ogImage: absoluteUrl(site.media.ogImage),
  };
}

export function buildTitle() {
  return `${site.brandName} | ${site.serviceName}`;
}

export function mediaUrl(fileName: string) {
  return absoluteUrl(`/media/${fileName}`);
}