import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {

  state = {
    userName: "Gus"
  };

  changeNameHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  }
  render() {

    
    return (
      <div className="App" >
        <UserInput
          change={this.changeNameHandler} />
        <UserOutput
          userName={this.state.userName} />
        <UserOutput />
        <UserOutput />

      </div>
    );
  }
}

export default App;
