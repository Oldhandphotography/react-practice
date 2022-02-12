import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRefs = React.createRef()
         
      }
    componentDidMount(){
        // this brings focus after login so that user straight away start typing in case of form.we can also fetch value. 
        this.inputRefs.current.focus()
        console.log(this.inputRefs)
    }
    clickHandler = () =>{
        alert(this.inputRefs.current.value)
    }
  render() {
    return <div>
        <input type="text" ref={this.inputRefs}></input>
        <button onClick={this.clickHandler}>click</button>
    </div>;
  }
}

export default RefsDemo;
