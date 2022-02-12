

// mounting lifecyucle model

// import React, { Component } from 'react';
// import LifecycleB from "./lifecycleB.js"
// export class lifecycleA extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          name:'vishwas'
//       }
//       console.log('lifecycle constructor')
//     }
//     static getDerivedStateFromProps(props,state){
//         console.log('lifecycleA getDerivedStateFromProps')
//         return null
//     }
//     componentDidMount(){
//         console.log('lifecycleA componentDidMount')
//     }
//   render() {
//       console.log('lifecycleA componentDidMount')
//     return(<div>
//        <div>lifecycleA</div> 
//         <LifecycleB />
//     </div>
//     ) ;
//   }
// }

// export default lifecycleA;


// component updating lifecycle model 
import React, { Component } from 'react';
import LifecycleB from "./lifecycleB.js"
export class lifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'vishwas'
      }
      console.log('lifecycle constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('lifecycleA componentDidMount') 
    }
    shouldComponentUpdate() {
        console.log('lifecycleA render')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleA snapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleA componentDidUpdate')
    }
    changeState =() =>{
        this.setState({
            name:'codeevolution'
        })
    }
  render() {
      console.log('lifecycleA componentDidMount')
    return(<div>
       <div>lifecycleA</div> 
       <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
    </div>
    ) ;
  }
}
export default lifecycleA;