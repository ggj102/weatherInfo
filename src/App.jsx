import React from 'react';
import CurrentWeather from './components/CurrentWeather';
import Header from './components/Header';
import WeeklyForecast from './components/WeeklyForecast';

function App(){
    return(
        <div>
            <Header/>
            <CurrentWeather/>
            <WeeklyForecast/>
        </div>
    )
}

export default App;