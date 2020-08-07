import React, { Component } from 'react';
import './App.css';
// import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Raja Rathinam', age: 28 },
      { id: '2', name: 'Padmapriya', age: 24 },
      { id: '3', name: 'Sarathkumar', age: 28 },
      { id: '4', name: 'Anandan S', age: 68 }
    ],
    showPersons: false
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <div>
                {/* <Person name={person.name} age={person.age} /> */}
                <UserOutput click={() => this.deleteNameHandler(index)} style={outputStyle} name={person.name} age={person.age}  key={index}/>
                <UserInput changed={(event)=> this.userNameChangeHandler(event, person.id)} key={person.id} />
              </div>
            )
          })}

        </div>
      )
    }
    return (
      <div className="App">
        <h1>React Application</h1>
        <button style={style} onClick={this.toggleNameHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}


export default App;
