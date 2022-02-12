import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super()
        this.state={message:"welcome visitor",subscribe:"subscribe"}
    }
    changeMessage() {
        // set state alters the state of class component
        this.setState({
            message:"thankyou for subscribing"
        })
    }
    render() {
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={() => this.changeMessage()}>{this.state.subscribe}</button> 
            </div>
        )
    }
}
