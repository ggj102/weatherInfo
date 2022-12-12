import React, { useEffect, useState } from "react";
import { weatherUrl, windDirection } from "../../util/utils_test";
import Header from "../Header";
import WeatherInfo from "../WeatherInfo";

export default function Main() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weatherData, setWeatherData] = useState({ current: {}, daily: [] });

  const initData = () => {
    weatherUrl(latitude, longitude).then((res) => {
      const { current, daily } = res.data;
      const copyDaily = [...daily];

      const currentData = {
        temp: Math.round(current.temp),
        feelsLike: Math.round(current.feels_like),
        humidity: Math.round(current.humidity),
        main: current.main,
        icon: current.icon,
        windSpeed: Math.round(current.wind_speed),
        windDir: windDirection(current.wind_deg),
      };

      const dailyData = copyDaily.map((val) => {
        return {
          dt: new Date(val.dt * 1000),
          min: Math.round(val.temp.min),
          max: Math.round(val.temp.max),
          pop: Math.round(val.pop * 100),
          icon: val.weather[0].icon,
        };
      });

      setWeatherData({
        ...weatherData,
        current: currentData,
        daily: dailyData,
      });
    });
  };

  useEffect(() => {
    if (latitude && longitude) initData();
  }, [latitude, longitude]);

  return (
    <>
      <Header setLatitude={setLatitude} setLongitude={setLongitude} />
      <WeatherInfo data={weatherData} />
    </>
  );
}
