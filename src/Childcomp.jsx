import React, { Component } from 'react'
import { ALTERNATE_MESSAGE } from './constants.js'


class Childcomp extends Component {
    changeState = (name, state) => this.props.changeState('message', ALTERNATE_MESSAGE)
    minDepth = (name, sub, state) => this.props.updateSubState('submarine', 'minDepth', ALTERNATE_MESSAGE)
    maxDepth = (name, sub, state) => this.props.updateSubState('submarine', 'maxDepth', ALTERNATE_MESSAGE)
    render() {
        const { updateState, updateSubState, message, changeState } = this.props
        return(
            <>
                <button               
                // onClick={() => this.props.changeState('message', ALTERNATE_MESSAGE)}
                onClick={this.changeState}          
                >
                    Change Message
                </button>
                <br>
                </br>
                <button
                onClick={this.minDepth}
                >
                    submarine minDepth 
                </button>
                <button
                onClick={this.maxDepth}
                >
                    submarine maxDepth 
                </button>
            </>    
        )
    }
}
export default Childcomp