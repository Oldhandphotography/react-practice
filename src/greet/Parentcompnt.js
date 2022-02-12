import React, { Component } from 'react';
import RegComp from "./Regularcomponent.js"
import PureComp from "./Purecomponent.js"
import Memo from "./Memo.js";
 class Parentcompnt extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'vishwas'
      }
    }
    componentDidMount() {
        setInterval(()=>{
           this.setState({name:'vishwas'}) 
        },2000)
    }
    
  render() {
    return( 
    <div>parent component
        <Memo name={this.state.name}/>
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
    </div> 
    );
  }
}

export default Parentcompnt;
