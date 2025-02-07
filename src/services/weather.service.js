const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";
const GEO_API_URL = "https://geocoding-api.open-meteo.com/v1/search";

export const getWeatherData = async (city) => {
  try {
    const geoResponse = await fetch(`${GEO_API_URL}?name=${city}&count=1`);
    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found");
    }

    const { latitude, longitude } = geoData.results[0];

    // Step 2: Fetch weather data using latitude & longitude
    const weatherResponse = await fetch(
      `${WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
    );

    if (!weatherResponse.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const weatherData = await weatherResponse.json();

    return {
      temperature: weatherData.hourly.temperature_2m[0], // Gets the latest hourly temperature
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
