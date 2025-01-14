let key = '4ad768ee8e79dd6ff7c6990d0e49d0d8';

async function getCity(citySelect) {
  let dataServer = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      citySelect +
      '&appid=' +
      key +
      '&lang=pt_br' +
      '&units=metric'
  ).then((response) => response.json());
  console.log(dataServer);
  placeData(dataServer);
}
function search() {
  let citySelect = document.querySelector('.input-location').value;

  getCity(citySelect);
}

function placeData(dataServer) {
  document.querySelector('.location').innerHTML = 'Tempo em ' + dataServer.name;
  document.querySelector('.temp-location').innerHTML =
    Math.floor(dataServer.main.temp) + '°C';
  document.querySelector('.type-temp').innerHTML =
    dataServer.weather[0].description;
  document.querySelector('.humidity').innerHTML =
    dataServer.main.humidity + '% Umidade';
  document.querySelector('.clim-img').src =
    'https://openweathermap.org/img/wn/' + dataServer.weather[0].icon + '.png';
}
