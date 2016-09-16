// src/server.js

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';

// initialize the server and configure support for ejs templates

const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//define the folder that will be used for static assets

app.use(Express.static(path.join(__dirname, 'static')));

// universal routing and rendering

app.get('*', (req, res) => {
    match(
        { routes, location: req.url },
        (err, redirectLocation, renderProps) => {
            if(err){
                return res.status(500).send(err.message);
            }

            if(redirectLocation) {
                return res.redirect(302, redirectionLocation.pathname + redirectionLocation.search);
            }

            let markup;

            if(renderProps){
                // if the current route matches, we have renderProps
                markup = renderToString(<RouterContext {...renderProps}/>);

            } else{
                // otherwise we should render the 404 page
                markup = renderToString(<NotFoundPage/>);

                res.status(404);
            }

            // render the index tempalte with the embedded React markup

            return res.render('index', { markup });
        }
    );
});

//start the server

const port = process.envPORT || 3000;
const env = process.env.NODE_ENV || 'production';

server.listen(port, err => {
    if(err){
        return console.log(err);
    }

    console.info(`Server running on http://localhost:${port} [${env}]`);
})
