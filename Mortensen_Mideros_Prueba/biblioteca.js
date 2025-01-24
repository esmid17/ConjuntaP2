// Array de libros
const libros = [
    { id: 1, titulo: "La casa", autor: "Carlos Ponce", genero: "Ficción", disponible: true },
    { id: 2, titulo: "1 de a lado", autor: "Maria Trevi", genero: "Distopía", disponible: true },
    { id: 3, titulo: "Soledad", autor: "Gabriela Quispe", genero: "Realismo Mágico", disponible: false },
    { id: 4, titulo: "Carlitis", autor: "Don Carlos", genero: "Infantil", disponible: false },
    { id: 5, titulo: "Estructura de datos", autor: "Fernando Solis", genero: "Ciencias de la Computación", disponible: true },
    { id: 6, titulo: "Hebillo", autor: "Qato", genero: "Fantasía", disponible: true },
    { id: 7, titulo: "La hoguera", autor: "Eduardo Mortensen", genero: "Suspenso", disponible: false },
    { id: 8, titulo: "La Metamorfosis", autor: "Franz Kafka", genero: "Drama Psicológico", disponible: true },
  ];
  
  const librosPrestados = [];
  
  // Función para asignar listas de libros
  const asignarLibros = (filtro = {}) => {
    const { titulo = "", autor = "", genero = "" } = filtro;
    const disponiblesContainer = document.getElementById("libros-disponibles");
    const prestadosContainer = document.getElementById("libros-prestados");
  
    disponiblesContainer.innerHTML = libros
      .filter(libro => libro.disponible &&
        libro.titulo.toLowerCase().includes(titulo.toLowerCase()) &&
        libro.autor.toLowerCase().includes(autor.toLowerCase()) &&
        libro.genero.toLowerCase().includes(genero.toLowerCase())
      )
      .map(libro => `
        <li>
          ${libro.titulo} - ${libro.autor}
          <button onclick="reservarLibro(${libro.id})">Reservar</button>
        </li>
      `)
      .join("");
  
    prestadosContainer.innerHTML = librosPrestados
      .map(libro => `
        <li>
          ${libro.titulo} - ${libro.autor}
          <button onclick="devolverLibro(${libro.id})">Devolver</button>
        </li>
      `)
      .join("");
  };
  
  // Función para reservar un libro
  const reservarLibro = (libroId) => {
    const libro = libros.find(libro => libro.id === libroId && libro.disponible);
    if (!libro) {
      alert("Este libro no está disponible.");
      return;
    }
    libro.disponible = false;
    librosPrestados.push(libro);
    asignarLibros();
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
    asignarLibros();
    alert(`Has devuelto el libro: "${libro.titulo}"`);
  };
  
  // Manejar el envío del formulario de búsqueda
  document.getElementById("form-busqueda").addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const genero = document.getElementById("genero").value;
    asignarLibros({ titulo, autor, genero });
  });
  
  // Mostrar la lista de libros prestados en la consola
  document.getElementById("ver-prestados").addEventListener("click", () => {
    if (librosPrestados.length === 0) {
      console.log("No hay libros prestados.");
      alert("No hay libros prestados.");
    } else {
      console.log("Lista de libros prestados:");
      librosPrestados.forEach(libro => {
        console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Género: ${libro.genero}`);
      });
      alert("La lista de libros prestados se ha mostrado en la consola.");
    }
  });
  
  // Inicializar la aplicación
  asignarLibros();
  