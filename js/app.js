'use strict';

const fetchCoordenades = async(city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    
    await fetch(url).then(res => res.json())
    .then(jsonObj => fetchAirQuality(jsonObj.coord))
    .catch(() => alert ('City not found'));
}

const fetchAirQuality = async(coordenades) => {
    const lat = coordenades.lat;
    const lon = coordenades.lon;
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        
    await fetch(url).then(res => res.json())
    .then(dataJson => displayUi (dataJson))
    .catch(() => alert ('Unable to fetch data'));
}

const displayUi = (dataJson) => {
    const { co, no, no2, o3, so2, pm2_5, pm10, nh3 } = dataJson.list[0].components;

    const template = `<ul>
        <li>CO: ${co} µg/m³</li>
        <li>NO: ${no} µg/m³</li>
        <li>NO2: ${no2} µg/m³</li>
        <li>O3: ${o3} µg/m³</li>
        <li>SO2: ${so2} µg/m³</li>
        <li>PM2.5: ${pm2_5} µg/m³</li>
        <li>PM10: ${pm10} µg/m³</li>
        <li>NH3: ${nh3} µg/m³</li>
    `
    document.getElementById('template').innerHTML = template;
}


fetchCoordenades(document.getElementById('city-location').textContent);
