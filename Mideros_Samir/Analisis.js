/* 1. Estructura del sistema de préstamos: ¿Cómo organizar y manipular los libros prestados usando
arrays y sus métodos (push, pop, shift, unshift, splice)? */

/* Como primera instancia, deberemos crear un array para poder organizar y editar los libros prestados o disponibles
del siguiente modo */

const libros = [
    { id: 1, titulo: "El Quijote", autor: "Cervantes", genero: "Ficción", disponible: true },
    { id: 2, titulo: "1984", autor: "George Orwell", genero: "Distopía", disponible: true },
    { id: 3, titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", genero: "Realismo Mágico", disponible: false },
    { id: 4, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", genero: "Infantil", disponible: false },
    { id: 5, titulo: "Estructura de datos", autor: "Fernando Solis", genero: "Ciencias de la COomputación", disponible: true },
    { id: 6, titulo: "El Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasía", disponible: true },
    { id: 7, titulo: "La Guerra de los Mundos", autor: "H.G. Wells", genero: "Ciencia Ficción", disponible: false },
    { id: 8, titulo: "La Metamorfosis", autor: "Franz Kafka", genero: "Drama Psicológico", disponible: true },
];

const librosPrestados = [];

/* Para las siguientes funciones se utilizaron los metodos: find, push y filter, ya que están diseñadas para 
cuando se necesita iterar sobre multiples objetos y es necesario que se devuelva uno o mas elementos del array */

// Función para reservar un libro
const reservarLibro = (libroId) => {
    const libro = libros.find(libro => libro.id === libroId && libro.disponible);
    if (!libro) {
      alert("Este libro no está disponible.");
      return;
    }
    libro.disponible = false;
    librosPrestados.push(libro);
    renderizarLibros();
    alert(`Has reservado el libro: "${libro.titulo}"`);
  };

  // Función para devolver un libro
  const devolverLibro = (libroId) => {
    const libroIndex = librosPrestados.findIndex(libro => libro.id === libroId);
    if (libroIndex === -1) {
      alert("Este libro no está prestado.");
      return;
    }
    const libro = librosPrestados.splice(libroIndex, 1)[0];
    libro.disponible = true;
    renderizarLibros();
    alert(`Has devuelto el libro: "${libro.titulo}"`);
  };

/* 2. Filtrado y búsquedas dinámicas: ¿Cómo implementar filtros (filter) y búsqueda de libros por título,
autor o género? */

/* Del mismo modo, usamos filter para la busqueda de libros */

function buscarLibros(criterio, valor) {
    return librosDisponibles.filter(libro => libro[criterio].toLowerCase().includes(valor.toLowerCase()));
}


/* 3. Interacción con el usuario: ¿Cómo mostrar la lista de libros disponibles y los libros prestados
usando manipulación del DOM (getElementById, querySelectorAll)? */

function mostrarLibrosDisponibles() {
    const lista = document.getElementById("librosDisponibles");
    lista.innerHTML = "";
    librosDisponibles.forEach(libro => {
        lista.innerHTML += `<li>${libro.titulo} - ${libro.autor}</li>`;
    });
}

document.getElementById("reservarBtn").onclick = () => {
    const idLibro = parseInt(document.getElementById("idLibro").value);
    reservarLibro(1, idLibro); // Usuario con ID 1
    mostrarLibrosDisponibles();
};



/* 4. Alertas y recordatorios: ¿Cómo enviar recordatorios automáticos de devolución usando setTimeout
o setInterval? */


/* 5. Eventos y usabilidad: ¿Cómo mejorar la experiencia del usuario con eventos (onclick, onchange,
onmouseover, onmouseout, onfocus, onblur)? */


/* 6. Funciones avanzadas: ¿Cómo usar funciones autoejecutables, anónimas, y async/await para
manejar procesos asíncronos? */


/* 7. Simulación de procesos asíncronos: ¿Cómo implementar la reserva y devolución de libros usando
promesas y setTimeout para simular tiempos de espera? */