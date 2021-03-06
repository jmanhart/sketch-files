import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { navOnMount } from './helpers'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import './styles.css';

const ACTIVE = { background: 'rgba(0,0,0,0.2)'}

export default class Messenger extends Component{
    render(){
        return(
            <div className="navigation-container">
                <div className="internal-links">
                    <span className="navigation-label">
                        <Link activeClassName="is-active" to="/sketch-files/sketch">
                           Sketch Files
                        </Link>
                    </span>
                    <span className="navigation-label">
                        <Link activeClassName="is-active" to="/sketch-files/about">
                            About 
                        </Link>
                    </span>
                </div>
            </div>
        )
    }
}

export const styles = Object.create({


});
