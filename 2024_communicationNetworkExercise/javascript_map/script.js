// JavaScript

const map = L.map('map').setView([51.55321688137271, -0.16959787005461097], 15);

// タイルレイヤーを作成し、地図にセットする

// Open Street Map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
  options: {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });

L.marker([51.55321688137271, -0.16959787005461097], { icon: whiteIcon }).addTo(map)
  .bindPopup('ロンドンの有名な<br> スタジオだよ。<br><img src="images/img01.png" alt="img">');
// .openPopup();
// openPopupの追加で最初から吹き出し表示

L.marker([51.547546580277, -0.16719353787558758], { icon: pinkIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.');

  // クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);
