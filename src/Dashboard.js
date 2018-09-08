import React, {Component} from 'react';
import './App.css';
import Card from "./Card";

class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
}

export default Dashboard;
