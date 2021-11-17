import React, { Component } from 'react';
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Visibility,
  Button,
} from 'semantic-ui-react';
import logo from '../logo.svg';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
};

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
};

class Nav extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  };
  unStickTopMenu = () => this.setState({ menuFixed: false });
  stickTopMenu = () => this.setState({ menuFixed: true });
  render() {
    const { menuFixed } = this.state;
    return (
      <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}
      >
        <Menu
          fixed={menuFixed ? 'top' : undefined}
          style={menuFixed ? fixedMenuStyle : menuStyle}
        >
          <Container text>
            <Menu.Item>
              <Image size='mini' src={logo} />
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>New poll</Menu.Item>
            <Menu.Item as='a'>Leaderboards</Menu.Item>

            <Menu.Menu position='right'>
              <Button color='twitter' fluid size='small'>
                login
              </Button>
            </Menu.Menu>
          </Container>
        </Menu>
      </Visibility>
    );
  }
}

export default Nav;
