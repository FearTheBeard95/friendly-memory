import React, { Component } from 'react';
import { Divider, Segment } from 'semantic-ui-react';

class Teaser extends Component {
  render() {
    return (
      <div>
        <Segment size='massive'>
          <Segment>
            <h2>{this.props.question.optionOne.text}</h2>
          </Segment>
          <Divider horizontal>Or</Divider>
          <Segment>
            <h2>...</h2>
          </Segment>
        </Segment>
      </div>
    );
  }
}

export default Teaser;
