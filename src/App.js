import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Dashboard from "./Dashboard";

class App extends Component {
    render() {
        return (
            <div className="App container">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to World Cup App</h1>
                </header>
            </div>
        );
    }
}

export default App;
