import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Grid, Icon, Segment } from 'semantic-ui-react';

class Question extends Component {
  render() {
    const { answer } = this.props;
    return (
      <Segment size='massive'>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <p>
                {this.props.question.optionOne.text}{' '}
                {answer === 'optionOne' ? (
                  <Icon name='check circle' corner='top right' />
                ) : null}
              </p>
            </Grid.Column>
            <Grid.Column>
              {this.props.tease ? (
                <p>...</p>
              ) : (
                <div>
                  <p>
                    {this.props.question.optionTwo.text}
                    {answer === 'optionTwo' ? (
                      <Icon name='check circle' corner='top right' />
                    ) : null}
                  </p>
                </div>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

function mapStateToProps({ authUser, users }, { question }) {
  const answer = users[authUser].answers[question.id];
  return {
    answer,
  };
}

export default connect(mapStateToProps)(Question);
