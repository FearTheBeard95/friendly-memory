import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Form, Image } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import logo from '../logo.svg';
import Question from './Question';
import { handleSaveAnswer } from '../actions/shared';

class UserCard extends Component {
  state = {
    answer: '',
  };
  handleSetAnswer = (answer) => {
    console.log('Answer', answer);
    return this.setState({
      answer,
    });
  };
  handleSubmitAnswer = () => {
    const { authUser, question } = this.props;
    if (this.state.answer === 'optionOne') {
      this.props.dispatch(
        handleSaveAnswer({
          authedUser: authUser,
          qid: question.id,
          answer: 'optionOne',
        })
      );
    } else {
      this.props.dispatch(
        handleSaveAnswer({
          authedUser: authUser,
          qid: question.id,
          answer: 'optionTwo',
        })
      );
    }

    this.setState({
      answer: '',
    });
  };
  render() {
    const { author, question, isQuestion } = this.props;
    const { answer } = this.state;
    console.log(answer);
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
              setAnswer={this.handleSetAnswer}
            />
          </Card.Content>
          <Card.Content extra>
            {isQuestion ? (
              <Form onSubmit={this.handleSubmitAnswer}>
                <Button color='twitter' disabled={this.state.answer === ''}>
                  Submit
                </Button>
              </Form>
            ) : this.props.answered ? (
              <Button
                color='twitter'
                as={NavLink}
                to={`/pollresult/${question.id}`}
              >
                Results
              </Button>
            ) : (
              <Button
                color='twitter'
                as={NavLink}
                to={`/question/${question.id}`}
              >
                View
              </Button>
            )}
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

function mapStateToProps(
  { authUser, users, questions },
  { match, poll, isQuestion }
) {
  let question;
  if (poll !== undefined) {
    question = questions[poll];
  } else {
    console.log('match', match);
    const { id } = match.params;
    if (id !== undefined) {
      isQuestion = true;
    }
    question = questions[id];
  }
  const author = users[question.author];
  return {
    question,
    author,
    authUser,
    isQuestion,
  };
}

export default connect(mapStateToProps)(UserCard);
