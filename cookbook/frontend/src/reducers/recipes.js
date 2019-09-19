import { GET_RECIPES } from '../actions/types.js';

const initialState = {
  recipes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload
      };
    default:
      return state;
  }
}
