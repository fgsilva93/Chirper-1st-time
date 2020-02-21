import React, { Component } from 'react'
// import './App.css';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Button } from 'react-bootstrap';
import Chirper from './Chirper';

export class App extends Component {
  state = {
    chiping: [
      {
        id: 1,
        text: 'something exist here'
      },
      {
        id: 2,
        text: 'something else exist here too'
      }, 
      {
        id: 3,
        text: 'something else again exist here again'
      }
    ]
  }

  handleClick() {
    console.log('it working!');
  }
  
  render() {
    return (
      <Container>
        <Row>
        <div>
        <h1>Chirper</h1>
        </div>
        </Row>
        <Row>
        <div>
        <Button variant ="success" onClick ={ ()=> this.handleClick() } >Click me!</Button>
        </div>
        </Row>
        <Row>
          <div>
            <Chirper chip = { this.state.chiping } />
          </div>
        </Row>
        
      </Container>
    )
  }
}




export default App;
