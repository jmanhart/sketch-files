import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';

import Home from './containers/home';
import Sketch from './containers/sketch';
import About from './containers/about';

// Need to add the /interactions/ to have it ready for production
// This will not be an issue cause still deving dingus

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/sketch" mapMenuTitle="Example" component={Sketch} />
    <Route path="/about" mapMenuTitle="Example" component={About} />
  </Route>
);

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
