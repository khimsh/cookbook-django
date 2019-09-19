import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRecipes } from '../../actions/recipes';

export class Recipes extends Component {
  static propTypes = {
    recipes: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    return (
      <Fragment>
        <h1>Recipes</h1>

        <div className='table table-stripped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Preparation Time</th>
              <th>Difficulty</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.recipes.map(recipe => (
              <tr key={recipe.id}>
                <td>{recipe.id}</td>
                <td>{recipe.name}</td>
                <td>{recipe.description}</td>
                <td>{recipe.prep_time}</td>
                <td>{recipe.difficulty}</td>
                <td>
                  <button className='btn btn-danger btn-sm'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes
});

export default connect(
  mapStateToProps,
  { getRecipes }
)(Recipes);
