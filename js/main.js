const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");
toggle.addEventListener("click", () => {
  nav.classList.toggle("visible");
});

const galeria = {
  producto1: ["imgremeras/RemeNegraSol.jpg", "imgzoom/ZRNegraSol.jpg"],
  producto2: ["imgremeras/RemeBeigeSol.jpg", "imgzoom/ZRBeigeSol.jpg"],
  producto3: ["imgbuzos/BuzoBeigeEscudo.jpg", "imgbuzos/ZBBeigeEscudo.jpg"],
  producto4: ["imgbuzos/BuzoBlancoSol.jpg", "imgbuzos/ZBBlancoSol.jpg"],
  producto5: ["imgremeras/RemeBlancaSol.jpg", "imgzoom/ZRBlancaSol.jpg"],
  producto6: ["imgremeras/RemeNegraEscudo.jpg","imgzoom/ZRNegraEscudo.jpg"],
  producto7: ["imgremeras/RemeBeigeEscudo.jpg", "imgzoom/ZRBeigeEscudo.jpg"],
  producto8: ["imgbuzos/BuzoBeigeSol.jpg", "imgbuzos/ZBBeigeSol.jpg"],
  producto9: ["imgremeras/RemeMarronSol.jpg", "imgzoom/ZRMarronSol.jpg"],
  producto10: ["imgremeras/RemeAzulBandera.jpg", "imgzoom/ZRAzulBandera.jpg"],
  producto11: ["imgremeras/RemeBlancaBandera.jpg", "imgzoom/ZRBlancaBandera.jpg"],
  producto12: ["imgremeras/RemeNegraBandera.jpg", "imgzoom/ZRNegraBandera.jpg"],
  producto13: ["imgremeras/RemeBlancaSolN.jpg", "imgzoom/ZRBlancaSolN.jpg"],
  producto14: ["imgremeras/RemeGrisSol.jpg", "imgzoom/ZRGrisSol.jpg"],
  producto15: ["imgremeras/RemeAzulSol.jpg", "imgzoom/ZRAzulSol.jpg"],
  producto16: ["imgremeras/RemeNegraSolN.jpg", "imgzoom/ZRNegraSolN.jpg"],
};

document.querySelectorAll('.card').forEach((card) => {
  const id = card.dataset.id;
  const imagenes = galeria[id];
  if (!imagenes) return;

  let i = 0;
  const img = card.querySelector('.product-image');
  const btnIzq = card.querySelector('.flecha.izquierda');
  const btnDer = card.querySelector('.flecha.derecha');

function cambiarImagen(index) {
  img.classList.add('deslizando');
  setTimeout(() => {
    img.src = imagenes[index];
    img.classList.remove('deslizando');
  }, 300); // coincide con la duración del CSS
}

  // Botones flechas
  btnDer.addEventListener('click', () => {
    i = (i + 1) % imagenes.length;
    cambiarImagen(i);
  });

  btnIzq.addEventListener('click', () => {
    i = (i - 1 + imagenes.length) % imagenes.length;
    cambiarImagen(i);
  });

  // --- Soporte táctil (swipe) ---
  let startX = 0;
  let endX = 0;

  img.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  img.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) { // distancia mínima para contar como swipe
      if (diff > 0) {
        // Deslizó a la izquierda → siguiente imagen
        i = (i + 1) % imagenes.length;
      } else {
        // Deslizó a la derecha → imagen anterior
        i = (i - 1 + imagenes.length) % imagenes.length;
      }
      cambiarImagen(i);
    }
  });
});

// --- Slider principal ---
const slides = document.querySelectorAll(".slider-principal .slide");
let currentSlide = 0;

function mostrarSiguienteSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(mostrarSiguienteSlide, 4000); // 4 segundos

// --- Filtros ---
let categoriaSeleccionada = null;
let colorSeleccionado = null;

function aplicarFiltros() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const esCategoria = !categoriaSeleccionada || card.classList.contains(categoriaSeleccionada);
    const esColor = !colorSeleccionado || card.classList.contains(colorSeleccionado);
    const coincideAmbos = esCategoria && esColor;

    card.style.display = coincideAmbos ? 'block' : 'none';
  });
}

function filtrarCategoria(categoria) {
  categoriaSeleccionada = categoria;
  colorSeleccionado = null;
  aplicarFiltros();
}

function filtrarColor(color, categoria) {
  categoriaSeleccionada = categoria;
  colorSeleccionado = color;
  aplicarFiltros();
}
