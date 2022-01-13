import React, { Component } from 'react'

export default class Eventbind extends Component {
    constructor(props){
        super(props)
        this.state={
            message:'helooe'
        }
        this.handleMessage = this.handleMessage.bind(this);
    }
    handleMessage() {
        this.setState({message:'goodbye'})
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* 1 */}
                {/* //approch with bind */}
                {/* <button onClick={this.handleMessage.bind(this)}>click</button> */}

                {/* 2 */}
                {/* approch with arrow function */}
                {/* <button onClick={() => this.handleMessage()}>click</button> */}
                {/* <p>this will render bind component everytime if we try to render various iterations of this.its ohk to use in small application and performance dont hindder though. </p> */}

                {/* 3 */}
                {/* approch with binding the event handler in constructor as a post to binding in the render method */}
                {/* or
                binding in class constructor */}
                <button onClick={this.handleMessage}>click</button>
            </div>
        )
    }
}
