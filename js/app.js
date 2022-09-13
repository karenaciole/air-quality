'use strict';

const fetchCoordenades = async(city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    
    await fetch(url).then(res => res.json())
    .catch(() => alert ('City not found'))
    .then(jsonObj => fetchAirQuality(jsonObj.coord));
}

const fetchCityName = async(city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    
    await fetch(url).then(res => res.json())
    .catch(() => alert ('City not found'))
    .then(jsonObj =>  displayTitle(jsonObj.name, jsonObj.sys.country));
}

const fetchAirQuality = async(coordenades) => {
    const lat = coordenades.lat;
    const lon = coordenades.lon;
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        
    await fetch(url).then(res => res.json())
    .catch(() => alert ('Unable to fetch data'))
    .then(dataJson => displayUi (dataJson));
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

const displayTitle = (city, country) => {
    const title = `<h1>${city}, ${country}</h1>`;
    document.getElementById('city-location').innerHTML = title;
    document.title = `Air quality in ${city}, ${country}`;

    //const date = new Date();
    //const day = date.getDate();

}

fetchCoordenades(document.getElementById('city-location').textContent);
fetchCityName(document.getElementById('city-location').textContent);

