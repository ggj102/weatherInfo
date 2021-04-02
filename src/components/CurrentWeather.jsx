import axios from 'axios';
import React,{useEffect, useState} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';
import {WindDirection,WeatherUrl} from '../util/Utils'

const Contents = styled.div`
    border-bottom: 2px solid #000; 
    text-align: center;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0 0 10px;
`

const MainTemp = styled.div`
    display: flex;
    justify-content: center;
    span{
        font-weight: bold;
        font-size: 55px;
        line-height: 95px
    }
`
const SubTemp = styled.div`
    margin: 10px 0;
    color: gray;
    span{
        color: #000;
        font-weight: bold;
    }
`

function CurrentWeather(props){

    const {lon, lat} = props;
    const [weatherData,setweatherData] = useState({});

    useEffect(()=>{
        if(lon && lat)
        {
            WeatherUrl(lat,lon).then((response)=>{
                setweatherData({
                    temp: Math.round(response.data.current.temp),
                    feelsLike: Math.round(response.data.current.feels_like),
                    humidity: Math.round(response.data.current.humidity),
                    main: response.data.current.weather[0].main,
                    icon: response.data.current.weather[0].icon,
                    windSpeed: Math.round(response.data.current.wind_speed),
                    windDir: WindDirection(response.data.current.wind_deg)
                });
                console.log(response.data.current.weather[0].icon);
            })
            
        }
    },[lon,lat])

    return (lon && lat) && (
        <Contents>
            <Title>
                현재 날씨 정보
            </Title>
            <MainTemp>
                <img src={"http://openweathermap.org/img/wn/"+weatherData.icon+"@2x.png"}/>
                <span>{weatherData.temp}°</span>
            </MainTemp>
            <div>
                {weatherData.main}  
            </div>
            <SubTemp>
                습도 <span>{weatherData.humidity}%</span> · {weatherData.windDir} · <span>{weatherData.windSpeed}m/s</span> ·
                체감 <span>{weatherData.feelsLike}°</span> 
            </SubTemp>

        </Contents>
    )
}

const mapStateProps = state =>({
    lon : state.GlobalData.gLonState,
    lat : state.GlobalData.gLatState
})

export default connect(
    mapStateProps
)(CurrentWeather);
