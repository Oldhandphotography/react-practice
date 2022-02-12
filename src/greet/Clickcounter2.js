import React, { Component } from 'react';

export class Clickcounter2 extends Component {
  render() {
      const {count,increaseCount} = this.props;
    return <div>
        <button onClick={increaseCount} >clicked {count} times</button>
    </div>;
  }
}

export default Clickcounter2;

