import React from "react";
import styled from "styled-components";

const Content = styled.div`
  .title {
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    padding: 10px 0;
    border-bottom: 2px solid #000;
  }

  .search {
    background-color: skyblue;
    padding: 10px 30px;
    border-bottom: 2px solid #000;
    input {
      font-size: 20px;
      border-radius: 4px;
      border: none;
    }

    button {
      background-color: #fff;
      margin-left: 5px;
      border-radius: 4px;
      border: 1px solid #fff;
      cursor: pointer;

      &:hover {
        border: 1px solid #000;
      }
    }
    &::after {
      clear: both;
      display: block;
      content: "";
    }
    .area {
      float: left;
      line-height: 26px;
    }
    .area span {
      font-weight: bold;
      margin-left: 5px;
    }
  }

  .searchInput {
    float: right;
    position: relative;
  }

  .autocompleteSearch {
    width: 247px;
    max-height: 200px;
    border: 1px solid #000;
    background-color: #fff;
    position: absolute;
    overflow: auto;
    cursor: pointer;
  }
`;

export default function HeaderContent({ children, ...props }) {
  return <Content {...props}>{children}</Content>;
}
