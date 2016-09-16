// src/components/AppRoutes.js

import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

export default class AppRoutes extends React.Component {
    render() {
        return (
            <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0,0)}/>
        );
    }
}

//Basically we only need to import the Router component and add it inside our render function.
//The router receives our routes mapping in the router prop.
//We also configure the history prop to specify that we want to use the HTML5 browser history for the routing (as an alternative you could also use hashHistory).

//Finally we also added an onUpdate callback to reset the scrolling of the window to the top everytime a link is clicked.
