import React from "react";

const WeatherData = ({ data, weather, setWeather, getWeatherData }) => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const todayDate = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const time = `${hour}:${min}:${sec}`;
  const day = date.toLocaleDateString("en-US", { weekday: "short" });
  const dayAndMonth = `${todayDate} ${month} ${year}`;

  return (
    <div className="flex w-[60%] mx-auto z-50 h-[550px] p-6 rounded-lg">
      <div className="flex  flex-col justify-between bg-image w-[50%] p-4">
        <div className="flex flex-col items-end">
          <h1 className="text-xl">{data.name}</h1>
          <h1>{data.sys.country}</h1>
        </div>
        <div className="flex justify-between px-4">
          <div>
            <h1 className="text-3xl">{time}</h1>
            <span>
              {day},{dayAndMonth}
            </span>
          </div>
          <h1 className="text-4xl">{data.main.temp}&deg;C</h1>
        </div>
      </div>
      <div className="bg-black bg-opacity-80 py-4 px-8 text-slate-300">
        <h1 className="text-4xl text-center mt-10 mb-2">
          {data.weather[0].main}
        </h1>
        <hr />
        <div className="mt-10">
          <input
            type="search"
            placeholder="search any city..."
            className="py-2 px-1 bg-black bg-opacity-20 border-b-2 border-slate-600 text-white focus:outline-none rounded-l-md"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
          />
          <button
            onClick={getWeatherData}
            className="text-white bg-cyan-900 hover:bg-cyan-800 px-2 py-2.5 rounded-r-md"
          >
            Search
          </button>
        </div>
        <div className="flex justify-center text-xl mt-5 mb-2">
          <h1 className="mx-1">{data.name},</h1>
          <h1>{data.sys.country}</h1>
        </div>
        <hr />
        <div className="mt-5">
          <div className="flex justify-between my-2">
            <h1>Temperature</h1>
            <h1>
              {data.main.temp}&deg;c({data.weather[0].main})
            </h1>
          </div>
          <hr />
          <div className="flex justify-between my-2">
            <h1>Humidity</h1>
            <h1>{data.main.humidity}</h1>
          </div>
          <hr />
          <div className="flex justify-between my-2">
            <h1>Wind Speed</h1>
            <h1>{data.wind.speed}</h1>
          </div>
          <hr />
          <div className="flex justify-between my-2">
            <h1>Pressure</h1>
            <h1>{data.main.pressure}</h1>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
