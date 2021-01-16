import { createContext, useState, useEffect } from "react";
import { API_ENDPOINT } from "../constants";

import axios from "axios";

//context API component is defined
const WeatherContext = createContext(null);

//it is used in app.js file to wrap the elements and use them
export const WeatherProvider = ({ children }) => {
  //holds selected city, Adana by default
  const [selected, setSelected] = useState("Adana");
  //holds weather information of selected city
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=istanbul&appid=${process.env.REACT_APP_KEY}&units=metric&cnt=7`;

    axios.get(url).then((response) => console.log(response.data));
  }, [selected]);

  console.log(weather);
  return (
    <WeatherContext.Provider value={selected}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
