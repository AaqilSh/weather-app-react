import Header from "./components/Header";
import TemperatureCard from "./components/TemperatureCard";
import FeelsLikeCard from "./components/FeelsLikeCard";
import SearchBar from "./components/SearchBar";
import HumidityCard from "./components/HumidityCard";
import WindSpeedCard from "./components/WindSpeedCard";
import UVIndexCard from "./components/UvIndexCard";
import SunriseSunsetCard from "./components/SunriseSunsetCard";
import AirQualityCard from "./components/AirQualityCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-500">
      <Header className="mb-6 px-4" />
      <div className="flex justify-center px-4 mt-4 mb-4">
        <SearchBar />
      </div>
      <div class="grid ">
        <div class="grid">
          <div className="px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              <TemperatureCard temperature={25} />
              <FeelsLikeCard feelsLike={25} />
              <HumidityCard humidity={90} />
              <WindSpeedCard windSpeed={15} />
              <UVIndexCard uvIndex={0} />
              <SunriseSunsetCard sunrise={5} sunset={10} />
              <AirQualityCard aqi={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
