import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes, getRecipe } from '../actions';
import Recipe from '../components/Recipe';
import Spinner from '../components/Spinner';
import NextPrevButtons from './NextPrevButtons';
import SelectedRecipe from './SelectedRecipe';

import './RecipesList.css';
import '../components/Spinner.css';

class RecipesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  componentDidMount() {
    this.props.fetchRecipes('Strawberries', 1);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recipe.data && Object.keys(nextProps.recipe.data).length > 0) {
      this.setState({
        showModal: true
      });
    }
  }

  itemSelected = item => {
    if (item.recipe_id) {
      this.props.getRecipe(item.recipe_id.trim());
    }
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    const { isPending, isError, data } = this.props.recipes;

    if (isError) {
      return (
        <div className="ml0 mt0 pt5 ph4-ns">
          <h1 className="tc">No recipes were found.</h1>
        </div>
      );
    } else if (isPending) {
      return (
        <div>
          <Spinner />
        </div>
      );
    }

    const lists = data.map((item, i) => {
      return (
        <article
          key={i}
          onClick={e => this.itemSelected(item, e)}
          className="recipe-list-item mb1 ma1 ba br3 b--light-silver shadow-4"
        >
          <Recipe recipeDetails={item} />
        </article>
      );
    });

    return (
      <Fragment>
        <div className="recipe-list ml0 ph4-ns flex justify-center flex-wrap">{lists}</div>
        <SelectedRecipe showModal={this.state.showModal} handleClose={this.closeModal} />
        <NextPrevButtons goToNext={this.goToNext} />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ recipes, recipe }) => {
  return { recipes, recipe };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchRecipes, getRecipe }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList);
