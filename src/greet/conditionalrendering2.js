import React, { Component } from 'react'
// element variable approch for conditional rendering

 class conditionalrendering2 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
                isLoggedin:true
         }
     }
     
    render() {
        let Message
        if(this.state.isLoggedin){
            Message = <div>welcome souvik</div>
        }
        else{
            Message = <div>welcome guest</div>
        }
        return (
            <div>
               {Message} 
            </div>
        )
    }
}

export default conditionalrendering2
