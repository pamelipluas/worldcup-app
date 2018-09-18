import React, {Component, PropTypes} from 'react';
import '../styles/App.css';
import Card from "./Card";
import {getNumberOfCountries} from "../controlers/Countries";
import {connect} from "react-redux";
import {getEarliestGoal, getNumberOfGoalsAfter90Min, getNumberOfGoals} from "../controlers/Goals";
import {getNumberOfHomeEvents} from "../controlers/Events";
import {getHighestTemperature} from "../controlers/Temperatures";

const actions = require('../redux/actions');

class Dashboard extends Component {

    render() {

        console.log('world cup data', this.props.worldCupData);
        return (
            <div>
                <div className="row">
                    <Card title="Number of matches " value={this.props.worldCupData.length}/>
                    <Card title="Number of countries " value={getNumberOfCountries(this.props.worldCupData)}/>
                    <Card title="Number of goals" value={getNumberOfGoals(this.props.worldCupData)}/>
                    <Card title="Number of goals after min 90" value={getNumberOfGoalsAfter90Min(this.props.worldCupData)}/>
                </div>
                <div className="row">
                    <Card title="Time of earliest goal " value={getEarliestGoal(this.props.worldCupData)}/>
                    <Card title="Number of home events " value={getNumberOfHomeEvents(this.props.worldCupData)}/>
                    <Card title="Highest temperature" value={getHighestTemperature(this.props.worldCupData)}/>
                </div>
            </div>
        );
    }
}

export default connect((state)=>{return state},actions)(Dashboard);
