// const http = require('http');

const express = require('express');

const app = express();

app.use((req, res , next) =>{
    console.log('In the middleware!');
    next();   // Alow the request to continue to the next middleware in line
});
app.use((req, res , next) =>{
    // console.log('In another middleware!');
    console.log('In another middleware!')
    res.send('<h1>Hello from Express!</h1>');
});
console.log(routes.someText);
// const server = http.createServer(app);

// server.listen(4002)

app.listen(4002);
