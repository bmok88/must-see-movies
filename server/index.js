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

const makeGetRequest = async (endPoint, queryParam = '') => {
    console.log(endPoint, queryParam);
    const url = `https://api.themoviedb.org/3${endPoint}?api_key=${apiKey}${queryParam}`;
    console.log(url);
    const response = await axios.get(url);

    return response.data;
};

app.get('/movie/popular', (req, res) => {
    const url = `${api}${req.url}${apiKey}`;

    axios
        .get(url)
        .then(result => res.send(result.data))
        .catch(error => res.status(error.response.status).send(error));
});

app.get('/search/movie/:movie', (req, res) => {
    const url = `${api}/search/movie${apiKey}&query=${req.params.movie}`;

    axios
        .get(url)
        .then(result => res.send(result.data))
        .catch(error => res.status(error.response.status).send(error));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
