import React, { Component } from 'react';
import '../assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <a href='#'>Home</a>
         <a href='#'>Logout</a>
        </header>
        <p className="App-intro">
          {this.props.children}
        </p>
      </div>
    );
  }
}

export default App;
