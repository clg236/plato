import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button'
import Toggle from './Components/Toggle'
import Student from './Components/Student'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //our students array
      students: [{
        name: 'Bob Ross',
        img: 'https://media.giphy.com/media/rYEAkYihZsyWs/giphy.gif'
      },
      {
        name: 'Mr Rogers',
        img: 'https://media.giphy.com/media/x0npYExCGOZeo/giphy.gif'
      },
      {
        name: 'Carrie Fisher',
        img: 'https://media.giphy.com/media/CXU8axmXoPHUY/giphy.gif'
      }
    ],
    //our pickFromAll boolean
    pickFromAll: true,
    pickedStudent: null
    }

  }
  
  //handle picking a random student
  pickRandomStudent = () => {
    
    //call this.setState to update our state
    this.setState(() => ({
      pickedStudent: this.state.students[Math.floor(Math.random() * this.state.students.length)]
    }))

  }
  
  render() {
    return (
      <div className="App">
        <Student student={this.state.pickedStudent}/>
        <Button handleClicked={this.pickRandomStudent}/>
        <Toggle />
      </div>
    );
  }
}

export default App;
