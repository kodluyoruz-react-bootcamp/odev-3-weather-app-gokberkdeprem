import { cities } from "../../constants";
import React from "react";

//1-dropdown component is created with select and option tags
//1-city names are taken from a constants file
function Header() {
  return (
    <div>
      <select>
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
