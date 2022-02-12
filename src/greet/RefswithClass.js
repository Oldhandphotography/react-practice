import React, { Component } from 'react';
import RefswithclassChild from "./RefswithclassChild.js"
class RefswithClass extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
    }
    focusInput(){
        this.inputRef.current.focus();
    }
  render() {
    return <div>
        <RefswithclassChild />
        <input type="text" ref={this.inputRef}></input>
    </div>;
  }
}

export default RefswithClass;
