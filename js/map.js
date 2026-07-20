// 地図を作成
const map = L.map('map').setView([35.6812, 139.7671], 13);

L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
  {
    attribution: '&copy; Stadia Maps &copy; OpenStreetMap contributors'
  }
).addTo(map);

const locations = [
  {
    name: 'Suga Shrine',
    lat: 35.68516284592106,
    lng: 139.7233299522509
  },
  {
    name: 'Shinjuku',
    lat: 35.6895,
    lng: 139.6917
  },
  {
    name: 'Shibuya Crossing',
    lat: 35.6580,
    lng: 139.7016
  }
];

locations.forEach(location => {
  L.marker([location.lat, location.lng])
    .addTo(map)
    .bindPopup(location.name);
});

marker.on('click', function(){
    document.getElementById("info-panel").style.display = "block";
});