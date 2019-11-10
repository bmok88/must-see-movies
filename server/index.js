import express from 'express';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import fs from 'fs';
// import App from '../src/App';
const apiKey = '349985f5f59407dc326ef387df713eb2';

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync('dist/index.html').toString();

const htmlParts = html.split('React App');

const app = express();

app.use('/dist', express.static('dist'));
// app.use((req, res) => {
//     res.write(htmlParts[0]);
//     const reactMarkup = (
//         <ServerLocation url={req.url}>
//             <App />
//         </ServerLocation>
//     );
//     const stream = renderToNodeStream(reactMarkup);

//     stream.pipe(res, { end: false });
//     stream.on('end', () => {
//         res.write(htmlParts[1]);
//         res.end();
//     });
// });
// "proxy": "http://localhost:3000",
app.get('/api/customers', (req, res) => {
	console.log('hey');
	res.JSON([{ id: 1 }]);
});

app.listen(PORT, () => {
	console.log('Listening on port ' + PORT);
});
