// src/components/IndexPage.js

import React from 'react';
import AthletePreview from './AthletePreview';
import athletes from '../data/athletes';

export default class IndexPage extends React.Component{
    render() {
        return (
            <div className="home">
                <div className="athletes-selector">
                    {athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)}
                </div>
            </div>
        );
    }
}

/*Note that in this component we are using the AthletePreview component we created previously.
// Basically we are iterating over all the available athletes from our data module and creating an AthletePreview component for each of them.
// The AthletePreview component is data agnostic, so we need to pass all the information about the current athlete as props using the
// JSX spread operator. */
