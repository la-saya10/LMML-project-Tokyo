document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const item = locations[id];

  if (item) {
    document.getElementById("page-title").textContent = item.title;
    document.getElementById("location-title").textContent = item.title;
    document.getElementById("location-scene").textContent = item.scene;
  }
});