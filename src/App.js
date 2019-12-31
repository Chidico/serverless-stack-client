import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true
    };
  }
  toggle = () => {
    this.setState({isOn: !this.state.isOn})
  }
  render() {
    return (
      <div className="App">
      <div className="App-header"> 
        <h2>Welcome to React</h2>
        <MyComponent name="Chidi" /> 
      </div>
        <button>
          {this.state.isOn ? 'On' : 'off'}
        </button>
      </div>
    );
  }
}

export default App;
