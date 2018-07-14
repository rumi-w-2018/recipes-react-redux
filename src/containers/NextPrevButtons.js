import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes, clearSelectedRecipe } from '../actions';
import './NextPrevButtons.css';

class NextPrevButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevBtnDisabled: true
    };
  }

  componentDidMount() {
    this.setState({
      prevBtnDisabled: this.props.recipes.currentPage <= 1
    });
  }

  goToNext = () => {
    let page = this.props.recipes.currentPage;
    page++;
    this.props.clearSelectedRecipe();
    this.props.fetchRecipes(this.props.recipes.keyword, page);
  };

  goBack = () => {
    let page = this.props.recipes.currentPage;
    if (page > 1) {
      page--;
      this.props.clearSelectedRecipe();
      this.props.fetchRecipes(this.props.recipes.keyword, page);
    }
  };

  render() {
    let prevBtnClass = 'page f6 no-underline br3 shadow-3 ph3 pv2 mb2 dib mr2 silver';
    const nextBtnClass = 'page f6 no-underline br3 shadow-3 ph3 pv2 mb2 dib silver show';
    prevBtnClass = this.state.prevBtnDisabled ? `${prevBtnClass} disabled` : `${prevBtnClass} show`;
    //nextBtnClass = this.state.nextBtnDisabled ? `${nextBtnClass} disabled` : `${nextBtnClass} show`;

    /*
      Important: Be careful not to call 'this.goToNext()'.  This will fire when it's rendered.
      It should be onClick={this.goToNext}
    */

    return (
      <div className="flex justify-center pt3">
        <button
          type="button"
          className={prevBtnClass}
          value="Previous"
          disabled={this.state.prevBtnDisabled}
          onClick={this.goBack}
        >
          Previous
        </button>
        <h3 className="ml2 mr2">Page: {this.props.recipes.currentPage}</h3>
        <button type="button" className={nextBtnClass} value="Next" onClick={this.goToNext}>
          Next
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ recipes }) => {
  return { recipes };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchRecipes, clearSelectedRecipe }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextPrevButtons);
