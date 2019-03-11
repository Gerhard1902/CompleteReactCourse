import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state={
    persons:[
    {name:"Max", age:28},
    {name:"Manu", age:29},
    {name:"steph", age:26}
    ]
  } 
switchNameHandler =()=>{
  //console.log("Was clicked");
  //Don´t do this -> this.state.persons[0].name="Maximilian";// si no es arrow no va a referir a la clase
  this.setState({persons:[
    {name:"Maximilian", age:28},
    {name:"Manu", age:29},
    {name:"steph", age:27}
    ]})
}

  render() {
    return (
      <div className="App">
        <h1>Hi, i´m a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/> 
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies:Racing</Person> 
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );   

   //return React.createElement("div",{className:"App"}, React.createElement("h1",null,"Does this work now?"))
  }
}
export default App;

//class no se puede usar
//there must be one root element
