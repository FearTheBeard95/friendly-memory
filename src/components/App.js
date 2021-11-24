import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { handleReceiveData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import Login from './Login';
import Nav from './Nav';
import PollQuestion from './PollQuestion';
import PollResult from './PollResult';
import HomePage from './Home';
import { Divider } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewPoll from './NewPoll';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveData());
  }
  render() {
    const { authUser } = this.props;

    return (
      <Router>
        <div className='container-sm App'>
          {authUser === null ? (
            <Login />
          ) : (
            <div>
              <LoadingBar />
              <Nav />
              <Divider />
              {/* Render pages here */}
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/add' component={NewPoll} />
                <Route path='/leaderboard' />
                <Route path='/question/:id' component={PollQuestion} />
                <Route path='/pollresult/:id' component={PollResult} />
              </Switch>
            </div>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps)(App);
