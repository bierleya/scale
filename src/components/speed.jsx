import React from 'react';
import Header from './header';
import {Link} from 'react-router-dom';

export default class Speed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {unit: "k", temp: 0};
    }

    handleKph = (e) => {this.setState({unit: "k", temp: e.target.value});}
    handleMph = (e) => {this.setState({unit: "m", temp: e.target.value});}

    render() {
        const unit = this.state.unit;
        const temp = this.state.temp;

        const kph = unit === "m" ? temp*1.609 : temp;
        const mph = unit === "k" ? temp/1.609 : temp;

        return (
            <div className="Page">
                <Header></Header>
                <div className="Kph">
                    Kilometers/hour <br />
                    <input value={kph} onChange={this.handleKph} /><br />
                </div>
                <div className="Mph">
                    Miles/hour<br />
                    <input value={mph} onChange={this.handleMph} />
                </div>
                <div className="Back">
                    <Link to="/metric">Back</Link>
                </div>
            </div>
        )
    }
}