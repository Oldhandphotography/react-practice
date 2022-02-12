import React, { Component } from 'react';

 class Hovercounter2 extends Component {
  render() {
      const{count,increaseCount} = this.props
    return (<div>
        <h1 onMouseOver={increaseCount}> hovered {count} times</h1>
    </div>);
  }
}

export default Hovercounter2;
