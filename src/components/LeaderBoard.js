import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Segment,
  Header,
  Image,
  Grid,
  Label,
  Divider,
} from 'semantic-ui-react';

class LeaderBoard extends Component {
  render() {
    const color = ['yellow', 'grey', 'black'];
    const { leaders } = this.props;
    return (
      <Segment>
        <h1>Champions</h1>
        {leaders.map((leader, index) => (
          <Leader champion={leader} color={color[index]} />
        ))}
      </Segment>
    );
  }
}

const Leader = (props) => (
  <Segment>
    <Label corner='right' icon='gem' color={props.color} />
    <Grid padded textAlign='center'>
      <Grid.Row>
        <Grid.Column width={3} verticalAlign='middle' textAlign='center'>
          <Image src={`${props.champion.avatarURL}`} size='large' />
        </Grid.Column>
        <Grid.Column width={6}>
          <br />
          <Header as='h3' textAlign='left'>
            {props.champion.name}
          </Header>
          <Grid textAlign='left'>
            <Grid.Column width={12}>Answered questions</Grid.Column>
            <Grid.Column width={4}>{props.champion.answersCount}</Grid.Column>
          </Grid>
          <Divider />
          <Grid textAlign='left'>
            <Grid.Column width={12}>Created questions</Grid.Column>
            <Grid.Column width={4}>{props.champion.questionsCount}</Grid.Column>
          </Grid>
        </Grid.Column>
        <Divider />
        <Grid.Column width={4} textAlign='center'>
          <br />
          <Segment.Group>
            <Header as='h5' block attached='top' content='Score' />
            <Segment>
              <Label circular color='green' size='big'>
                {props.champion.sum}
              </Label>
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

function mapStateToProps({ users }) {
  const leaders = Object.values(users)
    .map((leader) => ({
      id: leader.id,
      name: leader.name,
      avatarURL: leader.avatarURL,
      answersCount: Object.keys(leader.answers).length,
      questionsCount: leader.questions.length,
      sum: Object.keys(leader.answers).length + leader.questions.length,
    }))
    .sort((a, b) => b.sum - a.sum)
    .slice(0, 3);
  return {
    leaders,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
