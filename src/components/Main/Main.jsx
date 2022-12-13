import React, { useEffect, useState } from "react";
import { weatherUrl, windDirection } from "../../util/utils";
import Header from "../Header";
import WeatherInfo from "../WeatherInfo";

export default function Main() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weatherData, setWeatherData] = useState({ current: {}, daily: [] });
  const [currentLocation, setCurrentLocation] = useState("");

  const initData = () => {
    weatherUrl(latitude, longitude).then((res) => {
      const { current, daily } = res.data;
      const copyDaily = [...daily];

      const currentData = {
        temp: Math.round(current.temp),
        feelsLike: Math.round(current.feels_like),
        humidity: Math.round(current.humidity),
        main: current.weather[0].main,
        icon: current.weather[0].icon,
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

  const setLocation = (latitude, longitude, location) => {
    setLatitude(latitude);
    setLongitude(longitude);
    setCurrentLocation(location);
  };

  useEffect(() => {
    if (latitude && longitude) initData();
  }, [latitude, longitude]);

  return (
    <div>
      <Header currentLocation={currentLocation} setLocation={setLocation} />
      <WeatherInfo
        isSearch={latitude && longitude}
        data={weatherData}
        setLocation={setLocation}
      />
    </div>
  );
}
