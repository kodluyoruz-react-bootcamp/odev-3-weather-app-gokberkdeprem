import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";

function List() {
  const { weather } = useContext(WeatherContext);
  console.log(weather);
  return (
    <div>
      <pre>{JSON.stringify(weather?.city, null, 2)}</pre>

      <div>{weather?.list.map((day, index) => console.log(day))}</div>
    </div>
  );
}

export default List;
