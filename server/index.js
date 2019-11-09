import express from 'express';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import fs from 'fs';
import App from '../src/App';
console.log(App);

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync('dist/index.html').toString();

const htmlParts = html.split('React App');

const app = express();

app.use('/dist', express.static('dist'));
app.use((req, res) => {
    res.write(htmlParts[0]);
    const reactMarkup = (
        <ServerLocation url={req.url}>
            <App />
        </ServerLocation>
    );
    const stream = renderToNodeStream(reactMarkup);

    stream.pipe(res, { end: false });
    stream.on('end', () => {
        res.write(htmlParts[1]);
        res.end();
    });
});

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
