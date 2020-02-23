import React, { Component } from 'react'
// import './App.css';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button } from 'react-bootstrap';
import Chirper from './Chirper';

export class App extends Component {
  state = {
    userName: '',
    message: '',
    chipingArray: [
      {
        id: 1,
        userName: 'bill',
        message: 'Hello'
      },
      {
        id: 2,
        userName: 'Nye',
        message: 'Hello'
      }, 
      {
        id: 3,
        userName: 'Steve',
        message: 'Hello'
       
      }
    ]
  }

  handleClick() {
    console.log('it works!');
  }
  
  render() {
    return (
      <div>
        <h1>Chirper</h1>
        <div>
        <input className ='ml-1'
        type = "text"
        placeholder = "UserName"
        />
        <input
        type = "text"
        placeholder = "message"
        />
        <Button variant = "success mb-1" onClick = { this.handleClick }>Chirp IT!</Button>
        </div>
      </div>
      
    )
  }
}




export default App;
