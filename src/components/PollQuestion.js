import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';

class PollQuestion extends Component {
  render() {
    const { authUser } = this.props;
    console.log(authUser);
    return (
      <div>
        <UserCard answered={false} type='Question' match={this.props.match} />
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps)(PollQuestion);
