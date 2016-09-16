// src/app-client.js

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

window.onload = () => {
    ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
}

//The only thing we do here is to import our master AppRoutes component and render it using the ReactDOM.render method.
//The React app will be living inside our #main DOM element.
