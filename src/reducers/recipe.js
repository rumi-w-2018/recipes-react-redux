import { GET_RECIPE_SUCCESS, GET_RECIPE_PENDING, GET_RECIPE_FAILED, CLEAR_SELECTED_RECIPE } from '../actions';

const initState = {
  isPending: true,
  isError: false,
  data: {}
};

const recipe = (state = initState, action = {}) => {
  switch (action.type) {
    case GET_RECIPE_PENDING:
      return action.payload;

    case GET_RECIPE_SUCCESS:
      return action.payload;

    case GET_RECIPE_FAILED:
      return action.payload;

    case CLEAR_SELECTED_RECIPE:
      return action.payload;

    default:
      return state;
  }
};

export default recipe;
