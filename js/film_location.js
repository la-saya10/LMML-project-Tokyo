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

  updateDisplay();   // 初期表示
});