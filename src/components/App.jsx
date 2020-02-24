import React, { Component } from 'react'
// import './App.css';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button } from 'react-bootstrap';
import Chirper from './Chirper';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      message: '',
      chipingArray: [
        {
          id: 1,
          userName: 'Bill',
          message: 'Hello, this is a message.'
        },
        {
          id: 2,
          userName: 'Nye',
          message: 'Hello, this is another message.'
        }, 
        {
          id: 3,
          userName: 'Steve',
          message: 'Hello, this is just a message.'
         
        }
      ]
  }
  
  }

  handleClick() {
    console.log('it works!');
    
  }

  handletInput(e) {
    this.setState({ userName: e.target.value })
  }

  handletInput2(e) {
    this.setState({ message: e.target.value })
  }
  
  render() {
    return (
      <div>
        <h1>Chirper</h1>
        <div>
        <input className ='ml-1'
        type = "text"
        placeholder = "UserName"
        value = {this.state.userName }
        onChange = { (e) => this.handletInput(e) }
        />
        <input
        type = "text"
        placeholder = "message"
        value = { this.state.message }
        onChange = { (e) => this.handletInput2(e) }
        />
        <Button 
        variant = "success mb-1"
        onClick = { this.handleClick }
        >Chirp IT!
        </Button>
        </div>
        <Chirper array = { this.state.chipingArray }/>
      </div>
      
    )
  }
}




export default App;
