// Datos de ejemplo: Cake Toppers con imágenes reales (placekitten? no, usamos imágenes de muestra buenísimas de Unsplash / placeholder)
// Para asegurar variedad y que se vea profesional, usaremos imágenes de temática pastel, toppers, unicornio, etc.
// Pero como es demo, las pondremos desde CDN de imágenes libres (todas con temática "cake topper" o similar).
// Nota: puedes reemplazar las urls con tus propias imágenes.
const toppersData = [
  {
    id: 1,
    nombre: "Topper Stitch 🐾",
    img: "img/stitch.jpg", // imagen local de ejemplo (reemplaza con tu propia imagen)
    descripcion:
      " Topper de Stitch con diseño adorable, ideal para fiestas infantiles y temáticas de Disney.",
    alt: "Stitch Cake Topper",
  },

  {
    id: 2,
    nombre: "Topper Dragon Ball Z 🐉",
    img: "img/dragonballtopper.png", // topper similar
    descripcion:
      "Topper de dragon ball con diseño vibrante, perfecto para cumpleaños temáticos de anime.",
    alt: "Dragon Ball cake topper",
  },
  {
    id: 3,
    nombre: "Topper 👶baby shower🌸",
    img: "img/bbshow.jpg", // topper similar
    descripcion:
      "Topper de baby shower con diseño tierno de osito y globos, ideal para celebrar la llegada del bebé.",
    alt: "Baby shower cake topper",
  },
  {
    id: 4,
    nombre: "Topper Masha y el Oso🐻 ",
    img: "img/masha.png", // imagen local de ejemplo (reemplaza con tu propia imagen)
    descripcion:
      " Topper de Masha y el Oso con diseño colorido y divertido, ideal para fiestas infantiles.",
  },
  {
    id: 5,
    nombre: "Topper 🦇 Batman 🦸‍♂️",
    img: "img/batman.jpg", // imagen local de ejemplo (reemplaza con tu propia imagen)
    descripcion:
      "Topper y mascara de Batman con diseño oscuro y elegante, ideal para fiestas temáticas de superhéroes.",
    alt: "Batman cake topper",
  },
  {
    id: 6,
    nombre: "Topper 🦇 Batman 🦸‍♂️",
    img: "img/batman2.png", // imagen local de ejemplo (reemplaza con tu propia imagen)
    descripcion:
      "Topper de Batman con diseño oscuro y elegante, ideal para fiestas temáticas de superhéroes.",
    alt: "Batman cake topper",
  },
  {
    id: 7,
    nombre: "Topper cocomelon 🎂",
    img: "img/cocomelon2.jpg", // topper similar
    descripcion:
      "Topper de Cocomelon con diseño colorido y divertido, ideal para fiestas infantiles.",
    alt: "Cocomelon cake topper",
  },

  {
    id: 8,
    nombre: "Topper cocomelon 🎂",
    img: "img/cocomelon.jpg", // topper similar
    descripcion:
      "Topper de Cocomelon con diseño colorido y divertido, ideal para fiestas infantiles.",
    alt: "Cocomelon cake topper",
  },

  {
    id: 9,
    nombre:
      "🌸 También le personalizamos su topper con sus flores favoritas🌸",
    img: "img/wendotopper.jpeg", // topper similar
    descripcion:
      "topper para los amantes a las flores con diseño brillante y mágico, ideal para fiestas temáticas.",
    alt: "Flores cake topper",
  },
  {
    id: 10,
    nombre: "💄 Makeup Glam 💋",
    img: "img/makeup.jpg", // topper similar
    descripcion:
      "Topper de maquillaje con diseño glam, ideal para eventos especiales.",
    alt: "Makeup cake topper",
  },
  {
    id: 11,
    nombre: "lady bug topper 🐞",
    img: "img/ladybug.png", // topper similar
    descripcion:
      "Topper de la lady bug con diseño colorido y divertido, ideal para fiestas infantiles.",
    alt: "Lady Bug cake topper",
  },
  {
    id: 12,
    nombre: "Avengers topper 🦸‍♂️",
    img: "img/avengers.png", // topper similar
    descripcion:
      "Topper de Avengers con diseño épico, ideal para fiestas temáticas de superhéroes.",
    alt: "Avengers cake topper",
  },
  {
    id: 13,
    nombre: "Topper Stitch2 🐾",
    img: "img/Stitch2.jpeg", // imagen local de ejemplo (reemplaza con tu propia imagen)
    descripcion:
      " Topper de Stitch con diseño adorable, ideal para fiestas infantiles y temáticas de Disney.",
    alt: "Stitch Cake Topper",
  },
  {
    id: 14,
    nombre: "Topper Spider Man",
    img: "img/spider man .jpg", // imagen local de ejemplo (reemplaza con tu propia imagen)
    descripcion:
      "Topper de Batman con diseño oscuro y elegante, ideal para fiestas temáticas de superhéroes.",
    alt: "Batman cake topper",
  },
  {
    id: 15,
    nombre: "Topper Dentista 🦷",
    img: "img/Dentista.jpeg", // imagen local de ejemplo (reemplaza con tu propia imagen)
    descripcion:
      "Topper de Dentista con diseño poderoso, ideal para fiestas temáticas.",
    alt: "Dentista cake topper",
  },
  {
    id: 16,
    nombre: "Topper Heroes en pijama 🦸‍♂️",
    img: "img/heroes.jpg", // imagen local de ejemplo (reemplaza con tu propia imagen)
    descripcion:
      "Topper de Heroes en pijama con diseño adorable, ideal para fiestas infantiles.",
    alt: "Heroes en pijama cake topper",
  },
  {
  id: 17, // Cambia el ID según corresponda en tu base de datos
  nombre: "Topper Felices 103 🦋",
  img: "img/103.png", // Reemplaza con la ruta real de tu imagen
  descripcion:
    "Topper personalizado, decorado con detalles de mariposas y flores moradas. Elegante y perfecto para celebraciones de hitos e historias de vida memorables.",
  alt: "Golden 103rd Birthday Cake Topper with Butterflies"
},
  {
    id: 18,
    nombre: "la granja de zenon topper 🐷",
    img: "img/granja.jpeg", // imagen local de ejemplo (reemplaza con tu propia imagen)
    descripcion:
      "Topper de la granja de zenon con diseño divertido, ideal para fiestas infantiles.",
    alt: "La granja de zenon cake topper",
  },
  {
    id: 19,
    nombre: "Topper fondo del mar 🐠",
    img: "img/mar.png", // imagen local de ejemplo (reemplaza con tu propia imagen)
    descripcion:
      "Topper de fondo del mar con diseño mágico, ideal para fiestas temáticas.",
    alt: "Fondo del mar cake topper",
  },
  {
    id: 20,
    nombre: "Topper ingeniero 👷‍♂️🔧",
    img: "img/ingeniero.png", // imagen local de ejemplo (reemplaza con tu propia imagen)
    descripcion:
      "Topper de ingeniero con diseño mágico, para los amantes de la ingeniería",
    alt: "Ingeniero cake topper",
  },
   {
    id: 21,
    nombre: "Topper garfield 🐱",
    img: "img/garfield.jpeg", // imagen local de ejemplo (reemplaza con tu propia imagen)
    descripcion:
      "Topper de garfield con diseño divertido, ideal para fiestas infantiles.",
    alt: "Garfield cake topper",
  }, 
  {
    id: 21,
    nombre: "Topper niño en el mundo de bebefinn 👶🦈",
    img: "img/ander.jpg", // imagen local de ejemplo (reemplaza con tu propia imagen)
    descripcion:
      "Topper de niño en el mundo bebefinn con diseño adorable.",
    alt: "Niño en el mundo bebefinn cake topper",
  },  
  
];

