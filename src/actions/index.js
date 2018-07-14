import 'whatwg-fetch';
// eslint-disable-next-line
import { searchUrl, getUrl } from '../config/config';

export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_PENDING = 'FETCH_RECIPES_PENDING';
export const FETCH_RECIPES_FAILED = 'FETCH_RECIPES_FAILED';
export const GET_RECIPE_SUCCESS = 'GET_RECIPE_SUCCESS';
export const GET_RECIPE_PENDING = 'GET_RECIPE_PENDING';
export const GET_RECIPE_FAILED = 'GET_RECIPE_FAILED';
export const CLEAR_SELECTED_RECIPE = 'CLEAR_SELECTED_RECIPE';

const setRecipeSuccess = data => ({
  type: GET_RECIPE_SUCCESS,
  payload: {
    isPending: false,
    isError: false,
    data: data.recipe
  }
});

const setRecipePending = () => ({
  type: GET_RECIPE_PENDING,
  payload: {
    isPending: true,
    isError: false,
    data: {}
  }
});

const setRecipeFailed = () => ({
  type: GET_RECIPE_FAILED,
  payload: {
    isPending: false,
    isError: true,
    data: {}
  }
});

export const clearSelectedRecipe = () => ({
  type: CLEAR_SELECTED_RECIPE,
  payload: {
    isPending: false,
    isError: false,
    data: {}
  }
});

export const getRecipe = rId => dispatch => {
  dispatch(setRecipePending());
  const url = `https://cors-anywhere.herokuapp.com/${getUrl}${rId}`;

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      //Error
      dispatch(setRecipeFailed());
    })
    .then(json => {
      dispatch(setRecipeSuccess(json));
    })
    .catch(error => {
      console.log('error');
      dispatch(setRecipeFailed());
    });
};

const setRecipesPending = (keyword, currentPage) => ({
  type: FETCH_RECIPES_PENDING,
  payload: {
    isPending: true,
    isError: false,
    count: 0,
    currentPage,
    keyword,
    data: []
  }
});

const setRecipesSuccess = (data, keyword, currentPage) => ({
  type: FETCH_RECIPES_SUCCESS,
  payload: {
    isPending: false,
    isError: false,
    count: data.count,
    currentPage,
    keyword,
    data: data.recipes
  }
});

const setRecipesFailed = (keyword, currentPage) => ({
  type: FETCH_RECIPES_FAILED,
  payload: {
    isPending: false,
    isError: true,
    count: 0,
    currentPage,
    keyword,
    data: []
  }
});

export const fetchRecipes = (keyword, page) => dispatch => {
  const url = `https://cors-anywhere.herokuapp.com/${searchUrl}${keyword}&page=${page}`;
  // console.log('here', url);

  dispatch(setRecipesPending(keyword, page));
  fetch(url)
    .then(response => {
      if (response.ok) {
        // console.log('res', response.json());
        return response.json();
      }
      // error
      dispatch(setRecipesFailed(keyword, page));
    })
    .then(json => {
      if (json.count === 0) {
        console.log('error');
        dispatch(setRecipesFailed(keyword, page));
      } else {
        dispatch(setRecipesSuccess(json, keyword, page));
      }
    })
    .catch(error => {
      console.log('Error', error);
      dispatch(setRecipesFailed(keyword, page));
    });
};
