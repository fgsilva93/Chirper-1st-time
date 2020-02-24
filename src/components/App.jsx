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
          userName: 'Bill',
          message: 'Hello, this is a message.'
        },
        {

          userName: 'Nye',
          message: 'Hello, this is another message.'
        },
        {

          userName: 'Steve',
          message: 'Hello, this is just a message.'

        }
      ]
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleUserName(e) {
    this.setState({ userName: e.target.value })
  }

  handleMessage(e) {
    this.setState({ message: e.target.value })
  }
  handleClick() {
    // console.log( {userName: e.target.value} );
    const newChirp = {
      userName: this.state.userName,
      message: this.state.message
    }

    this.setState({ chipingArray: [...this.state.chipingArray, newChirp] })
  }

  handletInput(e) {
    this.setState({ userName: e.target.value }, { message: e.target.value })
  }

  getSomeStyle(){
    return {
      background: 'lightgreen', marginTop: '5px', marginLeft: '5px', width: '500px', border: 'solid 2px green', color: 'green'
    }
  }

  render() {
    return (

      <div>
        <h1 style = {this.getSomeStyle()}>Chirper</h1>
        <div>
          <input className='ml-1' type="text" placeholder="UserName" value={this.state.userName} onChange={(e) => this.handleUserName(e)}/>
          <input type="text" placeholder="message" value={this.state.message} onChange={(e) => this.handleMessage(e)}/>
          <Button variant="success mb-1" onClick={(e) => this.handleClick(e)}>Chirp IT!</Button>
        </div>
        <Chirper array={this.state.chipingArray} />
      </div>

    )
  }
}




export default App;
