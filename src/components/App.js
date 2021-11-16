import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { handleReceiveData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveData());
  }
  render() {
    return (
      <div className='App'>
        <LoadingBar />
      </div>
    );
  }
}

function mapStateToProps(authUser) {
  return {
    loading: authUser === null,
  };
}

export default connect(mapStateToProps)(App);
