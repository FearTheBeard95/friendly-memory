import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Segment, Label } from 'semantic-ui-react';

class Results extends Component {
  render() {
    const { question, answer } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;

    return (
      <div>
        <Segment size='massive'>
          <Segment>
            {answer === 'optionOne' && (
              <Label attached='top' color='blue'>
                Your choice
              </Label>
            )}
            <h2>{question.optionOne.text}</h2>
            <h3>{`${optionOneVotes} out of ${totalVotes} votes`}</h3>
            <h2>{((optionOneVotes / totalVotes) * 100).toFixed(0)} %</h2>
          </Segment>
          <Divider horizontal>Or</Divider>
          <Segment>
            {answer === 'optionTwo' && (
              <Label attached='top' color='blue'>
                Your choice
              </Label>
            )}
            <h2>{question.optionOne.text}</h2>
            <h3>{`${optionTwoVotes} out of ${totalVotes} votes`}</h3>
            <h2>{((optionTwoVotes / totalVotes) * 100).toFixed(0)} %</h2>
          </Segment>
        </Segment>
      </div>
    );
  }
}

function mapStateToProps({ users, authUser }, { question }) {
  return {
    answer: users[authUser].answers[question.id],
  };
}

export default connect(mapStateToProps)(Results);
