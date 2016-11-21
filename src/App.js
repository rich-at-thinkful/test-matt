import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';
import Routes from './components/routes';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <h1>Sup</h1>

                <Routes />
            </div>
        );
    }
}



export default App;
