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
    image: 'assets/img/mori_tower.jpg'
  },
  { name: 'Kabukicho Arch', 
    lat: 35.69541212988438, 
    lng: 139.70080231493728,
    desc: '有名なスクランブル交差点',
    image: 'assets/img/kabuki.jpg'  
  },
  { name: 'Kaminarimon Gate',
    lat: 35.711126817669914,
    lng: 139.79636356300853,
    desc: '有名なスクランブル交差点',
    image: 'assets/img/kaminarimon.jpg'
  },
   { name: 'Japan National Stadium',
    lat: 35.677959719769845, 
    lng: 139.71451643378205,
    desc: '有名なスクランブル交差点',
    image: 'assets/img/stadium.jpeg'   
  },
  { name: 'Shibuya Scramble Crossing',
    lat: 35.659506823503065,
    lng: 139.70055855214449,
    desc: '有名なスクランブル交差点',
    image: 'assets/img/shibuya_crossing.jpg'  
  },
  { name: 'Rainbow Bridge',
    lat: 35.63671039553146, 
    lng: 139.76310889686366,
    desc: '有名なスクランブル交差点',
    image: 'assets/img/sample.jpg'     
  },
  { name: 'Sakurabashi Bridge',
    lat: 35.71740627946332,
    lng: 139.8067093778155,
    desc: '',
    image: 'assets/img/sakurabashi.jpg'    
  },
  { name: 'Yoyogi Fukamachi Mini Park',
    lat: 35.66943894260785, 
    lng: 139.69069912682474,
    desc: '有名なスクランブル交差点',
    image: 'assets/img/yoyogi_park.jpg'      
  },
  { name: 'Yunika Vision',
    lat: 35.69398751376701,
    lng: 139.70061736319636,
    desc: '',
    image: 'assets/img/yunika.jpg'    
  },
  { name: 'Yunika Vision',
    lat: 35.69398751376701,
    lng: 139.70061736319636,
    desc: '',
    image: 'assets/img/yunika.jpg'    
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