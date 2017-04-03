import React, { PropTypes, Component } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import './styles.css';

import Sketch from '../sketch/index.js';

const data = [
    {
        "title": "Text Editor",
        "subText": "This is a snippet of copy that goes with above",
        "color":"rgba(0,0,0,0.5)",
    },
	{
		"title": "ListView ",
        "subText": "This is a snippet of copy that ",
        "color":"rgba(0,0,0,0.4)",
	},
	{
		"title": "List Title",
        "subText": "This is a snippet of ",
        "color":"rgba(0,0,0,0.3)",
	},
]

export default class Home extends Component{
    render(){
        return(
            <div>
                <div className="block-container" style={{backgroundColor:'rgba(0,0,0,0)'}}>
                    <div className="block-content">
                        <h2>Rubber Duck</h2>
                    </div>
                </div>
            </div>
        )
    }
}


