import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
// import React from 'react';
// import { renderToNodeStream } from 'react-dom/server';
// import { ServerLocation } from '@reach/router';
// import fs from 'fs';
// import App from '../src/App';
const api = 'https://api.themoviedb.org/3';
const apiKey = '?api_key=349985f5f59407dc326ef387df713eb2';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/dist', express.static('dist'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

const makeGetRequest = (url, res) => {
    axios
        .get(url)
        .then(result => res.send(result.data))
        .catch(error => res.status(error.response.status).send(error));
};

app.get('/movie/popular', (req, res) => {
    const url = `${api}${req.url}${apiKey}`;

    makeGetRequest(url, res);
});

app.get('/search/movie/:movie', (req, res) => {
    const url = `${api}/search/movie${apiKey}&query=${req.params.movie}`;

    makeGetRequest(url, res);
});

app.get('/movie/details/:movieId', (req, res) => {
    const url = `${api}/movie/${req.params.movieId}${apiKey}`;

    makeGetRequest(url, res);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
