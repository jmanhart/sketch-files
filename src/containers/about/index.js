import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Video from 'react-html5video';
import './../../styles/styles.css';
import {
    studyOnMount,
 } from './../../lib/helpers'

import './styles.css'

export default class About extends Component{

    render(){
        return(
            <div className="cobb-case-study">
                <div className="animated__wrapper" >
                    <h1> this is a page</h1>
                </div>
            </div>
        )
    }
}

