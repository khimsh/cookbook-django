import axios from 'axios';
import { GET_RECIPES, DELETE_RECIPE, ADD_RECIPE } from './types';
import { createMessage, returnErrors } from './messages';

// GET RECIPES
export const getRecipes = () => dispatch => {
  axios
    .get('/api/recipes/')
    .then(res => {
      dispatch({
        type: GET_RECIPES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE RECIPE
export const deleteRecipe = id => dispatch => {
  axios
    .delete(`/api/recipes/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteRecipe: 'Recipe Deleted' }));
      dispatch({
        type: DELETE_RECIPE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD RECIPE
export const addRecipe = recipe => dispatch => {
  axios
    .post('/api/recipes/', recipe)
    .then(res => {
      dispatch(createMessage({ addRecipe: 'Recipe Added' }));
      dispatch({
        type: ADD_RECIPE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
