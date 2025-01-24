/* 1. Estructura del sistema de préstamos: ¿Cómo organizar y manipular los libros prestados usando
arrays y sus métodos (push, pop, shift, unshift, splice)? */

/* Como primera instancia, deberemos crear un array para poder organizar y editar los libros prestados o disponibles
del siguiente modo */

let librosDisponibles = [
    { id: 1, titulo: "Las mil y una noche", autor: "Anónimo", genero: "Ficción", año: 1940 },
    { id: 2, titulo: "Estructuras de Datos", autor: "Edgar Solis", genero: "Ciencia de Computación", año: 2014 },
    { id: 3, titulo: "JS avanzado", autor: "Tatiana Gualotuña", genero: "Ficción", año: 1940 },
    { id: 4, titulo: "Estructuras de Datos", autor: "Jane Smith", genero: "Ciencia de Computación" },
    { id: 5, titulo: "Las mil y una noche", autor: "Anónimo", genero: "Ficción", año: 1940 },
    { id: 6, titulo: "Estructuras de Datos", autor: "Jane Smith", genero: "Ciencia de Computación" },
    { id: 7, titulo: "Las mil y una noche", autor: "Anónimo", genero: "Ficción", año: 1940 },
    { id: 8, titulo: "Estructuras de Datos", autor: "Jane Smith", genero: "Ciencia de Computación" },
];

let librosPrestados = [];


/* 2. Filtrado y búsquedas dinámicas: ¿Cómo implementar filtros (filter) y búsqueda de libros por título,
autor o género?


3. Interacción con el usuario: ¿Cómo mostrar la lista de libros disponibles y los libros prestados
usando manipulación del DOM (getElementById, querySelectorAll)?


4. Alertas y recordatorios: ¿Cómo enviar recordatorios automáticos de devolución usando setTimeout
o setInterval?


5. Eventos y usabilidad: ¿Cómo mejorar la experiencia del usuario con eventos (onclick, onchange,
onmouseover, onmouseout, onfocus, onblur)?


6. Funciones avanzadas: ¿Cómo usar funciones autoejecutables, anónimas, y async/await para
manejar procesos asíncronos?


7. Simulación de procesos asíncronos: ¿Cómo implementar la reserva y devolución de libros usando
promesas y setTimeout para simular tiempos de espera? 