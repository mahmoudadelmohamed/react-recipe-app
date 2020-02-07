import React, { Component } from 'react';

class Search extends Component {

  render() {
    const { handleSubmit, handleChange, search } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h1 className="text-slanted text-capitalize">
              search recipes with <strong className="text-orange">food2Fork</strong>
            </h1>
            <form className="mt-4">
              <label htmlFor="search" className="text-capitalize">Type Recipes Saperated by comma</label>
              <div className="input-group">
              <input type="text"
               name="search"
               className="form-control"
               placeholder="search for recipes"
               value={ search }
               onChange={ handleChange }
               />

               <div className="input-group-append">
                <button
                  className="input-group-text
                  bg-primary text-white"
                  type="submit"
                  onClick={ handleSubmit }
                   >
                  <i className="fas fa-search"></i>
                </button>
               </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default Search;
