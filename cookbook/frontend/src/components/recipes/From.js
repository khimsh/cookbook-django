import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addRecipe } from '../../actions/recipes';

export class From extends Component {
  state = {
    name: '',
    description: '',
    prep_time: '',
    difficulty: ''
  };

  static propTypes = {
    addRecipe: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, description, prep_time, difficulty } = this.state;
    const recipe = { name, description, prep_time, difficulty };
    this.props.addRecipe(recipe);
    this.setState({
      name: '',
      description: '',
      prep_time: '',
      difficulty: ''
    });
  };

  render() {
    const { name, description, prep_time, difficulty } = this.state;

    return (
      <div className='card card-body mt-4 mb-4'>
        <h2>Add Recipe</h2>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <input
              className='form-control'
              type='text'
              name='name'
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className='form-group'>
            <label>Preparation Time</label>
            <input
              className='form-control'
              type='text'
              name='prep_time'
              onChange={this.onChange}
              value={prep_time}
            />
          </div>
          <div className='form-group'>
            <label>description</label>
            <textarea
              className='form-control'
              type='text'
              name='description'
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div className='form-group'>
            <label>difficulty</label>
            <input
              className='form-control'
              type='text'
              name='difficulty'
              onChange={this.onChange}
              value={difficulty}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addRecipe }
)(From);
