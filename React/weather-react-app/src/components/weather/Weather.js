import React, { useEffect } from "react";

const Weather = () => {
  const options = {
    method: "GET",
    params: { lat: "35.5", lon: "-78.5" },
    headers: {
      "X-RapidAPI-Key": "aa6ad99f13mshf0e6f28b0d76202p12ec32jsn7211b353d79a",
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly",
        options
      );
      const data = await res.json();
      console.log(data);
    };

    fetchData();
  }, []);

  return <div>Weather</div>;
};

export default Weather;
