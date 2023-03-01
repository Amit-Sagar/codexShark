import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weatherData } from "../../store/WeaterAction";
import SearchCity from "./SearchCity";
import WeatherData from "./WeatherData";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const data = useSelector((state) => state.weatherReducer);
  const dispatch = useDispatch();

  const getWeatherData = () => {
    dispatch(weatherData(weather));
    setWeather("");
  };

  return (
    <div className="bg-cover-image p-2">
      {data.length == "" ? (
        <SearchCity
          weather={weather}
          setWeather={setWeather}
          getWeatherData={getWeatherData}
        />
      ) : (
        <WeatherData
          weather={weather}
          setWeather={setWeather}
          data={data}
          getWeatherData={getWeatherData}
        />
      )}
    </div>
  );
};

export default Weather;
