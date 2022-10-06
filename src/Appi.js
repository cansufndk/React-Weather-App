import React, { useState } from "react";
import Weather from "./components/Weather";
import WeatherList from "./components/WeatherList";
import "./Appi.css";

const Appi = () => {
  const [city, setCity] = useState([]);
  const [state, setState] = useState(false); //hook içinde async olması için
  return (
    <div id="appi">
      <h1 id="baslik">Weather Forecast</h1>
      <Weather setCity={setCity} setState={setState} />
      <WeatherList city={city} state={state} />
    </div>
  );
};

export default Appi;
