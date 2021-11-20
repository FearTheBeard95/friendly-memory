import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Image } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import logo from '../logo.svg';
import Question from './Question';

class UserCard extends Component {
  render() {
    const { author, question, isQuestion } = this.props;
    return (
      <Card.Group centered>
        <Image avatar src={logo} size='tiny' />
        <Card fluid>
          <Card.Content header={`${author.name} Asks`} />
          <Card.Content>
            Would You Rather
            <br />
            <Question
              question={question}
              tease={this.props.teaser}
              isQuestion={isQuestion}
            />
          </Card.Content>
          <Card.Content extra>
            {isQuestion ? (
              <Button color='twitter'>Submit</Button>
            ) : this.props.answered ? (
              <Button color='twitter'>Results</Button>
            ) : (
              <Button color='twitter'>View</Button>
            )}
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

function mapStateToProps({ authUser, users, questions }, { match, poll }) {
  let question;
  if (poll !== undefined) {
    question = questions[poll];
  }
  //   else {
  //     const { id } = match.params;
  //     question = questions[id];
  //   }
  const author = users[question.author];
  return {
    question,
    author,
    authUser,
  };
}

export default connect(mapStateToProps)(UserCard);
