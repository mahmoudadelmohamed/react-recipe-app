import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import SingleRecipe from './Pages/SingleRecipe';
import Default from './Pages/Default';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
     <Router>
        <main>
        <Navbar />
          <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/recipes" exact component={ Recipes } />
          <Route path="/singlerecipe/:id" component={ SingleRecipe } />
          <Route component={ Default } />
          </Switch>
        </main>
     </Router>
    </div>
  );
}

export default App;
