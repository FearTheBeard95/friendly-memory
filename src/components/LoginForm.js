import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Segment } from 'semantic-ui-react';
import { setAuthUser } from '../actions/authUser';

class LoginForm extends Component {
  state = { selectedUser: '' };

  handleChange = (e, { value }) => {
    const selectedUser = value;
    this.setState({
      selectedUser,
    });
  };

  onSubmit = () => {
    const { dispatch } = this.props;
    const { selectedUser } = this.state;
    dispatch(setAuthUser(selectedUser));
  };
  render(props) {
    const { users } = this.props;
    const disable = this.state.selectedUser === '' ? true : false;
    return (
      <Form size='large' onSubmit={this.onSubmit}>
        <h2>Sign in</h2>
        <Segment stacked>
          <Form.Dropdown
            placeholder='Select user'
            fluid
            selection
            scrolling
            options={users}
            required
            value={this.state.selectedUser}
            onChange={this.handleChange}
          />
          <Button color='twitter' fluid size='medium' disabled={disable}>
            login
          </Button>
        </Segment>
      </Form>
    );
  }
}

export default connect()(LoginForm);
