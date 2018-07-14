// Modal
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SelectedRecipe.css';

class SelectedRecipe extends Component {
  render() {
    const { showModal, recipe, handleClose } = this.props;
    const modalClass = showModal ? 'modal display-block' : 'modal display-none';

    let listIngredients;
    if (Array.isArray(recipe.ingredients)) {
      listIngredients = recipe.ingredients.map((item, i) => {
        return (
          <li key={i} className="f6">
            {item}
          </li>
        );
      });
    }

    return (
      <div className={modalClass}>
        <section className="modal-main">
          <div className="center h-100 pa4 ph5-ns br3">
            <button onClick={handleClose} className="close fr f6 pv2 ph4 br3 bg-lightest-blue shadow-2">
              Close
            </button>
            <h1 className="tc">{recipe.title}</h1>
            <div className="details flex flex-wrap">
              <img src={recipe.image_url} alt="recipe" className="w-50-ns" />
              <div className="ml3 w-50-ns">
                <h3>Ingredients:</h3>
                {listIngredients}
                <ul />
              </div>
              <div className="ph2 w-100">
                <h3>Directions:</h3>
                <a href={recipe.source_url} target="_blank" className="f6">
                  {recipe.source_url}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ recipe }) => {
  return { recipe: recipe.data };
};

export default connect(mapStateToProps)(SelectedRecipe);
