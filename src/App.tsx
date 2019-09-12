import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Nav/Navbar';
import Recipes from './components/Recipes';
import Recipe from './components/Recipe';


const App: React.SFC = () => {

  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path='/' component={Recipes} />
          <Route exact path='/:id' component={Recipe} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
