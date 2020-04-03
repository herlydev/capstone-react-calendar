import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import Lead from "./pages/lead";
import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";
import SlugDetail from "./pages/slug-details";
import Icons from "../../src/helpers/icons"




export default class App extends Component {
  
  render() {
    return (
      <div className='app'>
        <Router>
          <NavigationContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lead" component={Lead} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/slugdetail/:slug" component={SlugDetail} />
            <Route component={NoMatch} />
          </Switch>
          
        </Router>
        
      </div>
    );
  }
}