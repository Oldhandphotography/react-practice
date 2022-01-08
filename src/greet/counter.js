import React, { Component } from 'react'
//rce rconst snippets
export default class counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    increment(){
        // this.setState({count:this.state.count=this.state.count+1})
        // this.state.count = this.state.count+1; this will not update window but update value in console
        this.setState(prevState => ({
            count: prevState.count+1}))
        console.log(this.state.count);    
    }
    decrement(){
        this.setState({count:this.state.count=this.state.count-1})
    }
    render() {
        return (
            <div>
                count - {this.state.count}<br></br>
                <button onClick = {() => this.increment()}>increase the value </button>
                <button onClick = {() => this.decrement()}>decrease the value </button>
            </div>
        )
    }
}
