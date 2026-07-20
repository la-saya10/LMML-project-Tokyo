document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".item-wrapper");

  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      const filter = button.getAttribute("data-filter");

      // ボタンのactive状態を切り替え
      filterButtons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      // 各アイテムを表示/非表示
      items.forEach(item => {
        if (filter === "all" || item.getAttribute("data-type") === filter) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});