import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';

class PollQuestion extends Component {
  render() {
    const { authUser } = this.props;
    console.log(authUser);
    return (
      <div>
        <UserCard
          poll='8xf0y6ziyjabvozdd253nd'
          answered={false}
          teaser={true}
          isQuestion={true}
        />
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
