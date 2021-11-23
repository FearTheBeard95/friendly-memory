import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';

class PollResults extends Component {
  render() {
    return (
      <div>
        <UserCard match={this.props.match} type='Result' />
      </div>
    );
  }
}

export default connect()(PollResults);
