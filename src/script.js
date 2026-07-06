const slides = [
  {
    image: "./assets/Images/Client-1.jpeg",
    title: "JEAN FOX JR",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt ratione ullam vero dolores illo quos ab eos fuga
                ducimus sunt, dicta laborum, qui consequuntur molestiae animi
                quisquam fugit ipsum maxime. Quis, necessitatibus explicabo?
                Cupiditate, fugit?
              `,
  },
  {
    image: "./assets/Images/Client-2.jpeg",
    title: "BAGUS BAMBANG",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt ratione ullam vero dolores illo quos ab eos fuga
                ducimus sunt, dicta laborum, qui consequuntur molestiae animi
                quisquam fugit ipsum maxime. Quis, necessitatibus explicabo?
                Cupiditate, fugit?
              `,
  },
  {
    image: "./assets/Images/Client-3.jpeg",
    title: "RASENDRIO HARIYADI",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt ratione ullam vero dolores illo quos ab eos fuga
                ducimus sunt, dicta laborum, qui consequuntur molestiae animi
                quisquam fugit ipsum maxime. Quis, necessitatibus explicabo?
                Cupiditate, fugit?
              `,
  },
  {
    image: "./assets/Images/Client-4.jpeg",
    title: "IKHWANU ROBIK",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt ratione ullam vero dolores illo quos ab eos fuga
                ducimus sunt, dicta laborum, qui consequuntur molestiae animi
                quisquam fugit ipsum maxime. Quis, necessitatibus explicabo?
                Cupiditate, fugit?
              `,
  },
  {
    image: "./assets/Images/Client-5.jpg",
    title: "RESTU WIJAYA",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt ratione ullam vero dolores illo quos ab eos fuga
                ducimus sunt, dicta laborum, qui consequuntur molestiae animi
                quisquam fugit ipsum maxime. Quis, necessitatibus explicabo?
                Cupiditate, fugit?
              `,
  },
];

window.onload = function () {

  let currentSlide = 0;

  function updateCarousel() {
    console.log("Updating carousel to slide:", currentSlide);
    const slide = slides[currentSlide];
    const imgElement = document.getElementById("carouselImage");
    const titleElement = document.getElementById("carouselTitle");
    const descElement = document.getElementById("carouselDescription");

    // Remove animation class to trigger reflow
    imgElement.classList.remove("fade-in-active");
    titleElement.classList.remove("fade-in-active");
    descElement.classList.remove("fade-in-active");

    // Force reflow
    void imgElement.offsetWidth;
    void titleElement.offsetWidth;
    void descElement.offsetWidth;

    imgElement.src = slide.image;
    imgElement.onerror = function () {
      console.error("Failed to load image:", slide.image);
    };

    titleElement.textContent = slide.title;
    descElement.textContent = slide.description;

    // Apply animation class
    imgElement.classList.add("fade-in-active");
    titleElement.classList.add("fade-in-active");
    descElement.classList.add("fade-in-active");

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

  createIndicators();
  updateCarousel();

  console.log("Carousel initialized");

  const menuButton = document.getElementById("sidebar_menu");
  const closeButton = document.getElementById("close_menu");
  const sidebar = document.querySelector(".sidebar");

  menuButton.addEventListener("click", (e) => {
    sidebar.classList.add("open");
    e.preventDefault();
  });

  closeButton.addEventListener("click", (e) => {
    sidebar.classList.remove("open");
    e.preventDefault();
  });

  // Back to Top Logic
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Dark Mode Logic
  const darkModeToggles = [
    document.getElementById("darkModeToggle"),
    document.getElementById("darkModeToggleSidebar")
  ];
  
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  darkModeToggles.forEach(toggle => {
    if(toggle) {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.toggle("dark-mode");
        let theme = "light";
        if (document.body.classList.contains("dark-mode")) {
          theme = "dark";
        }
        localStorage.setItem("theme", theme);
      });
    }
  });

  // Scroll reveal animation logic using IntersectionObserver
  const revealElements = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: "0px 0px -50px 0px"
    }
  );

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

};