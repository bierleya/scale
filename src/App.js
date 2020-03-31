import React from 'react';
import './App.css';
import Header from './components/header';
import Numbers from './components/numbers';
import Temperatures from './components/temperatures';
import Metric from './components/metric';
import {HashRouter, Route, Link} from "react-router-dom";
import Typed from 'react-typed';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header></Header>
        <div className="Main-text">
          <Typed strings={["Welcome to Scale, ^250 an interactive conversions site. ^1000 To get started, ^250 select an option below and enter a number into any field of your choice."]} typeSpeed={40} />
        </div>
        <div className="Menu">
            <nav>
              <Link to="/temperatures"><p>Temperatures</p></Link>
              <Route path="/temperatures" component={Temperatures} />

              <Link to="/numbers"><p>Numbers</p></Link>
              <Route path="/numbers" component={Numbers} />
        
              <Link to="/metric"><p>Customary/Metric</p></Link>
              <Route path="/metric" component={Metric} />
            </nav>
        </div>
        <div className="Icon-bar" align="center">
            <a href="https://www.linkedin.com/in/alvin-bierley">
                <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" alt="Linkedin icon" class="icon" />
            </a>
            <a href="https://www.instagram.com/alvinbierley/">
                <img src="https://ph-files.imgix.net/f0c65f5c-3f42-4db8-80f9-c9f2a9119185?auto=format" alt="Instagram icon" class="icon" />
            </a>
            <a href="mailto: bierleya@carleton.edu">
                <img src="https://cdn4.iconfinder.com/data/icons/rounded-black-basic-ui/139/Mail02-RoundedBlack-512.png" alt="Mail icon" class="icon" />
            </a>
            <a href="https://github.com/bierleya">
                <img src="https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/github-512.png" alt="Github icon" class="icon" />
            </a>
        </div>      
      </div>
    </HashRouter>
  );
}

export default App;