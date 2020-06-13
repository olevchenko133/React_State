import React, { Component } from 'react'
import './App.css';

class App extends Component {

  // COSTRUCTOR
  constructor(props) {
    super(props);
    this.state = {
      numClicks: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
let num = Math.floor(Math.random() * 10) +1;
    this.setState({ numClicks: num });

  }


  render() {
    return (
<div className="App"> 
  <h1>Number is: {this.state.numClicks} </h1>

  { this.state.numClicks ===7 ? <h2>You win</h2>
 : <button onClick={this.handleClick} >Generate number </button> }

</div>
    )
  }
}




export default App;
