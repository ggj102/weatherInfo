import React from "react";
import { dayChange } from "../../util/utils_test";
import WeatherInfoContent from "../../styles/weatherinfo";

export default function WeatherInfo({ isSearch, data, setLocation }) {
  const { current, daily } = data;

  const onClickCurrentLocation = () => {
    // setLocation(5, 5, "테스트");
    alert("준비 중인 기능입니다.");
  };

  return (
    <WeatherInfoContent>
      <button className="currentLocationBtn" onClick={onClickCurrentLocation}>
        현재 위치 검색
      </button>
      {isSearch ? (
        <>
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
        </>
      ) : (
        <div className="noSearch">
          <p> 검색된 지역이 없습니다.</p>
        </div>
      )}
    </WeatherInfoContent>
  );
}
