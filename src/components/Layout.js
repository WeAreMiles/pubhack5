// src/components/Layout.js

import React from 'react';

import { Link } from 'react-router';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <header>
                    <Link to="/">
                        <img className="logo" src="/img/logo-judo-heroes.png"/>
                    </Link>
                </header>

                <div classNname="app-content">{this.props.children}</div>
                <footer>
                    <p>
                        This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
                    </p>
                </footer>
            </div>
        );
    }
}


//The component is pretty simple and we should understand how it works just by looking at the code.
//There's though a very interesting prop that we are using here, the children prop.
//This is a special property that React provides to every component and allows to nest components one inside another.
//We are going to see in the routing section how the React Router will make sure to nest the components into the Layout component.
