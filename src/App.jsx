import React, { Component } from 'react'
import './App.css'
import { INIT_MESSAGE } from './constants.js'
import { ALTERNATE_MESSAGE } from './constants.js'
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
      message: INIT_MESSAGE,
    })
  }


render() {
  return(
    <div>
      <h1>app</h1>
      
      <Parentcomp      
      message={this.state.message}       
      changeState={this.changeState}
      updateSubState={this.updateSubState}
      resetState={this.resetState}
      />

    </div>
  )
}

}

export default App
