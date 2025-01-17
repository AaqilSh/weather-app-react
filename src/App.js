import Header from "./components/Header";
import TemperatureCard from "./components/TemperatureCard";
import FeelsLikeCard from "./components/FeelsLikeCard";
function App() {
  return (
    <div>
      <Header />
      <div className="mt-8 flex justify-center gap-8">
        <TemperatureCard temperature={25} />
        <FeelsLikeCard feelsLike={25} />
      </div>
    </div>
  );
}

export default App;
