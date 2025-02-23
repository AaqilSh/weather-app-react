import { useEffect, useState } from "react";
import { getWeatherData } from "./services/weather.service";
import Header from "./components/Header";
import TemperatureCard from "./components/TemperatureCard";
import FeelsLikeCard from "./components/FeelsLikeCard";
import SearchBar from "./components/SearchBar";
import HumidityCard from "./components/HumidityCard";
import WindSpeedCard from "./components/WindSpeedCard";
import UVIndexCard from "./components/UvIndexCard";
import SunriseSunsetCard from "./components/SunriseSunsetCard";
import PrecipitationCard from "./components/PrecepetationCard";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("London");

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeatherData(city);
      if (data) {
        setWeather(data);
      }
    };
    fetchWeather();
  }, [city]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-500">
      <Header className="mb-6 px-4" />
      <div className="justify-center px-4 mt-4 mb-4">
        <SearchBar onSearch={setCity} />
      </div>
      <div class="px-6 mt-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center pb-8">
          <TemperatureCard temperature={weather?.temperature || "Loading.."} />
          <FeelsLikeCard feelsLike={weather?.feelsLike || "Loading.."} />
          <HumidityCard humidity={weather?.humidity || "Loading.."} />
          <WindSpeedCard windSpeed={weather?.windSpeed || "Failed to Load"} />
          <UVIndexCard uvIndex={weather?.uvIndex || "Loading"} />
          <SunriseSunsetCard
            sunrise={weather?.sunrise || "Loading.."}
            sunset={weather?.sunset || "Loading.."}
          />
          <PrecipitationCard
            precipitation={weather?.precipitation || "Loading.."}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
