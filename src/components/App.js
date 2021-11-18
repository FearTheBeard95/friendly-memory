import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { handleReceiveData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import Login from './Login';
import Nav from './Nav';
import HomePage from './Home';
import { Divider } from 'semantic-ui-react';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveData());
  }
  render() {
    const { authUser } = this.props;

    return (
      <div className='container-sm App'>
        {authUser === null ? (
          <Login />
        ) : (
          <div>
            <LoadingBar />
            <Nav />
            <Divider />
            {/* Render pages here */}
            <HomePage />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps)(App);
