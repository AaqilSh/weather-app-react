import Header from "./components/Header";
import TemperatureCard from "./components/TemperatureCard";
import FeelsLikeCard from "./components/FeelsLikeCard";
import SearchBar from "./components/SearchBar";
import HumidityCard from "./components/HumidityCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-500">
      <Header />
      <SearchBar />
      <div class="grid ">
        <div class="grid">
          <div className="mt-8 flex justify-center gap-">
            <TemperatureCard temperature={25} />
            <FeelsLikeCard feelsLike={25} />
            <HumidityCard />
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default App;
