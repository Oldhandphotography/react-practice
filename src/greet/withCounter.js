import React from 'react';
const UpdatedComponent = OriginalComponent =>{
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          increamentCount = ()=>{
              this.setState(prevState =>{ return {count: prevState.count+1}})
            //   console.log('error')
          }
        render() {

            const {count} = this.state
          return (<OriginalComponent count={count} increamentCount={this.increamentCount}
            {...this.props} />)
      }
    }  
    return NewComponent  
}
export default UpdatedComponent;