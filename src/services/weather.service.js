const API_KEY = "apikey";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherData = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return {
      temperature: data.main.temp,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
