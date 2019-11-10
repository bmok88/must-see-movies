import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
// import React from 'react';
// import { renderToNodeStream } from 'react-dom/server';
// import { ServerLocation } from '@reach/router';
// import fs from 'fs';
// import App from '../src/App';
const apiKey = '349985f5f59407dc326ef387df713eb2';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/dist', express.static('dist'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

const makeGetRequest = async endPoint => {
    const url = `https://api.themoviedb.org/3/movie${endPoint}?api_key=${apiKey}`;
    const response = await axios.get(url);

    return response.data;
};

app.get('/popular', (req, res) => {
    makeGetRequest(req.url)
        .then(result => res.send(result))
        .catch(error => res.status(error.response.status).send(error));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
