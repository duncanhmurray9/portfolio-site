import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from './home';
import About from './about';
import Portfolio from './portfolio';

const Webpages = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element= {<Home />} />
                <Route path = "/about" element = {<About />} />
                <Route path = "/portfolio" element = {<Portfolio />} />
            </Routes>
        </Router>
    );
};
export default Webpages;