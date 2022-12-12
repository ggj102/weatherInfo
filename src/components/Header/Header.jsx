import React, { useEffect, useState } from "react";
import JsonData from "../../../public/AreaData.json";
import HeaderContent from "../../styles/header.js";

function Header({ setLongitude, setLatitude }) {
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [locationData, setLocationData] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");

  const init = () => {
    const locationMap = JsonData.map((val) => {
      return { ...val, search: val.name.replace(/ /g, "") };
    });
    setLocationData(locationMap);
  };

  const onChangeSearchValue = (e) => {
    const { value } = e.target;

    if (value) {
      setIsSearchFocus(true);
      const filter = locationData
        .filter((val) => {
          return (
            val.search.indexOf(value) !== -1 || val.name.indexOf(value) !== -1
          );
        })
        .slice(0, 10);
      setSearchList(filter);
    } else {
      setIsSearchFocus(false);
      setSearchList([]);
    }

    setSearchValue(value);
  };

  const onClickSelect = (val) => {
    setCurrentLocation(val.name);
    setSearchValue("");
    setLongitude(val.lon);
    setLatitude(val.lat);
    setIsSearchFocus(false);
  };

  useEffect(() => init(), []);

  return (
    <HeaderContent>
      <div className="title">Weather Info</div>
      <div className="search">
        {currentLocation && (
          <div className="area">
            현재 위치:
            <span>{currentLocation}</span>
          </div>
        )}
        <div className="searchInput">
          <input
            placeholder="지역을 검색하세요."
            value={searchValue}
            onChange={onChangeSearchValue}
          />
          {isSearchFocus && (
            <div className="autocompleteSearch">
              {searchList.map((val, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      onClickSelect(val);
                    }}
                  >
                    {val.name}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </HeaderContent>
  );
}

export default Header;
