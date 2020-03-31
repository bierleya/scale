import React from 'react';
import Header from './header';
import {Link} from "react-router-dom";

export default class Length extends React.Component {
    constructor(props) {
        super(props);
        this.state = {unit: "mm", temp: 0};
    }

    handleMillimeters = (e) => {this.setState({unit: "mm", temp: e.target.value});}
    handleCentimeters = (e) => {this.setState({unit: "cm", temp: e.target.value});}
    handleMeters = (e) => {this.setState({unit: "m", temp: e.target.value});}
    handleKilometers = (e) => {this.setState({unit: "km", temp: e.target.value});}
    handleInches = (e) => {this.setState({unit: "in", temp: e.target.value});}
    handleFeet = (e) => {this.setState({unit: "ft", temp: e.target.value});}
    handleYards = (e) => {this.setState({unit: "yd", temp: e.target.value});}
    handleMiles = (e) => {this.setState({unit: "mi", temp: e.target.value});}

    render() {
        const temp = this.state.temp;
        const unit = this.state.unit;

        const mm = 
            unit === "cm" ? temp*10
            : unit === "m" ? temp*1000 
            : unit === "km" ? temp*100000 
            : unit === "in" ? temp*25.4 
            : unit === "ft" ? temp*305 
            : unit === "yd" ? temp*914 
            : unit === "mi" ? temp*1609000
            : temp
        const cm = 
            unit === "mm" ? temp/10
            : unit === "m" ? temp*100
            : unit === "km" ? temp*10000
            : unit === "in" ? temp*2.54 
            : unit === "ft" ? temp*30.48 
            : unit === "yd" ? temp*91.44 
            : unit === "mi" ? temp*160934
            : temp
        const m = 
            unit === "mm" ? temp/1000
            : unit === "cm" ? temp/100 
            : unit === "km" ? temp*1000 
            : unit === "in" ? temp/39.37
            : unit === "ft" ? temp/3.281
            : unit === "yd" ? temp/1.094
            : unit === "mi" ? temp*1609
            : temp
        const km = 
            unit === "mm" ? temp/1000000
            : unit === "cm" ? temp/100000 
            : unit === "m" ? temp/1000 
            : unit === "in" ? temp/39370
            : unit === "ft" ? temp/3281
            : unit === "yd" ? temp/1094
            : unit === "mi" ? temp*1.609
            : temp
        const inch = 
            unit === "mm" ? temp/25.4
            : unit === "cm" ? temp/2.54
            : unit === "m" ? temp*39.37
            : unit === "km" ? temp*39370
            : unit === "ft" ? temp*12
            : unit === "yd" ? temp*36
            : unit === "mi" ? temp*63360
            : temp
        const ft = 
            unit === "mm" ? temp/305
            : unit === "cm" ? temp/30.48
            : unit === "m" ? temp*3.281
            : unit === "km" ? temp*3281
            : unit === "in" ? temp/12
            : unit === "yd" ? temp*3
            : unit === "mi" ? temp*5280
            : temp
        const yd = 
            unit === "mm" ? temp/914
            : unit === "cm" ? temp/91.44
            : unit === "m" ? temp*1.094
            : unit === "km" ? temp*1094
            : unit === "in" ? temp/36
            : unit === "ft" ? temp/3
            : unit === "mi" ? temp*1760
            : temp
        const mi = 
            unit === "mm" ? temp/1609000
            : unit === "cm" ? temp/160934
            : unit === "m" ? temp/1609 
            : unit === "km" ? temp/1.609
            : unit === "in" ? temp/63360
            : unit === "ft" ? temp/5280
            : unit === "yd" ? temp/1760
            : temp
            
        return (
            <div className="Page">
                <Header></Header>
                <div className="Mm">
                    Millimeters <br />
                    <input value={mm} onChange={this.handleMillimeters} /><br />
                </div>
                <div className="Cm">
                    Centimeters <br />
                    <input value={cm} onChange={this.handleCentimeters} /><br />
                </div>
                <div className="M">
                    Meters <br />
                    <input value={m} onChange={this.handleMeters} /><br />
                </div>
                <div className="Km">
                    Kilometers <br />
                    <input value={km} onChange={this.handleKilometers} /><br />
                </div>
                <div className="In">
                    Inches <br />
                    <input value={inch} onChange={this.handleInches} /><br />
                </div>
                <div className="Ft">
                    Feet <br />
                    <input value={ft} onChange={this.handleFeet} /><br />
                </div>
                <div className="Yd">
                    Yards <br />
                    <input value={yd} onChange={this.handleYards} /><br />
                </div>
                <div className="Mi">
                    Miles <br />
                    <input value={mi} onChange={this.handleMiles} /><br />
                </div>
                <div className="Back">
                    <Link to="/metric">Back</Link>
                </div>
            </div>
        )
    }
}