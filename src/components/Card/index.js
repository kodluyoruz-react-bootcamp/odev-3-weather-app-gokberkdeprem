import React from "react";
import moment from "moment";
import "moment/locale/tr";

function Card({ day }) {
  return (
    <div >
      <div>{moment(day.dt * 1000).format("Do MMMM, dddd H:mm")}</div>
      <img
        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        alt=""
      />
      <br></br>
      <span> Max Sıcaklık{day.main.temp_max}</span>
      <br></br>
      <span>Min Sıcaklık{day.main.temp_min}</span>
      <br></br>
      <br></br>
    </div>
  );
}

export default Card;
