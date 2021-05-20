import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {gLon, gLat} from '../store/modules/GlobalData.jsx'
import JsonData from '../../public/AreaData.json';

const Title = styled.div`
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    padding: 10px 0;
    border-bottom: 2px solid #000; 
`

const Search = styled.div`
    background-color: skyblue;
    padding: 10px 30px;
    border-bottom: 2px solid #000; 
    input{
        font-size: 20px;
        border-radius: 4px;
        border: none;
    }
    
    button{
        background-color: #fff;
        margin-left: 5px;
        border-radius: 4px;
        border: 1px solid #fff;
        cursor: pointer;

        &:hover{
            border: 1px solid #000;
        }
    }
    &::after{
        clear: both;
        display: block;
        content:'';
    }
    .area{
        float: left;
        line-height: 26px;
    }
    .area span{
        font-weight: bold;
        margin-left: 5px;
    }
`
const SearchArea = styled.div`
    float: right;
    position: relative;
`

const SearchBox = styled.div`
    width: 247px;
    max-height: 200px;
    border: 1px solid #000;
    background-color: #fff;
    position: absolute;
    overflow: auto;
    cursor: pointer;
`

function Header(props) {
    const {gLon, gLat} = props;
    const [focus,setFocus] = useState(false);
    const [json,setJson] = useState([]);
    const [searchList,setSearchList] = useState([]);
    const [searchWord,setSearchWord] = useState('');
    const [nowArea,setNowArea] = useState('');
    
    useEffect(()=>{
         const  jsonMap = JsonData.map((val)=>{
            return {...val,search:val.name.replace(/ /g,"")}
        })
        setJson(jsonMap);
    },[])

    //검색어 input이며 filter를 사용해 jsonData의 주소를 찾음 
    const onInputChange = (e) =>{
        let target = e.target.value;
        setSearchWord(target)
        if(target !== '')
        {
            setFocus(true);
            const fil = json.filter((val)=>{
                return val.search.indexOf(target) !== -1 || val.name.indexOf(target) !== -1;
            }).slice(0,10);
            setSearchList(fil);
        }else 
        {
            setFocus(false);
            setSearchList([])
        }
    }

    //자동 완성되는 검색어를 클릭시 
    //해당 지역 날씨 정보를 가지고 옴 
    const onChoice = (val) =>{
        setNowArea(val.name);
        setSearchWord('');
        gLon(val.lon);
        gLat(val.lat);
        setFocus(false);
    }

    const list = searchList.map((val,idx)=>{
        return <div key = {idx} onClick={()=>{onChoice(val)}}>{val.name}</div>
    })

    return (
        <div>
            <Title>
                Weather Info
            </Title>
            <Search>
                {nowArea && 
                <div className="area">현재 위치: 
                <span>{nowArea}</span> 
                </div>}
                <SearchArea>
                    <input
                     placeholder = "지역을 검색하세요."
                     value = {searchWord} onChange={onInputChange}/>
                    {focus && <SearchBox>
                        {list}
                    </SearchBox>}
                </SearchArea>
            </Search>
        </div>
    )
}

const mapStateProps = state =>({
})

const mapDispatchToProps = dispatch =>({
    gLon: lonVal => dispatch(gLon(lonVal)),
    gLat: latVal => dispatch(gLat(latVal)),
})

export default connect(
    mapStateProps,
    mapDispatchToProps
)(Header);
