const slides = [
  {
    image: "../assets/Images/Client-1.jpeg",
    title: "JEAN FOX JR",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt ratione ullam vero dolores illo quos ab eos fuga
                ducimus sunt, dicta laborum, qui consequuntur molestiae animi
                quisquam fugit ipsum maxime. Quis, necessitatibus explicabo?
                Cupiditate, fugit?
              `,
  },
  {
    image: "../assets/Images/Client-2.jpeg",
    title: "BAGUS BAMBANG",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt ratione ullam vero dolores illo quos ab eos fuga
                ducimus sunt, dicta laborum, qui consequuntur molestiae animi
                quisquam fugit ipsum maxime. Quis, necessitatibus explicabo?
                Cupiditate, fugit?
              `,
  },
  {
    image: "../assets/Images/Client-3.jpeg",
    title: "RASENDRIO HARIYADI",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt ratione ullam vero dolores illo quos ab eos fuga
                ducimus sunt, dicta laborum, qui consequuntur molestiae animi
                quisquam fugit ipsum maxime. Quis, necessitatibus explicabo?
                Cupiditate, fugit?
              `,
  },
  {
    image: "../assets/Images/Client-4.jpeg",
    title: "IKHWANU ROBIK",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt ratione ullam vero dolores illo quos ab eos fuga
                ducimus sunt, dicta laborum, qui consequuntur molestiae animi
                quisquam fugit ipsum maxime. Quis, necessitatibus explicabo?
                Cupiditate, fugit?
              `,
  },
  {
    image: "../assets/Images/Client-5.jpg",
    title: "RESTU WIJAYA",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt ratione ullam vero dolores illo quos ab eos fuga
                ducimus sunt, dicta laborum, qui consequuntur molestiae animi
                quisquam fugit ipsum maxime. Quis, necessitatibus explicabo?
                Cupiditate, fugit?
              `,
  },
];

let currentSlide = 0;

function updateCarousel() {
  console.log("Updating carousel to slide:", currentSlide);
  const slide = slides[currentSlide];
  const imgElement = document.getElementById("carouselImage");

  imgElement.src = slide.image;
  imgElement.onerror = function () {
    console.error("Failed to load image:", slide.image);
    this.src = slide.image;
  };

  document.getElementById("carouselTitle").textContent = slide.title;
  document.getElementById("carouselDescription").textContent =
    slide.description;

  const indicators = document.querySelectorAll(".carousel-indicator");
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlide);
  });
}

function createIndicators() {
  const indicatorsContainer = document.getElementById("carouselIndicators");
  slides.forEach((_, index) => {
    const indicator = document.createElement("button");
    indicator.className = "carousel-indicator";
    indicator.addEventListener("click", () => {
      console.log("Indicator clicked:", index);
      currentSlide = index;
      updateCarousel();
    });
    indicatorsContainer.appendChild(indicator);
  });
}

function nextSlide() {
  console.log("Moving to next slide");
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

createIndicators();
updateCarousel();

// setInterval(nextSlide, 5000);

console.log("Carousel initialized");

const menuButton = document.getElementById("sidebar_menu");
const closeButton = document.getElementById("close_menu");

menuButton.addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
});
