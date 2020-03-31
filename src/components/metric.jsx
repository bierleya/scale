import React from 'react';
import Header from './header';
import Length from './length';
import Mass from './mass';
import Speed from './speed';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Metric extends React.Component {
    render() {
        return (
            <div className="Page">
                <Header></Header>
                <div className="Metric-menu">
                    <Router>
                        <nav>
                            <Link to="/length"><p>Length</p></Link>
                            <Route path="/length" component={Length} />

                            <Link to="/mass"><p>Mass</p></Link>
                            <Route path="/mass" component={Mass} />

                            <Link to="/speed"><p>Speed</p></Link>
                            <Route path="/speed" component={Speed} />
                        </nav>
                    </Router>
                </div>
                <div className="Home">
                    <Link to="/">Homepage</Link>
                </div>
            </div>
        )
    }
}