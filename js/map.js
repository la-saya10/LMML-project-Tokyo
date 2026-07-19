// 地図を作成
const map = L.map('map').setView([35.6812, 139.7671], 13);

L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
  {
    attribution: '&copy; Stadia Maps &copy; OpenStreetMap contributors'
  }
).addTo(map);

const marker = L.marker([35.6595, 139.7005]).addTo(map);

marker.on('click', function(){
    document.getElementById("info-panel").style.display = "block";
});