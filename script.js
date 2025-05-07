const searchBtn = document.getElementById("searchBtn"); 
const inputBox = document.querySelector(".input-box"); 
const weather_img = document.querySelector(".weather-img"); 
const temperature = document.querySelector(".temperature"); 
const description = document.querySelector(".description"); 
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed"); 

const location_not_found = document.querySelector(".location-not-found"); 
const weather_body = document.querySelector(".weather-body"); 
 
async function checkWeather(city){
    const api_key ="8513f1eba2664367cdb5a57f5ce60c15";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
     
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data)

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    description.innerHTML = `${weather_data.main.humidity}%`;
    description.innerHTML = `${weather_data.wind.speed}km/H`;


    switch(weather_data)


}




searchBtn.addEventListener("click", ()=>{
    checkWeather(inputBox.value)
})