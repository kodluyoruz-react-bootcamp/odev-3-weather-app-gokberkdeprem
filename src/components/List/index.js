import { useContext } from "react";
import styles from "./index.module.css";
import WeatherContext from "../../context/WeatherContext";
import Card from "../Card";

function List() {
  const { weather } = useContext(WeatherContext);
  console.log(weather);
  return (
    <div>
      <pre>{JSON.stringify(weather?.city, null, 2)}</pre>

      <div className={styles.listContainer}>
        {weather?.list.map((day, index) => (
          <Card day={day} key={index}></Card>
        ))}
      </div>
    </div>
  );
}

export default List;
