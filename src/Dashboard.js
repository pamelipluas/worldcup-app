import React, {Component} from 'react';
import './App.css';
import Card from "./Card";
import App from "./App";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
    }

    getWorldCupData() {
        return fetch('http://worldcup.sfg.io/matches', {
            headers: new Headers({
                Accept: 'application/json',
            }),
            method: 'GET',
            credentials: 'same-origin'
        }).then(response => response.json())
            .catch(err => err);
    }

    componentDidMount() {
        this.getWorldCupData()
            .then((data) => {
                this.setState({data})
            });
    }

    getNumberOfCountries() {
        const matches = this.state.data;
        const countries = [];
        return matches
            .map(match => match.home_team_country)
            .filter(country => {
                if (countries.includes(country)) {
                    return false;
                }
                countries.push(country);
                return true;
            })
            .reduce((acc => ++acc), 0);
    }

    getNumberOfGoals() {
        const matches = this.state.data;
        return matches
            .map(match => match.home_team.goals + match.away_team.goals)
            .reduce(((acc, goals) => acc + goals), 0);
    }

    getNumberOfGoalsAfter90Min() {
        const matches = this.state.data;
        return matches
            .reduce((acc, match) => [...acc, ...match.home_team_events, ...match.away_team_events], [])
            .filter(event => event.type_of_event === 'goal')
            .filter(goal => goal.time.includes('90\'+'))
            .reduce((acc => ++acc), 0);
    }

    getEarliestGoal() {
        const matches = this.state.data;
        return matches
            .reduce((acc, match) => [...acc, ...match.home_team_events, ...match.away_team_events], [])
            .filter(event => event.type_of_event === 'goal')
            .filter(goal => !goal.time.includes('90\'+'))
            .map(goal => goal.time.replace('\'', ''))
            .reduce((acc, time) => Math.min(acc, parseInt(time)), 100);
    }

    getNumberOfHomeEvents() {
        const matches = this.state.data;
        return matches
            .map(match => match.away_team_events)
            .reduce((acc, events) => acc + events.length, 0);
    }

    getHighestTemperature() {
        const matches = this.state.data;
        return matches
            .map(match => parseInt(match.weather.temp_celsius))
            .reduce((acc, celsius) => Math.max(acc, celsius), 0);
    }

    render() {
        console.log(this.getEarliestGoal());
        return (
            <div className="row">
                <div className="col-sm">
                    <div className="row">
                        <Card title="Number of countries" value={this.getNumberOfCountries()}/>
                        <Card title="Number of goals" value={this.getNumberOfGoals()}/>
                        <Card title="Highest Temperature" value={this.getHighestTemperature()}/>
                    </div>
                    <div className="row">
                        <Card title="Goals after 90 min" value={this.getNumberOfGoalsAfter90Min()}/>
                        <Card title="Earliest Goal" value={this.getEarliestGoal()}/>
                        <Card/>
                    </div>
                </div>
            </div>


        )
            ;
    }
}

export default Dashboard;
