// 1st step is creat ref
import React, { Component } from 'react';
class RefsDemoUsingCallback extends Component {
    constructor(props) {
      super(props)
    
      this.inputRefs = React.createRef()
        this.cbRef=null
        this.setCbref = element => {
            this.cbRef= element
        }
        
      }
    componentDidMount(){
        // this brings focus after login so that user straight away start typing in case of form.we can also fetch value. 
        // this.inputRefs.current.focus()
        // console.log(this.inputRefs)
        if(this.cbRef){
            this.cbRef.focus()
            //ab current use kerne ki need nhi hai.
        }
    }
    clickHandler = () =>{
        alert(this.inputRefs.current.value)
    }
  render() {
    return <div>
        {/* <input type="text" ref={this.inputRefs}></input> */}
        <input type="text" ref={this.setCbRefs}></input>
        <button onClick={this.clickHandler}>click</button>
    </div>;
  }
}

export default RefsDemoUsingCallback;
