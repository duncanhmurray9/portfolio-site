import logo from '../images/palpatine.png';
import footerImage from '../images/skater.png';
import '../styles/App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <br/>
            <br/>
            <br/>
            <br/>
            <p>
                This will be a portfolio website in the future! 
            </p>
            <p>
                But for now, here's Palpatine.
            </p>
            <button type="button">
                <Link to="/about">Learn about good ol' Palpy :)</Link>
            </button>
            <button type="button">
                <Link to="/portfolio">Look at cool stuff init</Link>
            </button>
        </header>
        <footer>
            <p>Created by Duncan using React :)</p>
            <img src={footerImage} className="App-logo-small" alt="logo" />
        </footer>
        </div>
    );
};
export default Home;