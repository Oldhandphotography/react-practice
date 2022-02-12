import React, { Component } from 'react';

export class lifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'vishwas'
      }
      console.log('lifecycleB constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('lifecycleB componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('lifecycleB render')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleB snapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleB componentDidUpdate')
    }
  render() {
      console.log('lifecycleB componentDidMount')
    return(<div>
        lifecycleB
    </div>) ;
  }
}

export default lifecycleB;
