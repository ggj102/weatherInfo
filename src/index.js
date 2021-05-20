import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import {createGlobalStyle} from "styled-components";
import {createStore} from 'redux';
import rootReducer from './store/modules'
import {Provider} from 'react-redux'

const GlobalStyle = createGlobalStyle`
    body{
        max-width: 768px;
        margin: 0 auto;
    }
`
const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
        <GlobalStyle/>
    </Provider>, 
document.getElementById('root'));