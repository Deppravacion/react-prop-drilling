import React, { Component } from 'react'
import './App.css'
import Parentcomp from './Parentcomp'

class App extends Component {
  state= {
    message: '',
    submarine : {
      minDepth: '', 
      maxDepth: ''
    }
  }

   changeState = (name, state) => {
    console.log(`changeState() has fired`);
    this.setState({
      [name]: state,
    })
  }

   updateSubState = (name, sub, state) => {
    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        [sub]: state,
      },
    }))
  }

  resetState = () => {
    this.setState({
      message: '',
      submarine: {
        minDepth: '',
        maxDepth: ''
      }
    })
  }
render() {
  return(
    <div>
      <h1>What's in your Prop Drilling Toolkit ?</h1>    
        <h3> State items: </h3>
      <div className="stateWrapper">
        message: {this.state.message}  <br />
       minDepth: {this.state.submarine.minDepth}   <br />
       maxDepth: {this.state.submarine.maxDepth}  <br />
      </div>  
      <Parentcomp           
      changeState={this.changeState}
      updateSubState={this.updateSubState}
      resetState={this.resetState}
      />
    </div>
  )
}
}
export default App
