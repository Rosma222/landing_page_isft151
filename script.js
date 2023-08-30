// Datos de ejemplo para las carreras
const carreras = [
  {
    nombre: "Tecnicatura Superior en Análisis de Sistemas",
    descripcion: "Aprende a desarrollar software y sistemas informáticos.",
  },
  {
    nombre: "Tecnicatura Superior en Gestión Ambiental",
    descripcion: "Contribuye al cuidado del medio ambiente y la sustentabilidad.",
  },
  {
    nombre: "Tecnicatura Superior en Constucción Sustentable",
    descripcion: "Nueva perspecctiva en el sector de la construcción respetando el ambiente.",
  },
  {
    nombre: "Tecnicatura Superior en Industria Textil e Indumentaria",
    descripcion: "  ",
  },
  {
    nombre: "Tecnicatura Superior en Turismo",
    descripcion: "  .",
  },
  {
    nombre: "Tecnicatura Superior en Logística",
    descripcion: " .",
  },
  // ... Puedes agregar más carreras aquí
];

// Función para generar los bloques de carreras en la página
function generarCarreras() {
  const carrerasSection = document.getElementById("carreras");

  carreras.forEach(carrera => {
    const carreraBlock = document.createElement("div");
    carreraBlock.className = "carrera";

    const titulo = document.createElement("h2");
    titulo.textContent = carrera.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = carrera.descripcion;

    const formulario = document.createElement("a");
    formulario.href = "#"; // Enlace al formulario de inscripción
    formulario.textContent = "Inscribirse";
    formulario.className = "formulario";

    carreraBlock.appendChild(titulo);
    carreraBlock.appendChild(descripcion);
    carreraBlock.appendChild(formulario);

    carrerasSection.appendChild(carreraBlock);
  });
}

// Llamada para generar los bloques de carreras al cargar la página
window.addEventListener("load", generarCarreras);
