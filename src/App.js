import Header from "./components/Header";
import TemperatureCard from "./components/TemperatureCard";

function App() {
  return (
    <div>
      <Header />
      <div className="mt-8 flex justify-center">
        <TemperatureCard temperature={25} />
      </div>
    </div>
  );
}

export default App;
