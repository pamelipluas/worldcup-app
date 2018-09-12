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
        return matches
            .map(match => match.home_team_country)
            .reduce((countries, country) => countries.includes(country) ? countries : [...countries, country], [])
            .length;
    }

    getNumberOfGoals() {
        const matches = this.state.data;
        return matches
            .map(match => match.home_team.goals + match.away_team.goals)
            .reduce(((previousGoal, currentGoal) => previousGoal + currentGoal), 0);
    }

    getNumberOfGoalsAfter90Min() {
        const matches = this.state.data;
        return matches
            .reduce((previousMatch, currentMatch) => [...previousMatch, ...currentMatch.home_team_events, ...currentMatch.away_team_events], [])
            .filter(event => event.type_of_event === 'goal')
            .filter(goal => goal.time.includes('90\'+'))
            .reduce((goalAmount => ++goalAmount), 0);
    }

    getEarliestGoal() {
        const matches = this.state.data;
        return matches
            .reduce((previousMatch, currentMatch) => [...previousMatch, ...currentMatch.home_team_events, ...currentMatch.away_team_events], [])
            .filter(event => event.type_of_event === 'goal')
            .filter(goal => !goal.time.includes('90\'+'))
            .map(goal => goal.time.replace('\'', ''))
            .reduce((previousTime, currentTime) => Math.min(previousTime, parseInt(currentTime)), 100);
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
            .reduce((previousTemperature, currentTemperature) => Math.max(previousTemperature, currentTemperature), 0);
    }

    render() {
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
