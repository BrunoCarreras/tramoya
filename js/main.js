
            const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");
    toggle.addEventListener("click", () => {
      nav.classList.toggle("visible");
    });

    const galeria = {
      producto1: ["img/RemeNegraSol.jpg", "img/ZRNegraSol.jpg"],
      producto2: ["img/RemeBeigeSol.jpg", "img/ZRBeigeSol.jpg"],
      producto3: ["img/BuzoBeigeEscudo.jpg", "img/ZBBeigeEscudo.jpg"],
      producto4: ["img/BuzoBlancoSol.jpg", "img/ZBBlancoSol.jpg"],
      producto5: ["img/RemeBlancaSol.jpg", "img/ZRBlancaSol.jpg"],
      producto6: ["img/RemeNegraEscudo.jpg","img/ZRNegraEscudo.jpg"],
      producto7: ["img/RemeBeigeEscudo.jpg", "img/ZRBeigeEscudo.jpg"],
      producto8: ["img/BuzoBeigeSol.jpg", "img/ZBBeigeSol.jpg"],
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
        img.classList.add('fade');
        setTimeout(() => {
          img.src = imagenes[index];
          img.classList.remove('fade');
        }, 200);
      }

      btnDer.addEventListener('click', () => {
        i = (i + 1) % imagenes.length;
        cambiarImagen(i);
      });

      btnIzq.addEventListener('click', () => {
        i = (i - 1 + imagenes.length) % imagenes.length;
        cambiarImagen(i);
      });
    });
  
  const slides = document.querySelectorAll(".slider-principal .slide");
  let currentSlide = 0;

  function mostrarSiguienteSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(mostrarSiguienteSlide, 4000); // 4 segundos
  

/*               */
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


