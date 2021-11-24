import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Icon, Segment, Button } from 'semantic-ui-react';

class Question extends Component {
  state = {
    answer: this.props.answer,
  };
  render() {
    const { disableOptions } = this.props;
    return (
      <div>
        <Segment size='massive'>
          <Segment>
            <Button
              color='twitter'
              disabled={disableOptions}
              onClick={() => {
                this.props.setAnswer('optionOne');
                this.setState({
                  answer: 'optionOne',
                });
              }}
              fluid
            >
              {this.props.question.optionOne.text}{' '}
              {this.state.answer === 'optionOne' ? (
                <Icon name='check circle' corner='top right' />
              ) : null}
            </Button>
          </Segment>
          <Divider horizontal>Or</Divider>
          <Segment>
            <Button
              color='youtube'
              disabled={disableOptions}
              onClick={() => {
                this.props.setAnswer('optionTwo');
                this.setState({
                  answer: 'optionTwo',
                });
              }}
              fluid
            >
              {this.props.question.optionTwo.text}
              {this.state.answer === 'optionTwo' ? (
                <Icon name='check circle' corner='top right' />
              ) : null}
            </Button>
          </Segment>
        </Segment>
      </div>
    );
  }
}

function mapStateToProps({ authUser, users }, { question }) {
  const answer = users[authUser].answers[question.id];
  return {
    answer,
    disableOptions: answer === 'optionOne' || answer === 'optionTwo',
  };
}

export default connect(mapStateToProps)(Question);
