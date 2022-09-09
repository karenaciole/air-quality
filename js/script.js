'use strict';

const getAirQualityFromCoordenades = async() => {
    getCoordenadesByCityName().then(async coordenades => {
        const lat = coordenades.lat;
        const lon = coordenades.lon;
        const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        
        await fetch(url).then(res => res.json()).then(data => {
            return(data.list[0].components);
        });
    });
}

const getCoordenadesByCityName = async() => {
    const city = document.getElementById('city').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    await fetch(url).then(res => res.json()).then(data => {
        return data.coord;
    });
}



        
