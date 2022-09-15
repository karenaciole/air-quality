import { displayUi, displayTitle } from "./app.js";

export const fetchCoordenades = async(city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    
    await fetch(url).then(res => res.json()) 
    .catch(() => alert ('City not found 😢'))
    .then(jsonObj => fetchAirQuality(jsonObj.coord));
}

export const fetchAirQuality = async(coordenades) => {
    const lat = coordenades.lat;
    const lon = coordenades.lon;
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        
    await fetch(url).then(res => res.json())
    .catch(() => alert ('Unable to fetch data 💀'))
    .then(dataJson => displayUi (dataJson));
}

export const fetchCityName = async(city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    
    await fetch(url).then(res => res.json())
    .catch(() => alert ('City not found 😢'))
    .then(jsonObj =>  displayTitle(jsonObj.name, jsonObj.sys.country));
}
