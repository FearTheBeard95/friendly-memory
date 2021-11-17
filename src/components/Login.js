import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import { Grid } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class Login extends Component {
  render() {
    const users = this.props.users.map((user) => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatar },
    }));
    return (
      <Grid
        textAlign='center'
        style={{ height: '100vh' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <img src={logo} alt='logo' />
          <h1>WOULD YOU RATHER</h1>
          <br />
          <LoginForm users={users} />
          <br />
          <RegisterForm />
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default connect(mapStateToProps)(Login);
