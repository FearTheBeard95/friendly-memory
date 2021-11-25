import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotFound from './NotFound';
import { Image } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import Content from './Content';

class UserCard extends Component {
  render() {
    const { author, question, type, notFound } = this.props;
    if (notFound) {
      return <NotFound />;
    }
    return (
      <Card.Group centered>
        <Image avatar src={author.avatarURL} size='tiny' />
        <Card fluid>
          <Card.Content header={`${author.name} Asks`} />
          <Card.Content>
            <h4>Would You Rather</h4>
            <br />
            <Content
              type={type}
              question={question}
              answered={this.props.answered}
            />
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

function mapStateToProps({ authUser, users, questions }, { match, poll }) {
  let question;
  let author;
  let notFound = false;
  let type;
  if (poll !== undefined) {
    question = questions[poll];
    author = users[question.author];
  } else {
    const { question_id } = match.params;
    question = questions[question_id];
    type = 'Question';
    if (question === undefined) {
      notFound = true;
    } else {
      author = users[question.author];

      if (Object.keys(users[authUser].answers).includes(question.id)) {
        type = 'Result';
      }
    }
  }
  return {
    type,
    question,
    author,
    authUser,
    notFound,
  };
}

export default connect(mapStateToProps)(UserCard);
