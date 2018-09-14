import React, {Component, PropTypes} from 'react';
import './App.css';
import Card from "./Card";
import {getNumberOfCountries} from "./models/Countries";
import {connect} from "react-redux";

const actions = require('./redux/actions');

class Dashboard extends Component {

    render() {

        console.log('aaa', this.props.worldCupData);
        return (
            <div className="row">
                <Card title="Number of matches " value={this.props.worldCupData.length}/>
                <Card title="Number of countries " value={getNumberOfCountries(this.props.worldCupData)}/>
                <Card />
            </div>
        );
    }
}

export default connect((state)=>{return state},actions)(Dashboard);
