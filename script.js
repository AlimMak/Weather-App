document.getElementById("getWeatherButton").addEventListener("click", fetchWeather)

async function fetchWeather(){
    city = document.getElementById("cityName");
    cityName = city.value;
    //console.log(cityName);

    try{
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=dc459a8641a9ec6682a61825f917bf92&units=metric");
   
        if (!response.ok){
            throw new Error("Could not get city weather")
        }

        const data = await response.json();
        console.log(data);
        const weatherData = document.getElementById("weatherinfo");
        weatherData.innerHTML = ""

        const cityDisplayName = document.createElement("h1");
        cityDisplayName.textContent = data.name;
        cityDisplayName.className = "cityDisplay";

        
        const mainDesc = document.createElement("h2");
        mainDesc.textContent = data.weather[0].main;
        mainDesc.className = "mainDesc"; 


        const temperature = document.createElement("h3");
        temperature.textContent = "Temp: " + Math.round(convertToFahrenheit(data.main.temp)) + " \u2109";
        temperature.className = "temperature";


        const humidity = document.createElement("h3");
        humidity.textContent = "Humidity: " + Math.round(data.main.humidity);
        humidity.className = "humidity";

        const iconCode = data.weather[0].icon;
        const iconURL = "https://openweathermap.org/img/wn/"+iconCode+"@2x.png";
        console.log(iconURL);
        const weatherIcon = document.createElement("img");
        weatherIcon.className = "weatherImage";
        weatherIcon.src = iconURL;
        weatherIcon.alt = "Weather Icon"

        const cityAndIcon = document.createElement("div");
        cityAndIcon.className = "topline";
        cityAndIcon.appendChild(cityDisplayName);
        cityAndIcon.appendChild(weatherIcon);
        cityAndIcon.appendChild(mainDesc);

        //weatherData.appendChild(cityDisplayName);
        //weatherData.appendChild(weatherIcon);
        weatherData.appendChild(cityAndIcon);
        //weatherData.appendChild(mainDesc);
        weatherData.appendChild(temperature);
        weatherData.appendChild(humidity);
        
        console.log(data)

    }
    catch(error){
        console.error(error);
    }

}

function convertToFahrenheit(arg){
    return (arg * (9/5)) + 32
}











/*
function getWeather(){
city = document.getElementById("cityName");
cityName = city.value;
console.log(cityName);

fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=dc459a8641a9ec6682a61825f917bf92&units=metric")
        .then(response => {
            if(!response.ok) {
                throw new Error("Could not find city");
            }
            return response.json();
        })
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
*/

/*
fetch("https:api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=dc459a8641a9ec6682a61825f917bf92&units=metric")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error)); 
}
    */