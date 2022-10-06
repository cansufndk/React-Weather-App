import React, { useState } from "react";
import axios from "axios";
import './weather.css'


const Weather = ({ city, setState, setCity }) => {
  const key = "dd6a37edada639bf74212095f79817f4"; //api
  const [search, setSearch] = useState(); //şehir verilerini tutmak için

  const handleClick = async () => { //butona basıltığında data gelmesi için
    try {
      const response = await (
        await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric&lang=tr`
        )
      ).data;//apiden sadece datayı çekmek için
      setCity(response); //veri üzeirnde işlem yapmak için 
      await setState(true); //veriyi diğer componente iletirken async olması için
    } catch (error) {
      console.error(error);
    }
setSearch("")
  };

  return (
    <div className="weather">   
      <input className="input" type="text" value={search} onChange={(e) => setSearch(e.target.value)} /> 
      <button className="button" onClick={handleClick}>Click</button>
    </div>
  );
};
export default Weather;
