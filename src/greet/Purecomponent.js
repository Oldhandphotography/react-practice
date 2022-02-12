import React, { PureComponent } from 'react';

class Purecomponent extends PureComponent {
  render() {
    return <div>pure component{this.props.name}</div>;
  }
}

export default Purecomponent;
