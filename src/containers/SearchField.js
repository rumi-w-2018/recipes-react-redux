import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes, clearSelectedRecipe } from '../actions';
import './SearchField.css';

class SearchField extends Component {
  constructor() {
    super();
    this.texInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      if (this.textInput) {
        this.textInput.focus();
        const keyword = this.textInput.value.toLowerCase();
        this.props.clearSelectedRecipe();
        this.props.fetchRecipes(keyword, 1);
      }
    };
  }

  componentDidMount() {
    // auto focus on input field
    // this.focusTextInput();
  }

  render() {
    return (
      // <div className="">
      <div className="w-75">
        <span className="title mr4">Recipes</span>
        <input ref={this.setTextInputRef} type="search" className="ph4 pv2 w-60 br3" placeholder="Search Recipe" />
        <input
          type="button"
          onClick={this.focusTextInput}
          className="search f5 grow no-underline br-pill ph3 pv2 mb2 dib shadow-3 white"
          value="Search"
        />
        {/* </div> */}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchRecipes, clearSelectedRecipe }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(SearchField);
