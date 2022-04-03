const dotenv = require('dotenv');
const express = require('express');
const app = express();

// Securing the password using dotenv 
dotenv.config({path:'./config.env'});
require('./db/conn');

const PORT = process.env.PORT;

// Middlewares -> User cannot access about section without sigining in, so the server 
// redirects user to the signin page instead of going to the about page

const middleware = (req, res, next)=> {
    console.log(`Hello, middleware!`);
    next();
}


// Routing to varios pages
app.get('/', (req, res)=>{
    res.send(`Hello World from server`);
});

app.get('/about', middleware,(req, res)=>{
    res.send(`About section of the webApp`);
});


app.get('/contact', (req, res)=>{
    res.send(`Contact section of the webApp`);
});

app.get('/signin', (req, res)=>{
    res.send(`Signin section of the webApp`);
});


app.get('/signup', (req, res)=>{
    res.send(`Signup section of the webApp`);
});


// Making the server to listen to the port 3000
app.listen(3000, ()=>{
    console.log(`Listening from ${PORT} port`);
});