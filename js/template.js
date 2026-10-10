document.addEventListener("DOMContentLoaded", function () {

  // ---------- 1. データを読んで、文字を入れる ----------
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const item = locations[id];

  if (!item) {
    document.getElementById("location-title").textContent = "No data found";
    return;  // データがなければ、ここで終わり
  }

  document.getElementById("page-title").textContent = item.title;
  document.getElementById("location-title").textContent = item.title;
  
  document.getElementById("metadeta-film").textContent = item.metadata.film;
  document.getElementById("metadeta-address").textContent = item.metadata.address;
  document.getElementById("metadata-scene").textContent = item.metadata.scene;
  document.getElementById("metadata-angle").textContent = item.metadata.angle;
  document.getElementById("metadata-year").textContent = item.metadata.year;
  document.getElementById("fun_fact").textContent = item.fun_fact

  document.getElementById("nearest-station").textContent = item.near_station;
  document.getElementById("best-time").textContent = item.best_time;
  document.getElementById("admission").textContent = item.admission;



  const qrImg = document.getElementById('qr');
  qrImg.src = item.qr_image;



  // ---------- 2. 画像を作って、入れ物に入れる ----------
  const track = document.getElementById("carousel-track");

  item.images.forEach((fileName, i) => {
    const img = document.createElement("img");
    img.src = "../assets/img/" + fileName;
    img.alt = item.title;
    img.classList.add("carousel-img");
    if (i === 0) img.classList.add("active");
    track.appendChild(img);
  });



// ---------- 3. カルーセルの動き ----------
  const images = document.querySelectorAll(".carousel-img");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dotsContainer = document.querySelector(".carousel-dots");

  let currentIndex = 0;

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
    showImage((currentIndex - 1 + images.length) % images.length);
  });

  nextBtn.addEventListener("click", () => {
    showImage((currentIndex + 1) % images.length);
  });



// ---------- 4. 長さ×レベルで文章を切り替える ----------
  const lengthButtons = document.querySelectorAll(".length-btn");
  const levelButtons = document.querySelectorAll(".level-btn");
  const filmText = document.getElementById("film-text");

  let currentLength = "brief";
  let currentLevel = "beginner";

  function updateText() {
    filmText.textContent = item.texts[currentLength][currentLevel];
  }

  lengthButtons.forEach(button => {
    button.addEventListener("click", function () {
      currentLength = button.getAttribute("data-length");
      lengthButtons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      updateText();
    });
  });

  levelButtons.forEach(button => {
    button.addEventListener("click", function () {
      currentLevel = button.getAttribute("data-level");
      levelButtons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      updateText();
    });
  });

  updateText();  // 最初の1回(brief × beginner)を表示

});