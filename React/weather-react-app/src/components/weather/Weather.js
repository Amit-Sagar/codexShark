import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weatherData } from "../../store/WeaterAction";

const Weather = () => {
  const [weather, setWeather] = useState("Ramnagar");
  const data = useSelector((state) => state.weatherReducer);
  console.log("weather data ", data);
  const dispatch = useDispatch();

  const getWeatherData = () => {
    dispatch(weatherData(weather));
    setWeather("");
  };

  return (
    <div className="w-4/5 mx-auto mt-10 bg-slate-400">
      <div className="flex w-full ">
        <input
          type="search"
          placeholder="search..."
          className="w-4/5 py-2 px-1"
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
        />
        <button onClick={getWeatherData} className="rounded-r-lg">
          Search
        </button>
      </div>
      <div>
        {data.name}
        {/* {data.map((item) => {
          return <h1>{item.name}</h1>;
        })} */}
      </div>
    </div>
  );
};

export default Weather;
