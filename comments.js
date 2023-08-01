// create web server
// 1. create server
// 2. listen to server
// 3. create routes

// 1. create server
const express = require('express');
const app = express();

// 3. create routes
app.get('/', (req, res) => {
    res.send('Hi there!');
});

// 2. listen to server
app.listen(3000, () => {
    console.log('Listening');
});
