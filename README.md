# 🌤️ Weather Web Application

![Weather App Screenshot](./Screenshot%202025-11-12%20at%2011.09.47.png)

A simple and elegant **Weather Web App** built with **HTML**, **CSS**, and **JavaScript**, using the **OpenWeather API** to display real-time weather information for any city in the world.

---

## 🧭 Overview

This project allows users to search for a city and instantly view its **current temperature**, **weather condition**, and **description**, all fetched live from the OpenWeather API.  
The app was built to practice **API integration**, **asynchronous JavaScript (fetch + async/await)**, and **DOM manipulation**.

---

## ⚙️ Features

- 🔍 Search weather by city name  
- 🌦️ Displays current temperature and weather description  
- 🧊 Dynamic weather icons based on live data  
- 🪄 Clean, simple, and responsive UI design  
- ⚡ Built entirely with Vanilla JavaScript (no frameworks)

---

## 🧩 How It Works

1. The user types a **city name** in the input box.  
2. JavaScript sends a **request to the OpenWeather Geocoding API** to get the city’s latitude and longitude.  
3. Using those coordinates, the app sends another request to the **Current Weather API**.  
4. Once the data is received, it updates the HTML dynamically to display:
   - City name  
   - Current temperature (in °C)  
   - Weather description  
   - Weather icon  

---

## 🌐 API Usage Explained

The app uses **two endpoints** from the [OpenWeather API](https://openweathermap.org/api):

### 1. 🗺️ Geocoding API  
**Endpoint:**  
```
https://api.openweathermap.org/geo/1.0/direct?q={cityName},{countryCode}&limit=1&appid={apiKey}
```
- Converts a city name into geographic coordinates (latitude and longitude).  
- Example:
  ```bash
  https://api.openweathermap.org/geo/1.0/direct?q=Rabat,212&limit=1&appid=YOUR_API_KEY
  ```

**Response Example:**
```json
[
  {
    "name": "Rabat",
    "lat": 34.0209,
    "lon": -6.8416,
    "country": "MA"
  }
]
```

---

### 2. 🌦️ Current Weather Data API  
**Endpoint:**  
```
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}
```
- Fetches real-time weather data using the coordinates.  
- Example:
  ```bash
  https://api.openweathermap.org/data/2.5/weather?lat=34.0209&lon=-6.8416&appid=YOUR_API_KEY
  ```

**Response Example:**
```json
{
  "weather": [{ "description": "clear sky", "icon": "01d" }],
  "main": { "temp": 295.15 },
  "name": "Rabat"
}
```

The app then:
- Converts the temperature from **Kelvin to Celsius** using:
  ```js
  Math.round(data.main.temp - 273.15)
  ```
- Updates the web page dynamically using DOM manipulation to show the results.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure and content |
| **CSS3** | Styling and layout |
| **JavaScript (ES6)** | Logic, API handling, and DOM updates |
| **OpenWeather API** | Provides live weather data |

---

## 🧑‍💻 Installation & Setup

1. **Clone this repository**
   ```bash
   git clone https://github.com/<your-username>/weather-app.git
   cd weather-app
   ```

2. **Open the project**
   Just open `index.html` in your browser — no setup required!

3. **Add your API key**
   Replace the `apiKey` variable in your `script.js` file with your own API key from [OpenWeather](https://home.openweathermap.org/api_keys):
   ```js
   const apiKey = "YOUR_API_KEY_HERE";
   ```

4. **Search for a city**
   Type a city name and click “Search” to see the weather instantly!

---

## 💡 Future Enhancements

- 📍 Add automatic location detection (using Geolocation API)  
- 🌈 Implement dark/light mode toggle  
- 📅 Show 5-day weather forecast  
- 💨 Display wind speed, humidity, and pressure  

---

## 👨‍🎨 Author

**Ziad Derfoufi**  
🎓 42 Network Bootcamp Student  
🔗 [GitHub Profile](https://github.com/2iaad)

---

## 🪪 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute this project.

---

✨ *“Code, Learn, and Build something amazing!”* ✨
