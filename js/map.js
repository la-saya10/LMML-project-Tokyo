const map = L.map('map').setView([35.6812, 139.7671], 13);

L.tileLayer(
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  { attribution: '&copy; OpenStreetMap contributors' }
).addTo(map);

const locations = [
  { name: 'Shibuya Scramble Crossing',
    id: 'shibuya-crossing',
    lat: 35.659506823503065,
    lng: 139.70055855214449,
    image: '../assets/img/shibuya_crossing.jpg',
    movie:'Weathering with You'  
  },  
  { name: 'Busta Shinjuku',
    id: 'busta-shinjuku',
    lat: 35.68868333776064, 
    lng: 139.70073136765302,
    image: '../assets/img/busta.jpg',
    movie:'Suzume'   
  },  
  { name: 'Yunika Vision',
    lat: 35.69398751376701,
    lng: 139.70061736319636,
    image: '../assets/img/yunika.jpg',
    link: '',
    movie:'Your Name.'     
  },  
  { name: 'Kabukicho Arch', 
    lat: 35.69541212988438, 
    lng: 139.70080231493728,
    image: '../assets/img/kabuki.jpg',
    link: '',
    movie:'Weathering with You' 
  },
  { name: 'Suga Shrine',
    lat: 35.68516284592106,
    lng: 139.7233299522509,
    address: '5-6 Sugacho, Shinjuku',
    image: '../assets/img/kaidan.jpg',
    link: '',
    movie:'Your Name.'
  },  
  { name: 'MUFG Stadium',
    lat: 35.677959719769845, 
    lng: 139.71451643378205,
    image: '../assets/img/stadium.jpeg',
    link: '',
    movie:'Weathering with You' 
  },  
  { name: 'Meiji Memorial Picture Gallery',
    lat: 35.678778982436775, 
    lng: 139.71770722718,
    image: '../assets/img/meiji_jingu.jpg',
    link: '',
    movie:'Your Name.'   
  }, 
  { name: 'Salon de Thé ROND',
    lat: 35.66549383753738,
    lng: 139.726374,
    address: '7-22-2 Roppongi, Minato',
    image: '../assets/img/cafe.jpeg',
    link: '',
    movie:'Your Name.'
  },
  { name: 'Mori Tower',
    lat: 35.660946952407805,
    lng: 139.72917822346997,
    address: '6-10-1 Roppongi, Minato',
    image: '../assets/img/mori_tower.jpg',
    link: '',
    movie:'Your Name.'
  },
  { name: 'Hachikan Shrine',
    lat: 35.66925059880395, 
    lng: 139.76024893405582,
    image: '../assets/img/hachikan.jpg',
    link: '',
    movie:'Weathering with You'      
  },
  { name: 'Tokyo Station',
    lat: 35.68146221847785,
    lng: 139.76702920997994, 
    image: '../assets/img/ameyoko.jpg',
    link: '',
    movie:'Suzume'   
  },
  { name: 'Hijiri Bridge',
    lat: 35.69981616854073, 
    lng: 139.76549646306987,
    image: '../assets/img/hijiri.jpg',
    link: '',
    movie:'Suzume'   
  },
  { name: 'Ameyoko Shopping Street',
    lat: 35.71025032496917, 
    lng: 139.77457077929006,
    image: '../assets/img/ameyoko.jpg',
    link: '',
    movie:'Weathering with You'   
  },
  { name: 'Kaminarimon Gate',
    lat: 35.711126817669914,
    lng: 139.79636356300853,
    image: '../assets/img/kaminarimon.jpg',
    link: '',
    movie:'Weathering with You'
  },
  { name: 'Rainbow Bridge',
    lat: 35.63671039553146, 
    lng: 139.76310889686366,
    image: '../assets/img/sample.jpg',
    movie:'Weathering with You'  
  },
];

const panel = document.getElementById('info-panel');
const title = document.getElementById('info-title');
const desc = document.getElementById('info-desc');
const infoImage = document.getElementById('info-image');
const closeBtn = document.getElementById('close-btn');

// ピンを全部ここに保存しておく(locations と同じ順番)
const markers = [];

// 今どの番号か
let current = 0;

locations.forEach((loc, i) => {
  const popupHtml = `
    <div class="lmml-popup">
      <img src="${loc.image}" alt="${loc.name}">
      <h3>${loc.name}</h3>
      <p>Film: ${loc.movie}</p>
      <a class="lmml-popup-btn" href="template.html?id=${loc.id}">see more</a>
    </div>
  `;

  const marker = L.marker([loc.lat, loc.lng])
    .addTo(map)
    .bindPopup(popupHtml, { minWidth: 260, maxWidth: 300 });

  // ピンが押されたら、そのピンの番号を「今の位置」にする
  marker.on('click', () => {
    current = i;
  });

  markers.push(marker);
});

// 指定した番号のピンへ移動して、吹き出しを開く
function goTo(index) {
  current = index;
  const loc = locations[current];
  map.flyTo([loc.lat, loc.lng], 16);
  map.once('moveend', () => {
    markers[current].openPopup();
  });
}

document.getElementById('next-btn').addEventListener('click', () => {
  if (current < locations.length - 1) {
    goTo(current + 1);
  }
});

document.getElementById('prev-btn').addEventListener('click', () => {
  if (current > 0) {
    goTo(current - 1);
  }
});