import React, { Component } from 'react';
import UpdatedComponent from "./withCounter.js";
class Hovercounter extends Component {

  render() {
    const {count,increamentCount} = this.props;
    return (<div>
        <h2 onMouseOver={increamentCount}> hover {count} times </h2>
    </div>);
  }
}

export default UpdatedComponent(Hovercounter);
