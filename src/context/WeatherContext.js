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
  const [weather, setWeather] = useState();

  useEffect(() => {
    const url = `${API_ENDPOINT}/forecast?q=${selected}&appid=${process.env.REACT_APP_KEY}&units=metric&exclude=minutely`;

    axios(url).then((response) => setWeather(response.data));
  }, [selected]);

  //transported values
  const values = {
    selected,
    setSelected,
    weather,
    setWeather,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
