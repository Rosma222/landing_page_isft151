// Datos de las carreras
const carreras = [
  {
    nombre: "Tecnicatura Superior en Análisis de Sistemas",
    descripcion: "Aprendé a desarrollar software y sistemas informáticos.",
    pdf: "R0-ANALISIS DE SISTEMAS.pdf",
    imagenPequena:"Sistemas.jpg"
  },
  {
    nombre: "Tecnicatura Superior en Gestión Ambiental y Salud",
    descripcion: "Formando recursos humanos calificados en la gestión del ambiente, adecuados a la globalización.",
    pdf: "R1-GESTION_AMBIENTAL_Y_SALUD-RES_442-08.pdf",
    imagenPequena:"gestionambiental.jpg"
  },
  {
    nombre: "Tecnicatura Superior en Construcción Sustentable",
    descripcion: "Nueva perspectiva en el sector de la construcción respetando el ambiente.",
    imagenPequena:"construccionSustentable.jpg"
     
  },
  {
    nombre: "Tecnicatura Superior en Industria Textil e Indumentaria",
    descripcion: "Capacitate para diseñar y gestionar el proceso de producción de indumentaria.",
    pdf: "R6- INDUSTRIA TEXTIL E INDUMENTARIA.pdf",
    imagenPequena:"indumentaria.jpg"
  },
  {
    nombre: "Tecnicatura Superior en Emergencias de Salud",
    descripcion: "Como organizar sistemas de respuesta ante emergencias y prestar atención de soporte vital ante riesgos de vida.",
    pdf: "R4-EMERGENCIAS DE SALUD.pdf",
    imagenPequena:"EmergenciasDeSalud.jpg"
  },
  {
    nombre: "Tecnicatura Superior en Turismo",
    descripcion: "Aprendé a comprender la complejidad del sistema turístico.",
    pdf: "R3- TURISMO.pdf",
    imagenPequena:"turismo.jpg"
  },
  {
    nombre: "Tecnicatura Superior en Logística",
    descripcion: "Administración del flujo de materiales y servicios desde el proveedor hasta el cliente.",
    pdf: "R5- LOGISTICA.pdf",
    imagenPequena:"logistica.jpg"
  },
  {
    nombre: "Tecnicatura Superior en Acompañante Terapéutico",
    descripcion: "Formate como agente de salud para brindar acompañamiento personalizado.",
    pdf: "R2-ACOMPAÑAMIENTO-TERAPEUTICO.pdf",
    imagenPequena:"AT.jpg"
  },
];

// Función para generar los bloques de carreras en la página
  function generarCarreras() {
  const carrerasSection = document.getElementById("carreras");

    carreras.forEach(carrera => {
    const carreraBlock = document.createElement("div");
    carreraBlock.className = "carrera";

    const imagenPequena = document.createElement("img");
    imagenPequena.src = carrera.imagenPequena;
    imagenPequena.alt = carrera.nombre; 
    imagenPequena.className = "imagenPequena";

    const contenido = document.createElement("div");
    contenido.className = "contenido"; // Agregamos una clase para aplicar estilos

    const titulo = document.createElement("h2");
    titulo.textContent = carrera.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = carrera.descripcion;

    const resolucion = document.createElement("button");
    resolucion.href = carrera.pdf; // Enlace al PDF resolucion de esta carrera
    resolucion.textContent = "Resolución";
    resolucion.addEventListener("click", function() {
      window.open(carrera.pdf, "_blank");
    });
    resolucion.className = "resolucion";
    
    const formulario = document.createElement("button");
    formulario.href = "#"; // Enlace al formulario de inscripción
    formulario.textContent = "Inscribirse";
    formulario.addEventListener("click", function() {
    
    });
    formulario.className = "formulario";
    
    carreraBlock.appendChild(titulo);
    carreraBlock.appendChild(descripcion);
    carreraBlock.appendChild(imagenPequena);
    carreraBlock.appendChild(contenido);
    carreraBlock.appendChild(resolucion);
    carreraBlock.appendChild(formulario);

    carrerasSection.appendChild(carreraBlock);
  });
}
// Obtener elementos necesarios del DOM
const btnMenu = document.querySelector(".btn-menu");
const menuContenido = document.querySelector(".menu-contenido");

// Agregar un evento de clic al botón
btnMenu.addEventListener("click", function() {
  if (menuContenido.style.display === "block") {
    menuContenido.style.display = "none";
  } else {
    menuContenido.style.display = "block";
  }
});


window.addEventListener("load", generarCarreras);// Llamada para generar los bloques de carreras al cargar la página
