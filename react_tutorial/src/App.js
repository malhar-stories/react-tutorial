import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: 'asasff', name: 'Shounak', age: 23},
      {id: 'asdsaaff', name: 'Devendu', age: 34},
      {id: 'sfdsgdhh', name: 'Vinayak', age: 25},
    ],
    otherState: 'asach watla mhanun state dili :P',
    showPersons: false
  }
  // const [personState, setPersonsState] = useState(
  //   {
  //     persons: [
  //       {name: 'Shounak', age: 23},
  //       {name: 'Devendu', age: 34},
  //       {name: 'Vinayak', age: 25},
  //     ]
  //   }    
  // );

  // const [otherState, setOtherState] = useState('Other state here!');

  // console.log(personState, otherState);
  
  // If we use this kind of function based state handling then it 
  // does not merge the state but replaces old state with new one.
  switchNameHandler = (newName) => {
    console.log('Button clicked');
    // DONT DO THIS: this.state.persons[0].name='Malhar'
    this.setState(
      {persons: [
        {name: newName, age: 23},
        {name: 'Devendu', age: 33},
        {name: 'Vinayak', age: 26},
      ]}
    )
  };

  nameChangeHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons;
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  }

  togglePersonView = () => {
    const doesShow = this.state.showPersons; 
    this.setState({
      showPersons: !doesShow
    });
  }

  style = {
    backgroundColor: 'white',
    font: 'comic sans ms',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };


    render(){

      let persons = null;

      if (this.state.showPersons){
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            })}
          </div>
        );
      }

      return ( 
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <button style={this.style} onClick={this.togglePersonView}>Switch Name</button>
          {persons}
        </div>
      );
    }
  }

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi! I am new React App!'))

export default App;

// state = {
//   persons: [
//     {name: 'Shounak', age: 23},
//     {name: 'Devendu', age: 34},
//     {name: 'Vinayak', age: 25},
//   ]
// }