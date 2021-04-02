import axios from "axios";

export function WeatherUrl(lat, lon)
{
    return axios.get("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=9f6eff98a96bbc2d05b9f07fe183e659&exclude=minutely,hourly,alerts&units=metric");
}

export function DayChange(num,idx)
{
    if(idx === 0)
    {
        return '오늘'
    }
    else if(idx === 1)
    {
        return '내일'
    }
    else{
        switch(num){
            case 0: return '일'
            case 1: return '월'
            case 2: return '화'
            case 3: return '수'
            case 4: return '목'
            case 5: return '금'
            case 6: return '토'
        }
    }
}

export function WindDirection(data){
    if(data <= 11.25 && data > 348.75)
    {
        return '북풍';
    }
    else if(data >= 11.26 && data <= 33.75)
    {
        return '북북동풍';
    }
    else if(data >= 33.76 && data <= 56.25)
    {
        return '북동풍';
    }
    else if(data >= 56.26 && data <= 78.75)
    {
        return '동북동풍';
    }
    else if(data >= 78.76 && data <= 101.25)
    {
        return '동풍';
    }
    else if(data >= 101.26 && data <= 123.75)
    {
        return '동남동풍';
    }
    else if(data >= 123.76 && data <= 146.25)
    {
        return '남동풍';
    }
    else if(data >= 146.26 && data <= 168.75)
    {
        return '남남동풍';
    }
    else if(data >= 168.76 && data <= 191.25)
    {
        return '남풍';
    }
    else if(data >= 191.26 && data <= 213.75)
    {
        return '남남서풍';
    }
    else if(data >= 213.76 && data <= 236.75)
    {
        return '남서풍';
    }
    else if(data >= 236.26 && data <= 258.75)
    {
        return '서남서풍';
    }
    else if(data >= 258.76 && data <= 281.25)
    {
        return '서풍';
    }
    else if(data >= 281.26 && data <= 303.75)
    {
        return '서북서풍';
    }
    else if(data >= 303.76 && data <= 326.25)
    {
        return '북서풍';
    }
    else if(data >= 326.26 && data <= 348.75)
    {
        return '북북서풍';
    }
}