import React from "react";
import "./weatherList.css";

const WeatherList = ({ city, state }) => {
  console.log(city);

  //ifelse ile veri geldiyse göster yoksa boş bırakmak için
  return (
    <div className="weatherList">
      {state ? (
        <div>
          <h1 id="h1">{city.name}</h1>
          <h2 id="main">{city.main.temp}</h2>
          <h2 id="country">{city.sys.country}</h2>
          <h2 id="weather"> {city.weather[0].description}</h2>
          <h3 id="feels">Hissedilen: {city.main.feels_like}</h3>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherList;
