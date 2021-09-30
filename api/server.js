const express = require('express');
const app = express();
const heroes = require('../heroes.json');
const uuid = require ('uuid');

app.use(express.json());

app.use(express.urlencoded({extended: false}));  //handle urlencoded data
app.get('/getHeroes', (req, res)=>{
    res.status(200).json(heroes);
});


app.post('/postHero', (req, res) =>{
   
    console.log(req.body);
    const newHero ={
        id : uuid.v1(),
        name : req.body.name, 
        age : req.body.age, 
        gender: req.body.gender,
        signs: req.body.signs,
        notes: req.body.notes,
    } 
 
    heroes.push(newHero);
    console.log('server sono post dopo push', heroes);
    res.json(heroes); 
   
})

app.listen(3000, (req, res)=>{
    console.log('listening to port 3000')
});



