import React , { Component} from 'react'

class welcome extends Component {
    render(){
        
        return(
            <h1> Class Components : its a class component{this.props.name}</h1>
        ) 
    }
}

// destructuring class base component
// class welcome extends Component {
//     render(){
//         const {name} = this.props;       
//         return(
//             <h1> Class Components : its a class component{name}</h1>
//         ) 
//     }
// }
export default welcome;

