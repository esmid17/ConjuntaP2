/* 1. Estructura del sistema de préstamos: ¿Cómo organizar y manipular los libros prestados usando
arrays y sus métodos (push, pop, shift, unshift, splice)? */

/* Como primera instancia, deberemos crear un array para poder organizar y editar los libros prestados o disponibles
del siguiente modo */

let librosDisponibles = [
    { id: 1, titulo: "Las mil y una noches", autor: "Anónimo", genero: "Ciencia Ficción", año: 1940 },
    { id: 2, titulo: "Estructuras de Datos", autor: "Fernando Solis", genero: "Ciencia de Computación", año: 2014 },
    { id: 3, titulo: "POO avanzada", autor: "Tatiana Gualotuña", genero: "Ciencia Ficción", año: 2018 },
    { id: 4, titulo: "1984", autor: "George Orwell", genero: "Distopía", año: 1949 },
    { id: 5, titulo: "El nombre del viento", autor: "Patrick Rothfuss", genero: "Fantasía", año: 2007 },
    { id: 6, titulo: "El silencio de los inocentes", autor: "Thomas Harris", genero: "Suspenso", año: 1988 },
    { id: 7, titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", genero: "Drama Psicológico", año: 1866 },
    { id: 8, titulo: "Fundación", autor: "Isaac Asimov", genero: "Ciencia Ficción", año: 1951 },
    { id: 9, titulo: "El resplandor", autor: "Stephen King", genero: "Terror", año: 1977 },
    { id: 10, titulo: "La chica del tren", autor: "Paula Hawkins", genero: "Suspenso", año: 2015 }
];

let librosPrestados = [];

/* Para las siguientes funciones se utilizaron los metodos: find, push y filter, ya que están diseñadas para 
cuando se necesita iterar sobre multiples objetos y es necesario que se devuelva uno o mas elementos del array */

function reservarLibro(idUsuario, idLibro) {
    let libro = librosDisponibles.find(libro => libro.id === idLibro);
    if (libro) {
        librosPrestados.push({ ...libro, idUsuario, fechaPrestamo: new Date() });
        librosDisponibles.splice(librosDisponibles.indexOf(libro), 1);
    }
}

function devolverLibro(idLibro) {
    let libro = librosPrestados.find(libro => libro.id === idLibro);
    if (libro) {
        librosDisponibles.push(libro);
        librosPrestados = librosPrestados.filter(libro => libro.id !== idLibro);
    }
}

function buscarLibros(criterio, valor) {
    return librosDisponibles.filter(libro => libro[criterio].toLowerCase().includes(valor.toLowerCase()));
}



/* 2. Filtrado y búsquedas dinámicas: ¿Cómo implementar filtros (filter) y búsqueda de libros por título,
autor o género? */


/* 3. Interacción con el usuario: ¿Cómo mostrar la lista de libros disponibles y los libros prestados
usando manipulación del DOM (getElementById, querySelectorAll)? */


/* 4. Alertas y recordatorios: ¿Cómo enviar recordatorios automáticos de devolución usando setTimeout
o setInterval? */


/* 5. Eventos y usabilidad: ¿Cómo mejorar la experiencia del usuario con eventos (onclick, onchange,
onmouseover, onmouseout, onfocus, onblur)? */


/* 6. Funciones avanzadas: ¿Cómo usar funciones autoejecutables, anónimas, y async/await para
manejar procesos asíncronos? */


/* 7. Simulación de procesos asíncronos: ¿Cómo implementar la reserva y devolución de libros usando
promesas y setTimeout para simular tiempos de espera? */