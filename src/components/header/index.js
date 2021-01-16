import { cities } from "../../constants";

import React from "react";

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
