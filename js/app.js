import { fetchCoordenades, fetchCityName } from "./api.js";

fetchCoordenades(document.getElementById('city-resp').textContent);
fetchCityName(document.getElementById('city-resp').textContent);

export const displayUi = (dataJson) => {
    const { co, no, no2, o3, so2, pm2_5, pm10, nh3 } = dataJson.list[0].components;

    const template = `<ul> 
        <li>Сoncentration of CO: ${co} µg/m³</li>
        <li>Concentration of NO: ${no} µg/m³</li>
        <li>Concentration of NO2: ${no2} µg/m³</li>
        <li>Concentration of O3: ${o3} µg/m³</li>
        <li>Concentration of SO2: ${so2} µg/m³</li>
        <li>Concentration of PM2.5: ${pm2_5} µg/m³</li>
        <li>Concentration of PM10: ${pm10} µg/m³</li>
        <li>Concentration of NH3: ${nh3} µg/m³</li>
    `
    document.getElementById('template').innerHTML = template;
}

export const displayTitle = (city, country) => {
    const title = `<h1>${city}, ${country}</h1>`;
    document.getElementById('city-resp').innerHTML = title;
    document.title = `Air quality in ${city}, ${country}`;

    //const date = new Date();
    //const day = date.getDate();
}