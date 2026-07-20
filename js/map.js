const map = L.map('map').setView([35.6812, 139.7671], 13);

L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
  { attribution: '&copy; Stadia Maps &copy; OpenStreetMap contributors' }
).addTo(map);

const locations = [
  { name: 'Suga Shrine',
    lat: 35.68516284592106,
    lng: 139.7233299522509,
    desc: 'The iconic shrine where Taki and Mitsuha meet in the real world at the end of the film',
    image: 'assets/img/kaidan.jpg'   
  },
  { name: 'Salon de Thé ROND',
    lat: 35.66549383753738,
    lng: 139.726374,
    desc: '東京最大級の繁華街',
    image: 'assets/img/cafe.jpeg'
  },
  { name: 'Mori Tower',
    lat: 35.660946952407805,
    lng: 139.72917822346997,
    desc: '有名なスクランブル交差点',
    image: ''
  }
];

const panel = document.getElementById('info-panel');
const title = document.getElementById('info-title');
const desc = document.getElementById('info-desc');
const infoImage = document.getElementById('info-image');
const closeBtn = document.getElementById('close-btn');

locations.forEach(location => {
  const marker = L.marker([location.lat, location.lng])
    .addTo(map)
    .bindPopup(location.name);

  marker.on('click', function () {
    title.textContent = location.name;
    desc.textContent = location.desc;
    infoImage.src = location.image;
    panel.classList.add('visible');
  });
});

closeBtn.addEventListener('click', function () {
  panel.classList.remove('visible');
});