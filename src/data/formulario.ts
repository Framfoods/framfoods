import { site } from "./site";

export const preguntas = [
    { label: "E-mail", placeholder: "Ingresa E-mail", etiqueta: "input", tipo: "email", requerido: true},
    { label: "Elige una opción", etiqueta: "option", opciones : 
        [
        {opcion: "Queremos conocer tu opción", valor:""},
        {opcion: "Servicio 1", valor:"Servicio 1"},
        {opcion: "Servicio 2", valor:"Servicio 2"},
        {opcion: "Servicio 3", valor:"Servicio 3"},
    ]
    , requerido: true
},
{ label: "Mensaje", placeholder: "Coméntanos más acerca de tus dudas", etiqueta: "textarea", requerido: true},
{ label: "Acepto los términos y condiciones", placeholder: "", etiqueta: "checkbox", tipo: "", urlPolíticas:site.politicaTerminos, textoPolitica: "Ver términos y condiciones", requerido: true},
];

export const boton = [
    {paginaGracias: "/thankyou", cta:"Guardar"}
];