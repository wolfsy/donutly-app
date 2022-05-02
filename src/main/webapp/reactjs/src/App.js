import React, { Component } from 'react';
import './style/index.css';
import reportWebVitals from './reportWebVitals';
import MainPage from "./pages";
import About from "./pages/about";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'

const iconList = Object
  .keys(brands)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => brands[icon])

library.add(fas, ...iconList)

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route exact path="/about" element={<About />} />
                </Routes>
            </Router>
        );
    }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;
