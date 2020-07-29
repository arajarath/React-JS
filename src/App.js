import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
class App extends Component {

  state = {
    persons: [
      {name: 'Raja Rathinam', age: 28},
      {name: 'Padmapriya', age: 24},
      {name: 'Sarathkumar', age: 28},
      {userName: 'Anandan S', age: 68}
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

  userNameChangeHandler = (event)=> {
    this.setState({
      persons: [
        {name: 'Raja Rathinam', age: 28},
        {name: 'Padmapriya', age: 24},
        {name: 'Sarathkumar', age: 28},
        {userName: event.target.value, age: 68}
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
    const outputStyle = {
      padding: '20px',
      backgroundColor: 'red',
      color: '#071d49',
      width: '60%',
      margin: '16px auto',
      border: '1px solid red',
      boxShadow: '0px 2px 3px #ff009f'
    }
    return (
      <div className="App">
        <h1>React Application</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Raja Rathinam Anandan')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person changed={this.changeNameHandler} click={this.switchNameHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Cooking</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <UserOutput style={outputStyle} username={this.state.persons[3].userName}></UserOutput>
        <UserInput changed={this.userNameChangeHandler}  username={this.state.persons[3].userName}/>
      </div>
      );
    }
  }
  

export default App;
