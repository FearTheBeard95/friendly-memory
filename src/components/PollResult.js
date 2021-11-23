import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';

class PollResults extends Component {
  render() {
    return (
      <div>
        <UserCard answered={true} match={this.props.match} />
      </div>
    );
  }
}

export default connect()(PollResults);
