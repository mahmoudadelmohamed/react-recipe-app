import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Recipe extends Component {

  render() {
    const { image_url, title, source_url, publisher, recipe_id } = this.props.recipe;
    console.log(title);
    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card" style={{height: '100%'}}>
          <img
          src={ image_url }
          alt="recipe"
          style={{height: '14rem'}}
          className="img-card-top"
          />
          <div className="card-body text-capatlize">
            <h6>{ title }</h6>
            <h6 className="text-warning text-slanted">provided by{ publisher }
            </h6>
          </div>
             <div className="card-footer">
              <Link href={source_url} target="_blank" className="btn btn-success text-capitalize">
                recipe_url
              </Link>
             </div>
        </div>
      </div>
    );
  }

}

export default Recipe;
