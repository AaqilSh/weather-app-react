import Header from "./components/Header";
import TemperatureCard from "./components/TemperatureCard";
import FeelsLikeCard from "./components/FeelsLikeCard";
function App() {
  return (
    <div>
      <Header />
      <div className="mt-8 flex justify-center gap-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-500">
        <TemperatureCard temperature={25} />
        <FeelsLikeCard feelsLike={25} />
      </div>
    </div>
  );
}

export default App;
