import React, { Component } from 'react'

class Conditionalrendering3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isloggedin:false
        }
    }
    isIncrease(){
        this.setState({isloggedin:this.state.isloggedin=true})
        alert("welcome souvik")
    }
    isDecrease(){
        alert('welcome ghost')
    }
    
    render() {
        
        return (
            <div>
                <button onClick ={()=> this.isIncrease()}>true</button>
                <button onclick ={()=> this.isDecrease()}>false</button>
           </div>
        )
    }
}

export default Conditionalrendering3
