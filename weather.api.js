require('dotenv').config();

const API = process.env.WEATHER_API_KEY
const lat = 27.6728
const lon = 85.3160

async function getWeather() {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API}&q=${lat},${lon}&days=7`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    const name = data.location.name;
    const country = data.location.country;
    const forecastday = data.forecast.forecastday;


    console.log("Name:",name)
    console.log("Country:",country )

    forecastday.forEach(day => {
        const dayName = new Date(day.date).toLocaleDateString('en-US',{weekday:'long'});
        console.log("\n" );
        console.log("Day",dayName);
        console.log("Weather Status:",day.day.condition.text);
        console.log("Average Temperature:",day.day.avgtemp_c,"°C");
        console.log("Peak Temperature:",day.day.maxtemp_c,"°C");
        console.log("Lowest Tempertaure ",day.day.mintemp_c,'°C');
    });

      } catch (error) {
    console.log("Error Data fetching", error);
  }
}
getWeather();