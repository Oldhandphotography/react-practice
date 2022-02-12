import React, { Component } from 'react'
import  Childcomponent from "./childComponent.js"
class parentcomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
     
    greetParent(childName) {
        alert(`hello ${this.state.parentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                <Childcomponent Greethandler={this.greetParent} />
            </div>
        )
    }
}
export default parentcomponent