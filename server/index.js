import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

const port = process.env.PORT || 3010

app.set('port', port);

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/hello', (req, res) => {
    res.status(200).json({
        express: "Hello From the api"
    })
});

app.listen(port, () => {
    console.log(`Server at: http://localhost:${port}/`); // eslint-disable-line no-console
});




// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3010
//
// app.get('/', (req, res) => res.send('Hello World!'))
//
// app.get('/api/hello', (req, res) => {
//     res.send({ express: 'Hello From the api!' });
// });
//
// // needs path to a dist dir. I should copy from build to dist, maybe? Or serve build?
// // app.use(express.static(__dirname +'./../../'));
//
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
