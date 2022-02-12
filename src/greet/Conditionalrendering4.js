import React, { Component } from 'react'
// ternary conditional operator approch fro  conditional renderning
 class Conditionalrendering4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isloggedin:false
        }
    }
    render() {
        return (
            <div>
                this.state.isloggedin?(<div>welcome souvik</div>): (<div>welcome guest</div>)          
            </div>
        )
    }
}

export default Conditionalrendering4
