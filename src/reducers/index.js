import { combineReducers } from 'redux';
import recipesReducer from './recipes';
import recipeReducer from './recipe';

const combinedReducers = combineReducers({
  recipes: recipesReducer,
  recipe: recipeReducer
});

export default combinedReducers;
