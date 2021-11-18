import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Menu, Header, Image } from 'semantic-ui-react';
import { setAuthUser } from '../actions/authUser';
import logo from '../logo.svg';

class Nav extends Component {
  state = { activeItem: 'home' };
  handleLogout = () => {
    const { dispatch } = this.props;

    dispatch(setAuthUser(null));
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  unStickTopMenu = () => this.setState({ menuFixed: false });
  stickTopMenu = () => this.setState({ menuFixed: true });
  render() {
    const { activeItem } = this.state;
    const { authUser, users } = this.props;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='new poll'
            active={activeItem === 'new poll'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='leaderboards'
            active={activeItem === 'leaderboards'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item name='logout'>
              <Button onClick={this.handleLogout} color='twitter'>
                Logout
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Header as='h2' textAlign='left'>
          <Image circular src={logo} /> {users[authUser].name}
        </Header>
      </div>
    );
  }
}

function mapStateToProps({ users, authUser }) {
  return {
    authUser,
    users,
  };
}

export default connect(mapStateToProps)(Nav);
