/** API coordenadas 
fetch('http://api.openweathermap.org/geo/1.0/direct?q=areia&limit=1&appid=
.then(data => console.log(data));
*/
/** API air pollution 
fetch('http://api.openweathermap.org/data/2.5/air_pollution?lat=41&lon=23&appid=')
.then(res => console.log(res))
.then(data => console.log(data))
*/
'use strict';

const getLocationByCoordenades = () => {
    const city = document.getElementById('city').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

}