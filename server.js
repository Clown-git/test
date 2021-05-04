// Variables
const express = require('express');
const colors = require('colors');

// App
const app = express();

// Routes

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/login', (req, res) => {
    res.sendFile(`${__dirname}/public/login/index.html`);
});

// Listening
let port = 3333;
let host = 'localhost';

app.listen(port, () => {
    console.log(colors.blue(`Listening on ${host}:${port}`));
});