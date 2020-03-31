import React from 'react';
import Header from './header';
import {Link} from "react-router-dom";

export default class Mass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {unit: "mg", temp: 0};
    }

    handleMilligrams = (e) => {this.setState({unit: "mg", temp: e.target.value});}
    handleGrams = (e) => {this.setState({unit: "g", temp: e.target.value});}
    handleKilograms = (e) => {this.setState({unit: "kg", temp: e.target.value});}
    handleOunces = (e) => {this.setState({unit: "oz", temp: e.target.value});}
    handlePounds = (e) => {this.setState({unit: "lb", temp: e.target.value});}
    
    render() {
        const temp = this.state.temp;
        const unit = this.state.unit;

        const mg = 
            unit === "g" ? temp*1000
            : unit === "kg" ? temp*1000000
            : unit === "oz" ? temp*28350 
            : unit === "lb" ? temp*453592
            : temp
        const g = 
            unit === "mg" ? temp/1000
            : unit === "kg" ? temp*1000 
            : unit === "oz" ? temp*28.35
            : unit === "lb" ? temp*454
            : temp
        const kg = 
            unit === "mg" ? temp/1000000
            : unit === "g" ? temp/1000 
            : unit === "oz" ? temp/35.274
            : unit === "lb" ? temp/2.205
            : temp
        const oz = 
            unit === "mg" ? temp/28350
            : unit === "g" ? temp/28.35
            : unit === "kg" ? temp*35.274
            : unit === "lb" ? temp*16
            : temp
        const lb = 
            unit === "mg" ? temp/453592
            : unit === "g" ? temp/454 
            : unit === "kg" ? temp*2.205 
            : unit === "oz" ? temp/16
            : temp

        return (
            <div className="Page">
                <Header></Header>
                <div className="Mg">
                    Milligrams <br />
                    <input value={mg} onChange={this.handleMilligrams} /><br />
                </div>
                <div className="G">
                    Grams <br />
                    <input value={g} onChange={this.handleGrams} /><br />
                </div>
                <div className="Kg">
                    Kilograms <br />
                    <input value={kg} onChange={this.handleKilograms} /><br />
                </div>
                <div className="Oz">
                    Ounces <br />
                    <input value={oz} onChange={this.handleOunces} /><br />
                </div>
                <div className="Lb">
                    Pounds <br />
                    <input value={lb} onChange={this.handlePounds} /><br />
                </div>
                <div className="Back">
                    <Link to="/metric">Back</Link>
                </div>
            </div>
        )
    }
}