const express = require('express');
const app = express();
const heroes = require('../heroes.json')

app.get('/getHeroes', (req, res)=>{
    res.status(200).json(heroes);
});

app.listen(3000, (req, res)=>{
    console.log('listening to port 3000')
});



