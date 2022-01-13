import React, { Component } from 'react'

export default class classclick extends Component {
     classButton()  {
                    console.log("class button clicked");
        }
    
    
    render() {
        return (
            <div>
                <button onClick={this.classButton} >click</button>
            </div>
        )
    }
}