// Variables globales para el carrusel modal
let currentImageList = []; // array de objetos {src, caption, alt}
let currentIndex = 0;
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const imageCounter = document.getElementById("imageCounter");
const closeModalBtn = document.getElementById("closeModalBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Renderizar las tarjetas en grid
const catalogGrid = document.getElementById("catalogGrid");

function buildCards() {
  catalogGrid.innerHTML = "";
  toppersData.forEach((topper) => {
    // Crear la estructura de la tarjeta
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    const innerDiv = document.createElement("div");
    innerDiv.className = "card-inner";

    // FRONT
    const frontDiv = document.createElement("div");
    frontDiv.className = "card-front";
    const img = document.createElement("img");
    img.src = topper.img;
    img.alt = topper.alt || topper.nombre;
    img.loading = "lazy";
    const spanName = document.createElement("span");
    spanName.className = "topper-name";
    spanName.innerText = topper.nombre;
    frontDiv.appendChild(img);
    frontDiv.appendChild(spanName);

    // BACK (descripción)
    const backDiv = document.createElement("div");
    backDiv.className = "card-back";
    const titleBack = document.createElement("h3");
    titleBack.innerText = topper.nombre;
    const descPar = document.createElement("p");
    descPar.innerText = topper.descripcion;
    const smallInfo = document.createElement("small");
    smallInfo.innerText = "✨ Toca para ver detalle ✨";
    backDiv.appendChild(titleBack);
    backDiv.appendChild(descPar);
    backDiv.appendChild(smallInfo);

    innerDiv.appendChild(frontDiv);
    innerDiv.appendChild(backDiv);
    cardDiv.appendChild(innerDiv);

    // Evento: Al hacer clic en la tarjeta, abrir el modal con carrusel iniciando en esta imagen
    cardDiv.addEventListener("click", (e) => {
      e.stopPropagation();
      // Construir la lista de imágenes completa (global para navegación)
      prepareImageList();
      // Encontrar el índice del topper actual
      const foundIndex = currentImageList.findIndex(
        (item) => item.id === topper.id,
      );
      if (foundIndex !== -1) {
        currentIndex = foundIndex;
      } else {
        currentIndex = 0; // fallback
      }
      openModalWithCurrent();
    });

    catalogGrid.appendChild(cardDiv);
  });
}

// Prepara el listado para el carrusel (basado en toppersData)
function prepareImageList() {
  currentImageList = toppersData.map((t) => ({
    id: t.id,
    src: t.img,
    caption: t.nombre,
    desc: t.descripcion,
    alt: t.alt || t.nombre,
  }));
}

// Abre el modal mostrando la imagen según currentIndex
function openModalWithCurrent() {
  if (!currentImageList.length) prepareImageList();
  const item = currentImageList[currentIndex];
  if (item) {
    modalImage.src = item.src;
    modalImage.alt = item.alt;
    modalCaption.innerHTML = `${item.caption}<span style="font-weight:300; font-size:0.9rem;"> - ${item.desc}</span>`;
    imageCounter.innerText = `${currentIndex + 1} / ${currentImageList.length}`;
  }
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // evitar scroll
}

// Función para cambiar imagen en carrusel
function showNextImage() {
  if (currentImageList.length === 0) return;
  currentIndex = (currentIndex + 1) % currentImageList.length;
  const newItem = currentImageList[currentIndex];
  modalImage.src = newItem.src;
  modalImage.alt = newItem.alt;
  modalCaption.innerHTML = `${newItem.caption}<span style="font-weight:300; font-size:0.9rem;"> - ${newItem.desc}</span>`;
  imageCounter.innerText = `${currentIndex + 1} / ${currentImageList.length}`;
}

function showPrevImage() {
  if (currentImageList.length === 0) return;
  currentIndex =
    (currentIndex - 1 + currentImageList.length) % currentImageList.length;
  const newItem = currentImageList[currentIndex];
  modalImage.src = newItem.src;
  modalImage.alt = newItem.alt;
  modalCaption.innerHTML = `${newItem.caption}<span style="font-weight:300; font-size:0.9rem;"> - ${newItem.desc}</span>`;
  imageCounter.innerText = `${currentIndex + 1} / ${currentImageList.length}`;
}

// Cerrar modal
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Eventos teclado: flechas y esc
function handleKeydown(e) {
  if (modal.style.display !== "flex") return;
  if (e.key === "ArrowRight") {
    showNextImage();
    e.preventDefault();
  } else if (e.key === "ArrowLeft") {
    showPrevImage();
    e.preventDefault();
  } else if (e.key === "Escape") {
    closeModal();
    e.preventDefault();
  }
}

// Inicializar eventos
function initModalEvents() {
  closeModalBtn.addEventListener("click", closeModal);
  prevBtn.addEventListener("click", showPrevImage);
  nextBtn.addEventListener("click", showNextImage);
  modal.addEventListener("click", (e) => {
    // Si el clic es directamente en el fondo del modal (no en el contenido), cerrar
    if (e.target === modal) {
      closeModal();
    }
  });
  window.addEventListener("keydown", handleKeydown);
}

// Llamada a construcción y eventos
function init() {
  buildCards();
  prepareImageList();
  initModalEvents();
}

init();
