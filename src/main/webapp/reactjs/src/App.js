import './style/App.css';
import './style/index.css';
import 'typeface-nunito'
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Categories from "./pages/Categories";
import AppNavbar from './components/navbar/AppNavbar';
import Footer from './components/footer/Footer';

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
                <div className="App">
                    <AppNavbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/user" element={<User />} />
                        <Route exact path="/categories" element={<Categories />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        );
    }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;
