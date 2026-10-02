document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".item-wrapper");

  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      const filter = button.getAttribute("data-filter");

      filterButtons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      items.forEach(item => {
        const itemType = item.getAttribute("data-type");
        const matches = filter === "all" || itemType === filter;
        item.style.display = matches ? "" : "none";
      });
    });
  });
});





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


document.addEventListener('DOMContentLoaded', () => {
  const ITEMS_PER_PAGE = 8;
  const items = Array.from(document.querySelectorAll('.item-wrapper'));
  const filterButtons = document.querySelectorAll('.filter-btn');
  const paginationControls = document.getElementById('paginationControls');

  let currentFilter = 'all';
  let currentPage = 1;

  function getFilteredItems() {
    if (currentFilter === 'all') return items;
    return items.filter(item => item.dataset.type === currentFilter);
  }

  function renderPage() {
    const filtered = getFilteredItems();
    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));

    // ページ番号が範囲外にならないよう補正
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    // 全アイテムをいったん隠す
    items.forEach(item => item.style.display = 'none');

    // フィルタ後、該当ページ分だけ表示
    filtered.slice(start, end).forEach(item => item.style.display = '');

    renderPaginationButtons(totalPages);
  }

  function renderPaginationButtons(totalPages) {
    paginationControls.innerHTML = '';
    if (totalPages <= 1) return; // 1ページしかない時はボタン非表示

    const prevBtn = document.createElement('button');
    prevBtn.textContent = '‹ Prev';
    prevBtn.className = 'page-btn';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
      currentPage--;
      renderPage();
      window.scrollTo({ top: document.querySelector('.item-gallery').offsetTop - 80, behavior: 'smooth' });
    });
    paginationControls.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.className = 'page-btn' + (i === currentPage ? ' active' : '');
      btn.addEventListener('click', () => {
        currentPage = i;
        renderPage();
        window.scrollTo({ top: document.querySelector('.item-gallery').offsetTop - 80, behavior: 'smooth' });
      });
      paginationControls.appendChild(btn);
    }

    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next ›';
    nextBtn.className = 'page-btn';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
      currentPage++;
      renderPage();
      window.scrollTo({ top: document.querySelector('.item-gallery').offsetTop - 80, behavior: 'smooth' });
    });
    paginationControls.appendChild(nextBtn);
  }

  // フィルターボタンのクリック処理
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      currentPage = 1; // フィルターを変えたら1ページ目に戻す
      renderPage();
    });
  });

  renderPage(); // 初期表示
});