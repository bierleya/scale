import React from 'react';
import Header from './header';
import {Link} from 'react-router-dom';


export default class Temperatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {unit: "c", temp: 0};
      }
    
      handleCelsius = (e) => {
        this.setState({unit: "c", temp: e.target.value});
      }
    
      handleFahrenheit = (e) => {
        this.setState({unit: "f", temp: e.target.value});
      }
    
      render() {
        const temp = this.state.temp;
        const unit = this.state.unit;
        const celsius = unit === "f" ? Math.round(((temp - 32) * 5/9) * 10) / 10 : temp;
        const fahrenheit = unit === "c" ? Math.round(((temp * 9/5) + 32) * 100) / 100 : temp;
    
        return (
          <div className="Page">
            <Header></Header>
              <div className="C">
                Celsius <br />
                <input value={celsius} onChange={this.handleCelsius} /><br />
              </div>
              <div className="F">
                Fahrenheit <br />
                <input value={fahrenheit} onChange={this.handleFahrenheit} /><br />
              </div>
            <div className="Home">
                <Link to="/">Homepage</Link>
            </div>
            
          </div>
        )
      }
}


