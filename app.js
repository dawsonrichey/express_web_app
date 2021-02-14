const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.locals.title = 'Home Page';
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.locals.title = 'Card Page';
    // res.render('card', { prompt: "sdfsd" });
    res.render('card');
});

app.get('/staff', (req, res) => {
    res.locals.title = 'Staff Page';
    res.render('staff');
});

app.get('/hello', (req, res) => {
    res.send('<h1>Hello, JavaScript Developer!</h1>');
});


app.listen(3070, () => {
    console.log('The application is running on localhost:3070!')
});