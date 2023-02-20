import React, { Component } from 'react'
import { ALTERNATE_MESSAGE } from './constants.js'


class Childcomp extends Component {
    changeState = (name, state) => this.props.changeState('message', ALTERNATE_MESSAGE)
    deepState = (name, sub, state) => this.props.changeSubState('submarine', 'minDepth', state)
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
                updateSubState={this.deepState}
                >
                </button>
            </>    
        )
    }
}
export default Childcomp