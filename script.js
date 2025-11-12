const apiKey = "";

async function fetchWeather()
{
    let searchInput = document.getElementById("search").value; // Get the search input
    
    const weatherDataSection = document.getElementById("weather-data"); // prepare the response section of the request
    weatherDataSection.style.display = "block"

    if (searchInput == "") // parse if the input is empty
    {
        weatherDataSection.innerHTML = `
        <div>
            <h2>Empty Input!</h2>
            <p>Please try again with a valid <u>city name</u>.</p>
        </div>
        `;
        return;
    }

    async function getLonAndLat() // helper function to get coordinates of a city
    {
        const countryCode = 212;
        const geocodeURL = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInput.replace(" ", "%20")},${countryCode}&limit=1&appid=${apiKey}`; // prepare URL
        const response = await fetch(geocodeURL); // sends a GET request to the URL (OpenWeatherMap Geocoding API).
        if (!response.ok) // check the return status of the server (if 200 then its ok)
        {
            console.log("Bad response! ", response.status);  // 404 for example
            return;
        }

        const data = await response.json(); // get the actual geocode data in JSON
        if (data.length == 0) // API found no city with that name -> display error to the weatherDataSection
        {
            console.log("Something went wrong here.");
            weatherDataSection.innerHTML = `
            <div>
                <h2>Invalid Input: "${searchInput}"</h2>
                <p>Please try again with a valid <u>city name</u>.</p>
            </div>
            `;
            return;
        }
        else { return data[0]; }
    }

    async function getWeatherData(lon, lat) // Get the actual data using the cordinations
    {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        const response = await fetch(weatherURL); // sending GET request
        if (!response.ok) // check code status of the http response
        {
            console.log("Bad response! ", response.status);
            return;
        }

        const data = await response.json(); // convert response to JS object notation hehe
        weatherDataSection.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}" width="150" />
        <div>
            <h2>${data.name}</h2>
            <p><strong>Temperature:</strong> ${Math.round(data.main.temp - 273.15)}°C</p>
            <p><strong>Description:</strong> ${data.weather[0].description}</p>
        </div>
        `
    }
    document.getElementById("search").value = "";  // init search input to ""
    const geocodeData = await getLonAndLat();
    /*
         console.log(geocodeData) will print this:
        {
            name: "Casablanca",
            lat: 33.5883,
            lon: -7.6114,
            country: "MA"
        }
    */
    getWeatherData(geocodeData.lon, geocodeData.lat);
}
