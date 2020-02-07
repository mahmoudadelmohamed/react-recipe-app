import React, { Component } from 'react';
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';
import { recipeData } from '../data/tempList'
class Recipes extends Component {
  state = {
    recipes: recipeData,
    search: '',
  }
handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
}
handleSubmit = (e) => {
  e.preventDefault();
}
  render() {
    console.log(this.state);
    return (
      <>
        <Search search={ this.state.search }
        handleChange={ this.handleChange }
        handleSubmit={ this.handleSubmit }
        />
        <RecipeList recipes={ this.state.recipes }/>
      </>
    );
  }

}

export default Recipes;
