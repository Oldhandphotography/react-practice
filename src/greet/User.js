import React, { Component } from 'react';

class User extends Component {
  render() {
    return <div>
        {/* render props: the term refers to technique for sharing code between react components using a prop whose value is a function */}
        {this.props.render(true)}
    </div>;
  }
}

export default User;
