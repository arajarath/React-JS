import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Raja Rathinam', age: 28},
      {name: 'Padmapriya', age: 24},
      {name: 'Sarathkumar', age: 28}
    ]
  }

  switchNameHandler =(newName) => {
    
    this.setState ({
      persons: [
        {name: newName, age: 28},
        {name: 'Padmapriya Chellapandi', age: 24},
        {name: 'Sarathkumar Hemalatha', age: 28}
      ]

    })
  }

  changeNameHandler =(event) => {
    this.setState ({
      persons: [
        {name: 'Ratz', age: 28},
        {name: event.target.value, age: 24},
        {name: 'Sarathkumar Hemalatha', age: 28}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: '#071d49',
      border: '1px solid #071d49',
      color: '#ffffff',
      cursor: 'pointer',
      padding: '10px',
      borderRadius: '5px'
    }
    return (
      <div className="App">
        <h1>React Application</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Raja Rathinam Anandan')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person changed={this.changeNameHandler} click={this.switchNameHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Cooking</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
      );
    }
  }
  

export default App;
