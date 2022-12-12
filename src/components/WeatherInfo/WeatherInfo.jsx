import React from "react";
import { dayChange } from "../../util/utils_test";
import WeatherInfoContent from "../../styles/weatherinfo";

export default function WeatherInfo({ data }) {
  const { current, daily } = data;

  return (
    <WeatherInfoContent>
      <div className="currnetWeatherInfo">
        <div className="title">현재 날씨 정보</div>
        <div className="mainTemp">
          <img
            src={`http://openweathermap.org/img/wn/${current.icon}@2x.png`}
          />
          <span>{current.temp}°</span>
        </div>
        <div>{current.main}</div>
        <div className="subTemp">
          습도 <span>{current.humidity}%</span> · {current.windDir} ·{" "}
          <span>{current.windSpeed}m/s</span> · 체감{" "}
          <span>{current.feelsLike}°</span>
        </div>
      </div>
      <div className="weeklyForecast">
        <div className="title">주간 예보</div>
        <div>
          <ul className="weatherList">
            {daily.map((val, idx) => {
              const { dt, icon, pop, min, max } = val;
              let day = dayChange(dt.getDay(), idx);

              return (
                <li className={idx === 0 ? "first_li" : ""} key={idx}>
                  <div className="day_area">
                    <div className={day === "일" ? "day" : ""}>{day}</div>
                    <div className={idx === 0 ? "" : "dayNum"}>
                      {dt.getMonth() + 1}.{dt.getDate()}
                    </div>
                  </div>
                  <div className="temp">
                    <div>
                      <img
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                      />
                    </div>
                    <div className="text">
                      <div className="pop">강수량 {pop}% </div>
                      <div>
                        <span className="min">{min}°</span>/{" "}
                        <span className="max">{max}°</span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </WeatherInfoContent>
  );
}
