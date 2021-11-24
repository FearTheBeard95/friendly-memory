import React, { Component } from 'react';
import { Divider, Segment } from 'semantic-ui-react';

class Teaser extends Component {
  render() {
    return (
      <div>
        <Segment size='massive'>
          <Segment color='blue'>
            <h2 style={{ color: 'white' }}>
              {this.props.question.optionOne.text}
            </h2>
          </Segment>
          <Divider horizontal>Or</Divider>
          <Segment color='red'>
            <h2 style={{ color: 'white' }}>...</h2>
          </Segment>
        </Segment>
      </div>
    );
  }
}

export default Teaser;
