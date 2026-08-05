document.addEventListener("DOMContentLoaded", function () {
  const lengthButtons = document.querySelectorAll(".length-btn");
  const levelButtons = document.querySelectorAll(".level-btn");
  const filmTexts = document.querySelectorAll(".film-text");

  let currentLength = "brief";
  let currentLevel = "beginner";

  function updateDisplay() {
    filmTexts.forEach(text => {
      const matches =
        text.getAttribute("data-length") === currentLength &&
        text.getAttribute("data-level") === currentLevel;
      text.style.display = matches ? "" : "none";
    });
  }

  lengthButtons.forEach(button => {
    button.addEventListener("click", function () {
      currentLength = button.getAttribute("data-length");
      lengthButtons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      updateDisplay();
    });
  });

  levelButtons.forEach(button => {
    button.addEventListener("click", function () {
      currentLevel = button.getAttribute("data-level");
      levelButtons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      updateDisplay();
    });
  });

  updateDisplay();   
});





document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".carousel-img");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dotsContainer = document.querySelector(".carousel-dots");

  let currentIndex = 0;

  // ドット（現在位置を示す丸印）を画像の枚数分作成
  images.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showImage(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function showImage(index) {
    images.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    images[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;
  }

  prevBtn.addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(newIndex);
  });

  nextBtn.addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % images.length;
    showImage(newIndex);
  });
});