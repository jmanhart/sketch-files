import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';

import Home from './containers/home';
import Sketch from './containers/sketch';
import About from './containers/about';

const routes = (
  <Route path="/sketch-files" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/sketch-files/sketch" mapMenuTitle="Example" component={Sketch} />
    <Route path="/sketch-files/about" mapMenuTitle="Example" component={About} />
  </Route>
);

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
