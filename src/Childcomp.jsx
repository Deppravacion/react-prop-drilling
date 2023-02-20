import React, { Component } from 'react'
import { ALTERNATE_MESSAGE, MAX_DEPTH, MIN_DEPTH } from './constants.js'

class Childcomp extends Component {
    message = (name, state) => this.props.changeState('message', ALTERNATE_MESSAGE)
    minDepth = (name, sub, state) => this.props.updateSubState('submarine', 'minDepth', MIN_DEPTH)
    maxDepth = (name, sub, state) => this.props.updateSubState('submarine', 'maxDepth', MAX_DEPTH)
    resetAll = () => this.props.resetState()
    render() {
        const { updateSubState, changeState, resetState } = this.props
        return(            
            <div className="childWrapper">
                <h3>Our Child holds the buttons and can effectively handle state through to the App component</h3>
                <div className="buttonWrapper">
                    <button               
                    // onClick={() => this.props.message('message', ALTERNATE_MESSAGE)} //anonymous method
                    onClick={this.message}          
                    >Initialize Message
                    </button>                    
                </div>               
                <div className="buttonWrapper">
                    <button
                    onClick={this.minDepth}
                    > minDepth 
                    </button>
                    <button
                    onClick={this.maxDepth}
                    > maxDepth 
                    </button>
                </div>
                <div className="buttonWrapper">
                <button 
                    onClick={this.resetAll}
                    >reset state
                    </button>
                </div>            
            </div>
        )
    }
}
export default Childcomp