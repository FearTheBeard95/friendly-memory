import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import Question from './Question';
import { handleSaveAnswer } from '../actions/users';
import Teaser from './Teaser';
import Results from './Results';
import { connect } from 'react-redux';

class Content extends Component {
  state = {
    answer: '',
    redirect: false,
  };

  handleSetAnswer = (answer) => {
    console.log('Answer', answer);
    return this.setState({
      answer,
    });
  };
  handleSubmitAnswer = () => {
    const { authUser, question } = this.props;
    console.log(this.props);
    if (this.state.answer === 'optionOne') {
      this.props.dispatch(handleSaveAnswer(authUser, question.id, 'optionOne'));
    } else {
      this.props.dispatch(handleSaveAnswer(authUser, question.id, 'optionTwo'));
    }

    this.setState({
      answer: '',
      redirect: true,
    });
  };
  render() {
    const { question, type, teaser, answered } = this.props;
    const { redirect } = this.state;
    switch (type) {
      case 'Question':
        if (redirect) {
          return <Redirect to={`/pollresult/${question.id}`} />;
        }
        return (
          <div>
            <Question
              question={question}
              tease={teaser}
              setAnswer={this.handleSetAnswer}
            />
            <br />
            <Form onSubmit={this.handleSubmitAnswer}>
              <Button color='twitter' disabled={this.state.answer === ''}>
                Submit
              </Button>
            </Form>
          </div>
        );
      case 'Result':
        return (
          <div>
            <Results question={question} />
            <br />
            <Button color='twitter' as={NavLink} to={`/`}>
              Back
            </Button>
          </div>
        );
      default:
        return (
          <div>
            <Teaser question={question} />
            <br />
            {answered ? (
              <Button
                color='twitter'
                as={NavLink}
                to={`/pollresult/${question.id}`}
              >
                Result
              </Button>
            ) : (
              <Button
                color='twitter'
                as={NavLink}
                to={`/questions/${question.id}`}
              >
                View
              </Button>
            )}
          </div>
        );
    }
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps)(Content);
