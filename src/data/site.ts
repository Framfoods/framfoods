import { siteUrl } from "../config/site.mjs";

export const site = {
  lang: "es-MX",
  ogLocale: "es_MX",
  siteUrl,
  brandName: "FramFoods",
  serviceName: "Alimentos refrigerados, congelados y ambiente",
  city: "CDMC",
  countryName: "México",
  metaDescription: "Somos Líderes en Importación, Distribución y Desarrollo de Productos Alimenticios, a través de un servicio integral de logística, soporte de ventas y marketing personalizado.",
  ogDescription: "Somos Líderes en Importación, Distribución y Desarrollo de Productos Alimenticios, a través de un servicio integral de logística, soporte de ventas y marketing personalizado.",
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
  numeroTelefonico: "+52 33 9689 2203",
  correoElectronico: [
    "karla.cayetano@framfoods.com.mx",
    "mariana.garcia@framfoods.com.mx"
  ]
};

export function buildTitle() {
  return `${site.brandName} | ${site.serviceName}`;
}

export function mediaUrl(fileName: string) {
  return `${site.siteUrl}media/${fileName}`;
}
