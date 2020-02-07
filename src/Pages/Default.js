import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
class Defualt extends Component {

  render() {
    return (
      <Header title="404" styleClass="defualt-banner">
        <h2 className="text-light text-uppercase"> Your are in the wrong place</h2>
        <Link to="/" className="text-uppercase btn btn-secondary mt-5 btn-lg">Back to home</Link>
      </Header>
    );
  }

}

export default Defualt;
