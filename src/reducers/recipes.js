import { FETCH_RECIPES_PENDING, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILED } from '../actions';

const initState = {
  isPending: true,
  isError: false,
  currentPage: 0,
  keyword: '',
  data: []
};

const recipes = (state = initState, action = {}) => {
  switch (action.type) {
    case FETCH_RECIPES_PENDING:
      return action.payload;

    case FETCH_RECIPES_SUCCESS:
      return action.payload;

    case FETCH_RECIPES_FAILED:
      return action.payload;

    default:
      return state;
  }
};

export default recipes;
