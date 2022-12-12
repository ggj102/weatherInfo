import React from "react";
import styled from "styled-components";

const Content = styled.div`
  .currnetWeatherInfo {
    border-bottom: 2px solid #000;
    text-align: center;

    .title {
      font-size: 20px;
      font-weight: bold;
      margin: 10px 0 0 10px;
    }

    .mainTemp {
      display: flex;
      justify-content: center;
      span {
        font-weight: bold;
        font-size: 55px;
        line-height: 95px;
      }
    }
    .subTemp {
      margin: 10px 0;
      color: gray;
      span {
        color: #000;
        font-weight: bold;
      }
    }
  }

  .weeklyForecast {
    .title {
      font-size: 20px;
      font-weight: bold;
      margin: 10px 0 0 10px;
    }

    .weatherList {
      text-align: center;
      list-style: none;
      padding: 0;

      li {
        width: 300px;
        display: flex;
        margin: auto;
      }
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      .first_li {
        border: 1px solid #000;
        border-radius: 4px;
      }

      .day_area {
        width: 35px;
        margin-top: 8px;
        padding-right: 5px;
        font-size: 14px;
      }
      .day {
        color: #d75d63;
      }
      .dayNum {
        color: #b0b0b0;
      }
      .temp {
        display: flex;
      }
      .text {
        width: 180px;
        margin-top: 14px;
        display: flex;
        justify-content: space-between;
      }
      .pop {
        color: #779eed;
      }
      .min {
        color: #779eed;
      }
      .max {
        color: #d75d63;
      }
    }
  }
`;

export default function WeatherInfoContent({ children, ...props }) {
  return <Content {...props}>{children}</Content>;
}
