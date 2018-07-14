import React, { Component, Fragment } from 'react';
import SearchField from '../containers/SearchField';
import Footer from './Footer';
import RecipesList from '../containers/RecipesList';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="pg-title mw0 center pa3 ph5-ns flex justify-center flax-wrap">
          <SearchField />
        </header>
        <main className="f7 mw0 center pb3 ph0-m ph5-ns">
          <div className="h-100 w-100">
            <RecipesList />
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
