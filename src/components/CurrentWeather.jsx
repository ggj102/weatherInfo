import axios from 'axios';
import React,{useEffect, useState} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';
import {WindDirection} from '../util/WindDirection'


const Contents = styled.div`
    background-color: #864c4c;
    border-bottom: 2px solid #000; 
`

function CurrentWeather(props){

    const {lon, lat} = props;
    const [weatherData,setweatherData] = useState({});
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=c6f38c675542780a4deb45f5e24cf51a&units=metric").then((response)=>{
            setweatherData({
                temp: Math.round(response.data.main.temp),
                feelsLike: Math.round(response.data.main.feels_like),
                humidity: Math.round(response.data.main.humidity),
                main: response.data.weather[0].main,
                icon: response.data.weather[0].icon,
                windSpeed: Math.round(response.data.wind.speed),
                windDir: WindDirection(response.data.wind.deg)
            });
            console.log(response.data);
            setLoading(true);
        })
    },[])

    return loading && (
        <Contents>
            <div>
            현재 날씨 정보
            </div>
            <div>
            <img/>
            {weatherData.temp}
            </div>
            
            <div>
            {weatherData.main}
            </div>
            
            습도 {weatherData.humidity}% 
            {weatherData.windDir} {weatherData.windSpeed}m/s 
            체감 {weatherData.feelsLike}
        </Contents>
    )
}

const mapStateProps = state =>({
    lon : state.GlobalData.gLon,
    lat : state.GlobalData.gLat
})

export default connect(
    mapStateProps
)(CurrentWeather);
