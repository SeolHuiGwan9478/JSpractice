const API_KEY = '';

function onGeoOk(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);       
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:nth-child(1)");
            const city = document.querySelector("#weather span:nth-child(2)");
            console.log(weather);
            console.log(city);
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);