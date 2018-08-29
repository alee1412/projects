// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
  center: [45.52, -122.67],
  zoom: 13
});

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
// streets
// light
// dark
// streets-satellite
// wheatpaste
// run-bike-hike
// outdoors
// pirates
// pencil
// emerald
// high-contrast 
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.pirates",
  accessToken: API_KEY
}).addTo(myMap);

// Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method
var marker = L.marker([45.52, -122.67], {
  draggable: false,
  title: "Center"
}).addTo(myMap);

const data = {label: 'Hi'}

// Binding a pop-up to our marker
marker.bindPopup(`${data.label}`);
