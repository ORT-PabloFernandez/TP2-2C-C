const express = require('express');
const chalk = require('chalk');

const app = express();
const PORT = 3000;

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

//http://locahost:3000/
app.use('/', (req, res, next) =>{
    console.log('paso por acà');
    next();
});



// http://locahost:3000/
app.get('/', (req, res) =>{
    res.send('Hola mundo Express');
});

app.use('/api/inventors', (req, res, next) =>{
    if(req.query.token === 'abcd123'){
        next();
    }
    else{
        res.status(401).send('Codigo de token invalido');
    }
});

// http://localhost:3000/api/inventors
app.get('/api/inventors', (req, res) =>{
    res.json(inventors);
});

app.listen(PORT, () => { console.log(chalk.bgGreen.yellow('Servidor disponible'))});

