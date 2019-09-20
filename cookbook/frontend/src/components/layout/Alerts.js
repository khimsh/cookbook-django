import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;

    if (error !== prevProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.prep_time)
        alert.error(`Preparation Time: ${error.msg.prep_time.join()}`);
      if (error.msg.difficulty)
        alert.error(`Difficulty: ${error.msg.difficulty.join()}`);
      if (error.msg.description)
        alert.error(`Description: ${error.msg.description.join()}`);
    }

    if (message !== prevProps.message) {
      if (message.deleteRecipe) alert.success(message.deleteRecipe);
      if (message.addRecipe) alert.success(message.addRecipe);
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
