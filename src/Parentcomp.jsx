import React, { Component } from 'react'
import Childcomp from './Childcomp'


class Parentcomp extends Component {
    render() {
        const { message, resetState, changeState } = this.props
        return(
            <>               
                <Childcomp               
                changeState={this.props.changeState}
                message={message}      
                updateSubState={this.props.updateSubState}   
                />
                <button onClick={this.props.resetState}>
                    reset state
                </button>
            </>
        )
    }
}
export default Parentcomp