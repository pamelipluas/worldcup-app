import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import Dashboard from "./Dashboard";
import {connect} from "react-redux";

const actions = require('../redux/actions');


export class App extends Component {

    componentDidMount(){
        this.props.fetchWorldCupData();
    }

    render() {
        return (
            <div className="App container">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to World Cup App</h1>
                </header>
                <Dashboard/>
            </div>
        );
    }
}


export default connect((state)=>{return state},actions)(App);