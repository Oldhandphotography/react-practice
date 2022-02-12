import React, { Component } from 'react';
import ComponentF from './ComponentF.js'
import UserContext from './userContext.js';
class ComponentE extends Component {
  render() {
    return (
      <div>
      componentE context {this.context}
      <ComponentF />
    </div> 
      )
  }
}
ComponentE.contextType = UserContext
export default ComponentE;
