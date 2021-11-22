import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Grid, Icon, Segment, Button } from 'semantic-ui-react';

class Question extends Component {
  state = {
    answer: this.props.answer,
  };
  render() {
    const { answer, isQuestion, disableOptions } = this.props;
    return (
      <div>
        {!isQuestion ? (
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
                    isQuestion ? (
                      this.props.question.optionTwo.text
                    ) : (
                      <p>...</p>
                    )
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
        ) : (
          <Segment size='massive'>
            <Grid columns={2} stackable textAlign='center'>
              <Divider vertical>Or</Divider>
              <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                  <Button
                    color='twitter'
                    disabled={disableOptions}
                    onClick={() => {
                      this.props.setAnswer('optionOne');
                      this.setState({
                        answer: 'optionOne',
                      });
                    }}
                  >
                    {this.props.question.optionOne.text}{' '}
                    {this.state.answer === 'optionOne' ? (
                      <Icon name='check circle' corner='top right' />
                    ) : null}
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <div>
                    <Button
                      color='youtube'
                      disabled={disableOptions}
                      onClick={() => {
                        this.props.setAnswer('optionTwo');
                        this.setState({
                          answer: 'optionTwo',
                        });
                      }}
                    >
                      {this.props.question.optionTwo.text}
                      {this.state.answer === 'optionTwo' ? (
                        <Icon name='check circle' corner='top right' />
                      ) : null}
                    </Button>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authUser, users }, { question }) {
  const answer = users[authUser].answers[question.id];
  return {
    answer,
    disableOptions: answer === 'optionOne' || answer === 'optionTwo',
  };
}

export default connect(mapStateToProps)(Question);
