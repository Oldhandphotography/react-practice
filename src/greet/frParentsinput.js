import React, { Component } from 'react';
import FRinput from "./fordwardrefsinput.js"
 class frParentsinput extends Component {
     constructor(props) {
       super(props)
     
       this.inputRef = React.createRef() 
     }
  handleClick =()=>{
    this.inputRef.current.focus()
  }   
  render() {
    return <div>
        <FRinput ref={this.inputRef} />
        <button onClick={this.handleClick}>focus input</button>
    </div>;
  }
}

export default frParentsinput;
