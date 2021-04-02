import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';
import {WeatherUrl,DayChange} from '../util/Utils';


const Contents = styled.div`
    text-align: center;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0 0 10px;
`
const WeatherList = styled.ul`
     text-align: center;
     list-style:none;
     padding: 0;

    li{
        width: 300px;
        display: flex;
        margin: auto;
        
    }
    img{
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
    .first_li{
        border: 1px solid #000;
        border-radius: 4px;
    }

    .day_area{
        width: 35px;
        margin-top: 8px;
        padding-right: 5px;
        font-size: 14px;
    }
    .day{
        color:#D75D63;
    }
    .dayNum{
        color: #B0B0B0;
    }
    .temp{
        display: flex;
    }
    .text{
        width: 180px;
        margin-top: 14px;
        display: flex;
        justify-content: space-between;
    }
    .pop{
        color: #779EED;
    }
    .min{
        color: #779EED;
    }
    .max{
        color: #D75D63;
    }

`

function WeeklyForecast(props){

    const {lon, lat} = props;
    const [weatherData,setweatherData] = useState([]);
    let arr = [];
  
    useEffect(()=>{
        if(lon && lat)
        {
            WeatherUrl(lat,lon).then((response)=>{
                for(let i = 0; i < response.data.daily.length; i++)
                {
                    arr.push({
                        dt: new Date(response.data.daily[i].dt*1000),
                        min: Math.round(response.data.daily[i].temp.min),
                        max: Math.round(response.data.daily[i].temp.max),
                        pop: Math.round(response.data.daily[i].pop*100),
                        icon: response.data.daily[i].weather[0].icon
                    });
                }
                setweatherData(arr);
                console.log(response.data.daily[0].weather[0].icon);
            })
        }
    },[lon,lat])

    // 주간예보 리스트
    const weeklyList = weatherData.map((val,idx)=>{
        let day = DayChange(val.dt.getDay(),idx);
        return (
            <li className={idx === 0 ? "first_li" : ''}  key = {idx}>
                <div className="day_area">
                    <div className={day === "일" ? "day" : ''}>{day}</div>
                    <div className={idx === 0 ? "" : "dayNum"}>{val.dt.getMonth()+1}.{val.dt.getDate()}</div> 
                </div>
                <div className="temp">
                    <div><img src={"http://openweathermap.org/img/wn/"+val.icon+"@2x.png"}/></div>
                    <div className="text">
                        <div className="pop">강수량 {val.pop}% </div>
                        <div>
                            <span className="min">{val.min}°</span>/ <span className="max">{val.max}°</span>
                        </div>
                    </div>
                </div>
            </li>
        )
    })

    return (lon && lat) && (
        <Contents>
                <Title>주간 예보</Title>
                <div>
                    <WeatherList>
                        {weeklyList}
                    </WeatherList>
                </div>
        </Contents>
    )
}

const mapStateProps = state =>({
    lon : state.GlobalData.gLonState,
    lat : state.GlobalData.gLatState
})

export default connect(
    mapStateProps
)(WeeklyForecast);

