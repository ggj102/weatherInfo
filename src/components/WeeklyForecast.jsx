import React from 'react';
import styled from 'styled-components'

const Contents = styled.div`
    background-color: #a5992a;
    border-bottom: 2px solid #000; 
`

function WeeklyForecast(){
    return(
        <Contents>
            주간 예보
        </Contents>
    )
}

export default WeeklyForecast;