import "./App.css";
import Container from "./Container";
import List from "./components/List";

import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <Container />
    </WeatherProvider>
  );
}

export default App;
