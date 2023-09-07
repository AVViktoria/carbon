let map;
async function initMap() {
  const ulurl = { lat: 50.0791851, lng: 35.6608893 };
  // const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: ulurl,
    zoom: 8,
  });
  const marker = new google.maps.Marker({
    position: ulurl,
    map: map,
  });
}
initMap();
