tailwind.config = {
  theme: {
    extend: {
      colors: {
        LOCKER: '#CB1517',
      }
    }
  }
}




var map = L.map('map').setView([51.505, -0.09], 5);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
map.locate({setView: true, maxZoom: 5});
//  map.on('locationfound', function(e) {
//      L.marker(e.latlng).addTo(map);

//  });


let LockerTwo = L.marker([49.8988,10.9028]).addTo(map).bindPopup(`Bamberg Bahnhof 9 <a href="#">select location</a> 1 free`).openPopup();
let lockerThree = L.marker([49.9456,11.5713]).addTo(map).bindPopup(`Universitätsstraße 30 <a href="#">select location</a> 5`);
let LockerFour = L.marker([49.4875,8.4660]).addTo(map).bindPopup(`Mannheim Bahnhof 9 <a href="#">select location</a> 12 free`).openPopup();
let LockerFive = L.marker([50.9375,6.9603]).addTo(map).bindPopup(`Köln Bahnhof 9 <a href="#">select location</a> 12 free`).openPopup();
let Lockersix = L.marker([51.3127, 9.4797]).addTo(map).bindPopup(`Kassel Bahnhof 9 <a href="#">select location</a> 12 free`).openPopup();
let LockerKulmbach = L.marker([50.10068, 11.45032]).addTo(map).bindPopup(`Kulmbah Bahnhof  <a href="#">select location</a> 5 free`).openPopup();




// var markers = [
//   {pos: [50.1039, 11.4448], popup: `Fritz-Hornschuch-Straße 9 <a href="#">selec location</a> 0 free`},
//   {pos: [52.5200,13.4050], popup:`Berlin Central Station <a href="#">select location </a>(8 free) `},
//   {pos: [49.9456,11.5713], popup: "This is the popup for marker #3"}];
// markers.forEach(function (obj) {
//   var m = L.marker(obj.pos).addTo(map),
//       p = new L.Popup({ autoClose: false, closeOnClick: false })
//               .setContent(obj.popup)
//               .setLatLng(obj.pos);
//   m.bindPopup(p).openPopup();
// });


// var circle = L.circle([50.2169, 11.3066], {
//   color: 'red',
//   fillColor: '#f03',
//   fillOpacity: 0.5,
//   radius: 500
// }).addTo(map).bindPopup(`Sitec <a href="#">select location </a>(15 free) `).openPopup();


let  LockerBerlin = L.marker([52.5200,13.4050]).addTo(map).bindPopup(`Berlin Central Station <a href="#">select location </a>(8 free) `).openPopup();









let greenIcon = L.icon({
  iconUrl: 'siteclogo.png',
  

  iconSize:     [30, 30], // size of the icon
  iconAnchor:   [60, 60], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([50.20568671591725, 11.30441086943265], {icon: greenIcon}).addTo(map);
