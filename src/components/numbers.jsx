import React from 'react';
import Header from './header';
import {Link} from 'react-router-dom';

export default class Numbers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {type: "d", temp: 0};
    }

    handleBinary = (e) => {
        this.setState({type: "b", temp: e.target.value});
    }

    handleDecimal = (e) => {
        this.setState({type: "d", temp: e.target.value});
    }

    handleHex = (e) => {
        this.setState({type: "h", temp: e.target.value});
    }

    render() {
        const temp = this.state.temp;
        const type = this.state.type;

        const binary = (type === "d") ? Number(temp).toString(2) : (type === "h") ? (parseInt(temp, 16).toString(2)).padStart(8, "0") : temp;
        const decimal = (type === "b") ? parseInt(temp, 2) : (type === "h") ? parseInt(temp, 16) : temp;
        const hexadecimal = (type === "b") ? parseInt(temp, 2).toString(16) : (type === "d") ? Number(temp).toString(16) : temp;
        
        return (
            <div className="Page">
                <Header></Header>
                <div className="Binary">
                    Binary <br />
                    <input value={binary} onChange={this.handleBinary} /><br />
                </div>
                <div className="Decimal">
                    Decimal <br />
                    <input value={decimal} onChange={this.handleDecimal} /><br />
                </div>
                <div className="Hex">
                    Hexadecimal <br />
                    <input value={hexadecimal} onChange={this.handleHex} /><br />
                </div>
                <div className="Home">
                    <Link to="/">Homepage</Link>
                </div>
            </div>
        )
    }
}

