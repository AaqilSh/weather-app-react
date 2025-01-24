import Header from "./components/Header";
import TemperatureCard from "./components/TemperatureCard";
import FeelsLikeCard from "./components/FeelsLikeCard";
import SearchBar from "./components/SearchBar";
import HumidityCard from "./components/HumidityCard";
import WindSpeedCard from "./components/WindSpeedCard";
import UVIndexCard from "./components/UvIndexCard";
import SunriseSunsetCard from "./components/SunriseSunsetCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-500">
      <Header className="mb-6 px-4" />
      <SearchBar className="flex justify-center mb-6 px-4">
        <SearchBar />
      </SearchBar>
      <div class="grid ">
        <div class="grid">
          <div className="mt-8 flex justify-center gap-8">
            <TemperatureCard temperature={25} />
            <FeelsLikeCard feelsLike={25} />
            <HumidityCard humidity={90} />
            <WindSpeedCard windSpeed={15} />
            <UVIndexCard uvIndex={0} />
            <SunriseSunsetCard />
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default App;
