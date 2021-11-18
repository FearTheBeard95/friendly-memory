import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, List, Segment, Tab } from 'semantic-ui-react';
import UserCard from './UserCard';

class HomePage extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { unanswered, answered } = this.props;
    const panes = [
      {
        menuItem: 'Unanswered',
        render: () => (
          <Tab.Pane>
            <Segment>
              Poll Questions
              <Divider />
              <List verticalAlign='middle'>
                {unanswered.map((poll) => (
                  <List.Item key={poll.id}>
                    <UserCard poll={poll.id} answered={false} teaser={true} />
                    <Divider />
                  </List.Item>
                ))}
              </List>
            </Segment>
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Answered',
        render: () => (
          <Tab.Pane>
            <Segment>
              Polls Answered
              <Divider />
              <List>
                {answered.map((poll) => (
                  <List.Item key={poll.id}>
                    <UserCard poll={poll.id} answered={true} teaser={false} />
                    <Divider />
                  </List.Item>
                ))}
              </List>
            </Segment>
          </Tab.Pane>
        ),
      },
    ];
    return <Tab panes={panes} />;
  }
}

function mapStateToProps({ questions, users, authUser }) {
  const answered = Object.keys(users[authUser].answers);
  return {
    unanswered: Object.values(questions).filter(
      (question) => !answered.includes(question.id)
    ),
    answered: Object.values(questions).filter((question) =>
      answered.includes(question.id)
    ),
  };
}

export default connect(mapStateToProps)(HomePage);
