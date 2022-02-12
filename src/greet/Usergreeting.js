import React, { Component } from 'react'
// conditional rendering using if else
 class Usergreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedin:true
         }
     }
     
    render() {
        if(this.state.isLoggedin){
            return(
                <div>welcome vishwas</div>
            )
        }
        else{
            return (
                <div>welcome guest</div>
            )
        }
        // return (
        //     <div>
        //         <div>welcome vishwas</div>
        //         <div>welcome guest</div>
        //     </div>
        // )
    }
}

export default Usergreeting
