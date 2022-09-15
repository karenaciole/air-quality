import { fetchCoordenades, fetchCityName } from "./api.js";

export const displayUi = (dataJson) => {
    const { co, no, no2, o3, so2, pm2_5, pm10, nh3 } = dataJson.list[0].components;
    const index = dataJson.list[0].main.aqi;

    const template = `
        <ul> 
            <li>Сoncentration of CO: ${co} µg/m³</li>
            <li>Concentration of NO: ${no} µg/m³</li>
            <li>Concentration of NO2: ${no2} µg/m³</li>
            <li>Concentration of O3: ${o3} µg/m³</li>
            <li>Concentration of SO2: ${so2} µg/m³</li>
            <li>Concentration of PM2.5: ${pm2_5} µg/m³</li>
            <li>Concentration of PM10: ${pm10} µg/m³</li>
            <li>Concentration of NH3: ${nh3} µg/m³</li>
        </ul>
    `
    document.getElementById('template').innerHTML = template;
    displayAirQuality(index);
}

export const displayTitle = (city, country) => {
    const title = `<h1>${city}, ${country}</h1>`;
    document.getElementById('city-resp').innerHTML = title;
    document.title = `Air quality in ${city}, ${country}`;

    const date = new Date();
    const monthFormatted = date.getMonth.length.toString === 0 ? date.getMonth() + 1 : ("0" + (date.getMonth() + 1));
    document.getElementById('date').innerHTML = monthFormatted + "/" + date.getDate() + "/" + date.getFullYear();  
}

const displayAirQuality = (index) => {
    switch(index) {
        case 1:
            document.getElementById('index').innerHTML = "Good Air Quality";
            document.getElementsByClassName('img__airquality')[0].src = "../assets/good.svg";
            break;
        case 2:
            document.getElementById('index').innerHTML = "Fair Air Quality";
            document.getElementsByClassName('img__airquality')[0].src = "../assets/fair.svg";
            break;
        case 3:
            document.getElementById('index').innerHTML = "Moderate Air Quality";
            document.getElementsByClassName('img__airquality')[0].src = "../assets/moderate.svg";
            break;
        case 4:
            document.getElementById('index').innerHTML = "Poor Air Quality";
            document.getElementsByClassName('img__airquality')[0].src = "../assets/poor.svg";
            break;
        case 5:
            document.getElementById('index').innerHTML = "Very Poor Air Quality";
            document.getElementsByClassName('img__airquality')[0].src = "../assets/very-poor.svg";
            break;
        default:
            document.getElementById('index').innerHTML = "Unknown";
    }
}

fetchCoordenades(document.getElementById('city-resp').textContent);
fetchCityName(document.getElementById('city-resp').textContent);