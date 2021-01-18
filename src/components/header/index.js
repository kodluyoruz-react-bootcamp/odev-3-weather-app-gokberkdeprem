import { cities } from "../../constants";
import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";

//1-dropdown component is created with select and option tags
//1-city names are taken from a constants file
function Header() {
  const { selected, setSelected } = useContext(WeatherContext);

  const handleOnChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <select onChange={handleOnChange} defaultValue={selected}>
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Header;
