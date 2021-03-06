import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import './styles/styles.css';

import Home from './containers/home'

import Navigation from './components/navigation'
import './components/navigation/styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

export default class App extends Component{
    render(){
        return(
            <div className="wrapper">
                <Navigation />
                <div id="content">
                    {this.props.children}
                </div>
                <div className="footer-container">
                    <span className="footer-sign-off">Say Hi! 
                        <span className="footer-email">manhartjohn@gmail.com</span>
                    </span>
                    
                </div>
            </div>
        )
    }
}
App.propTypes = propTypes;
