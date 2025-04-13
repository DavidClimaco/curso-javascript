//API KEY:
let apiKey = 'd354d1492d79f691fd602edc85871cc3';
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let ciudad = 'cuscatancingo';
const kelvin = 273.15;

document.getElementById('botonBusqueda').addEventListener('click', () => {
    ciudad = document.getElementById('ciudadEntrada').value;
    if(ciudad){
        fetchDatosClima(ciudad);
    }
});

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
   const divDatosClima = document.getElementById('datosClima');
   divDatosClima.innerHTML = '';
   
   const nombreCiudad = data.name;
   const nombrePais = data.sys.country;
   const temperatura = data.main.temp;
   const humedad = data.main.humidity;
   const descripcion = data.weather[0].description;
   const icono = data.weather[0].icon;

   const ciudadTitulo = document.createElement('h2');
   ciudadTitulo.textContent = `Ciudad: ${nombreCiudad}, ${nombrePais}`;
   
   const temperaturaCiudad = document.createElement('p');
   temperaturaCiudad.textContent = `La temperatura es: ${Math.floor(temperatura - kelvin)} °C`;

   const humedadCiudad = document.createElement('p');
   humedadCiudad.textContent = `La humedad es: ${humedad}%`;

   const iconoTemperatura = document.createElement('img');
   iconoTemperatura.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

   const descripcionCiudad = document.createElement('p');
   descripcionCiudad.textContent = `La descripción meterológica es: ${descripcion}`;

   divDatosClima.appendChild(ciudadTitulo);
   divDatosClima.appendChild(temperaturaCiudad);
   divDatosClima.appendChild(humedadCiudad);
   divDatosClima.appendChild(iconoTemperatura);
   divDatosClima.appendChild(descripcionCiudad);
}
