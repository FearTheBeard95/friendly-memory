import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Button, Divider, Form, Segment } from 'semantic-ui-react';
import { handleSaveQuestion } from '../actions/shared';

class NewPoll extends Component {
  state = {
    question1: '',
    question2: '',
    redirect: false,
  };

  handleChangeQ1 = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log('Question 1', value);
    this.setState({
      question1: value,
    });
  };

  handleChangeQ2 = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log('Question 2', value);
    this.setState({
      question2: value,
    });

    e.target.value = '';
  };

  handleOnSubmit = (e) => {
    const { dispatch, authUser } = this.props;
    const { question1, question2 } = this.state;

    //dispatch to an add poll action
    dispatch(
      handleSaveQuestion({
        author: authUser,
        optionOneText: question1,
        optionTwoText: question2,
      })
    );
    this.setState({
      question1: '',
      question2: '',
      redirect: true,
    });
  };

  render() {
    const { question1, question2, redirect } = this.state;
    if (redirect) {
      return <Redirect to='/' />;
    }
    return (
      <div>
        <h1>Create New Poll</h1>
        <Segment>
          <h2>Would You Rather....</h2>
          <Form onSubmit={this.handleOnSubmit}>
            <Form.Field>
              <label>Question 1</label>
              <input
                placeholder='Question 1'
                onChange={this.handleChangeQ1}
                value={question1}
              />
            </Form.Field>
            <Divider horizontal>Or</Divider>
            <Form.Field>
              <label>Question 2</label>
              <input
                placeholder='Question 2'
                onChange={this.handleChangeQ2}
                value={question2}
              />
            </Form.Field>
            <Button type='submit' color='twitter'>
              Submit
            </Button>
            <Button type='submit' color='twitter'>
              Cancel
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps)(NewPoll);
