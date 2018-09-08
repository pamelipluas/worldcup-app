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

    render() {
        return (
            <div className="row">
                <Card title="Number of countries" value={this.getNumberOfCountries()}/>
                <Card/>
                <Card/>
            </div>
        );
    }
}

export default Dashboard;
