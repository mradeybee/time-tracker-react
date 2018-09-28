import React, { Component } from 'react';
import '../assets/css/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Time Tracker
        </header>
        <div className="App-intro">
          {this.props.children}
        </div>
      </div>
    );
  }
}
