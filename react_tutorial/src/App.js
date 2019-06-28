import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// class App extends Component {
const app = props => {
  const [personState, setPersonsState] = useState(
    {
      persons: [
        {name: 'Shounak', age: 23},
        {name: 'Devendu', age: 34},
        {name: 'Vinayak', age: 25},
      ]
    }    
  );

  const [otherState, setOtherState] = useState('Other state here!');

  console.log(personState, otherState);
  
  // If we use this kind of function based state handling then it 
  // does not merge the state but replaces old state with new one.
  const switchNameHandler = () => {
    console.log('Button clicked');
    // DONT DO THIS: this.state.persons[0].name='Malhar'
    setPersonsState(
      {persons: [
        {name: 'Malhar', age: 23},
        {name: 'Devendu', age: 33},
        {name: 'Vinayak', age: 26},
      ]}
    )
  };

    return ( 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi! I am new React App!'))
  }

export default app;

// state = {
//   persons: [
//     {name: 'Shounak', age: 23},
//     {name: 'Devendu', age: 34},
//     {name: 'Vinayak', age: 25},
//   ]
// }