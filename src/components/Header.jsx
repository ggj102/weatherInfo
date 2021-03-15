import React from 'react';
import styled from 'styled-components';


const Title = styled.div`
    background-color: green;
    text-align: center;
    font-size: 30px;
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
`
const SearchArea = styled.div`
    float: right;
`

function Header() {

    

    return (
        <div>
            <Title>
                Weather Info
            </Title>
            <Search>
                <SearchArea>
                    <input/>
                    <button>검색</button>
                    <button>현재위치</button>
                </SearchArea>
            </Search>
        </div>
    )
}

export default Header;