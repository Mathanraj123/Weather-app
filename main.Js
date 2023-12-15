const apikey = "9b681d26546c8a0c89661272303e6e2b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const catching = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await catching.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "Km/hr";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "images/clouds.png"
    }else if(data.weather[0].main == "Clear"){
        weathericon.src = "images/clear.png"
    }else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png"
    }else if(data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.png"
    }else if(data.weather[0].main == "Snow"){
        weathericon.src = "images/snow.png"
    }else if(data.weather[0].main == "Dizzle"){
        weathericon.src = "images/dizzle.png"
    }
}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})
