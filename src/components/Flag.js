// src/components/Flag.js

import React from 'react';

const data = {
    'cu': {
        'name': 'Cuba',
        'icon': 'flag-cu.png',
        'alt': 'Cuban Flag',
    },
    'fr': {
        'name': 'France',
        'icon': 'flag-fr.png',
        'alt': 'French Flag',
    },
    'jp': {
        'name': 'Japan',
        'icon': 'flag-fr.png',
        'alt': 'Japanese Flag',
    },
    'nl': {
        'name': 'Netherlands',
        'icon': 'flag-nl.png',
        'alt': 'Netherlands Flag',
    },
    'uz': {
        'name': 'Uzbekistan',
        'icon': 'flag-uz.png',
        'alt': 'Uzbekistan Flag',
    }
};

export default class Flag extends React.Component {
    render() {
        const name = data[this.props.code].name;
        const icon = data[this.props.code].icon;
        const alt  = data[this.props.code].alt;

        return (
            <span className='flag'>
                <img className='icon' title={name} src={`/img/${icon}`} alt={alt}/>
                {this.props.showName && <span className="name"> {name} </span>}
            </span>
        );
    }
}


/* As you might have noticed this component uses a small array of countries as data source.
Again this makes sense only because we need a very small data set which, for the sake of this demo app, is not going to change.
In a real application with a larger and more complex data set you might want to use an API or a different mechanism to connect the data to the component.
In this component it's also important to notice that we are using two different props, code and showName.
The first one is mandatory and must be passed to the component to select which flag will be shown among the ones supported.
The showName props is instead optional and if set to a truthy value the component will also display the name of the country just after the flag.

If you want to build a more refined reusable component for a real world app you might also want to add to it props validation and defaults,
but we are going to skip this step here as this is not the goal for the app we want to build.

 */
