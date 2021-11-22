import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Segment } from 'semantic-ui-react';
import { handleCreateUser } from '../actions/users';
import { setAuthUser } from '../actions/authUser';
import { handleReceiveData } from '../actions/shared';

export class RegisterForm extends Component {
  state = {
    username: '',
    fullName: '',
  };
  onChangeUsername = (e, { value }) => {
    e.preventDefault();
    this.setState({
      username: value,
    });
  };

  onChangeFullName = (e, { value }) => {
    e.preventDefault();
    this.setState({
      fullName: value,
    });
  };

  handleOnSubmit = () => {
    const { dispatch } = this.props;
    const { username, fullName } = this.state;
    setTimeout(() => {
      dispatch(
        handleCreateUser({
          id: username,
          name: fullName,
        })
      );
    }, 600);
  };
  render() {
    const { username, fullName } = this.state;
    const disable = username === '' || fullName === '';
    return (
      <Form size='large' onSubmit={this.handleOnSubmit}>
        <h2>Create User</h2>
        <Segment stacked>
          <Form.Input
            label='Full name'
            type='text'
            onChange={this.onChangeFullName}
          />
          <Form.Input
            label='Username'
            type='text'
            onChange={this.onChangeUsername}
          />
          <Button color='twitter' fluid size='medium' disabled={disable}>
            register
          </Button>
        </Segment>
      </Form>
    );
  }
}

export default connect()(RegisterForm);
