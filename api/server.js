const express = require('express');
const app = express();
const heroes = require('../public/heroes.json');
const fs = require('fs')
var path = require('path');

app.use(express.json());

app.use(express.urlencoded({ extended: false })); 

app.get('/heroes', (req, res) => {
    res.status(200).json(heroes);
});

//per aggiungere un nuovo eroe
app.post('/heroes', (req, res) => {

    console.log(req.body);
    const newHero = {
        id: Date.now(),
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        signs: req.body.signs,
        notes: req.body.notes,
    }

    heroes.push(newHero);
    console.log('server sono post dopo push', heroes);
    fs.writeFileSync(path.join(__dirname, '../public/heroes.json'), JSON.stringify(heroes));
    res.json(heroes);
})

//per modificare un singolo eroe 
app.put('/heroes/:id', function (req, res){

    //trovo l'elemento che mi serve e lo salvo in index
    var index = heroes.map(function (item) { return item.id; }).indexOf(parseInt(req.params.id)); //find the index of :id
    if (index === -1) {
        res.statusCode = 404;
        return res.send('Error 404: No quote found');
    }

    //salvo l'elemento e faccio il confronto con l'elemento ricevuto dalla richiesta
    var element = heroes[index];   

    //faccio il confronto e aggiorno
   if ((parseInt(element.id)) === (parseInt(req.params.id)) ){
       heroes[index].id = parseInt(req.params.id);
        if (element.name !== req.body.name){
            heroes[index].name = req.body.name;
        }
        if (element.age !== req.body.age){
           heroes[index].age = req.body.age;
        
        }
        if (element.gender !== req.body.gender){
           heroes[index].gender = req.body.gender;
   
        }
        if (element.signs !== req.body.signs){
            heroes[index].signs = req.body.signs
           
        }
        if (element.notes !== req.body.notes){
            heroes[index].notes = req.body.notes;      
        }
    }

    fs.writeFileSync(path.join(__dirname, '../public/heroes.json'), JSON.stringify(heroes));
res.json('done');
   
})

//per cancellare un eroe
app.delete('/heroes/:id', function (req, res) {

    var index = heroes.map(function (item) { return item.id; }).indexOf(parseInt(req.params.id)); //find the index of :id
    if (index === -1) {
        res.statusCode = 404;
        return res.send('Error 404: No quote found');
    }
    

    heroes.splice(index, 1);

    fs.writeFileSync(path.join(__dirname, '../public/heroes.json'), JSON.stringify(heroes));
    res.json('done');
})

app.listen(3000, (req, res) => {
    console.log('listening to port 3000')
});



