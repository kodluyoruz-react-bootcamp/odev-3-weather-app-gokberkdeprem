import "./App.css";
import Header from "./components/header";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <Header></Header>;
    </WeatherProvider>
  );
}

export default App;
