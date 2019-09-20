import { combineReducers } from 'redux';
import recipes from './recipes';
import errors from './errors';
import messages from './messages';

export default combineReducers({
  recipes,
  errors,
  messages
});
