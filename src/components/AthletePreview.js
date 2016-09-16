// src components/AthletePreview.js

import React from 'react';

import { Link } from 'react-router';

export default class AthletePreview extends React.Component {
    render() {
        return (
            <Link to={`/athlete/${this.props.id}`}>
                <div className="athlete-preview">
                    <img src={`img/${this.props.image}`}/>
                    <h2 className="name">{this.props.name}</h2>
                    <span className="medals-count"><img src="/img/medal.png"/> {this.props.medals.length}</span>
                </div>
            </Link>
        );
    }
}

//The code is quite simple. We expect to receive a number of props that describe the attributes of the athlete we want to display like id,
//image, name and medals. Note that again we are using the Link component to create a link to the athlete page.
