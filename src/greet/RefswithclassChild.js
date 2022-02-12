import React, { Component } from 'react';
import RefswithClass from './RefswithClass';

 class RefswithclassChild extends Component {
     constructor(props) {
       super(props)
     
       this.componentRef =React.createRef()
     }
     handleClick=()=>{
        this.componentRef.current.focusInput()
        alert(this.componentRef.current.value)
     }
  render() {
    return <div>
        <RefswithClass ref={this.componentRef} />
        <button onClick={this.handleClick}>focus input</button>
    </div>;
  }
}

export default RefswithclassChild;
