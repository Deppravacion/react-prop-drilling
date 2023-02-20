import React, { Component } from 'react'
import Childcomp from './Childcomp'


class Parentcomp extends Component {
    render() {
        // const { changeState } = this.props
        return(
            <>
                <div className='parentHeader'>
                   <h4> This parent Container is only passing props from the App component to the Child component</h4>
                   <p>:: changeState:: </p>
                   <p>:: updateSubState :: </p>
                   <p>:: resetState :: </p>
                </div>               
                <Childcomp               
                changeState={this.props.changeState}               
                updateSubState={this.props.updateSubState} 
                resetState={this.props.resetState} 
                />
             
            </>
        )
    }
}
export default Parentcomp