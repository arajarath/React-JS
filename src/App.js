import React, { Component } from 'react';
import './App.css';
// import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import Validation from './Validation/Validation';
import Char from './Char/Char';
class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Raja Rathinam', age: 28 },
      { id: '2', name: 'Padmapriya', age: 24 },
      { id: '3', name: 'Sarathkumar', age: 28 },
      { id: '4', name: 'Anandan S', age: 68 }
    ],
    showPersons: false,
    userInput: ''
  }

  toggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  // changeNameHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: 'Ratz', age: 28 },
  //       { name: event.target.value, age: 24 },
  //       { name: 'Sarathkumar Hemalatha', age: 28 }
  //     ]
  //   })
  // }

  userNameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    console.log(personIndex)
    const person = {
      ...this.state.persons[personIndex]
    }
    console.log(person);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    console.log(persons);
    persons[personIndex] = person;
    console.log(persons);
    this.setState({ persons: persons })

  }
  deleteNameHandler = (nameIndex) => {
    // const persons = this.state.persons; Avoid this method it's mutable , take the copy of an array and assign
    const persons = [...this.state.persons];
    persons.splice(nameIndex, 1);
    this.setState({ persons: persons })
  }
  changeLengthHandler = (event) => {
    this.setState({ userInput: event.target.value })
  }
  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  }
  render() {
    const style = {
      backgroundColor: 'green',
      border: '1px solid green',
      color: '#ffffff',
      cursor: 'pointer',
      padding: '10px',
      borderRadius: '5px',
      outline: 'none',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <div>
                {/* <Person name={person.name} age={person.age} /> */}
                <UserOutput click={() => this.deleteNameHandler(index)} style={outputStyle} name={person.name} age={person.age} key={index} />
                <UserInput changed={(event) => this.userNameChangeHandler(event, person.id)} key={person.id} />
              </div>
            )
          })}

        </div>
      )
      style.backgroundColor = 'red';
      style.border = '1px solid red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char clicked={() => this.deleteCharHandler(index)} key={index} character={ch} />
    })
    return (
      <StyleRoot>
        <div className="App">
          <h1>React Application</h1>
          <p className={classes.join(' ')}>First Assignment</p>
          <button style={style} onClick={this.toggleNameHandler}>Toggle Person</button>
          {persons}
          <h1>Second Assignment</h1>
          <input type="text" onChange={(event) => this.changeLengthHandler(event)} value={this.state.userInput} />
          <Validation userInputLength={this.state.userInput.length} />

          <p>Entered above text is : <strong>{this.state.userInput}</strong> </p>
          {charList}
        </div>
      </StyleRoot>
    );
  }
}


export default Radium(App);
