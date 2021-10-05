const express = require('express');
const app = express();
const heroes = require('../heroes.json');
const fs = require('fs')

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
    res.json(heroes);
    fs.writeFileSync('../heroes.json', JSON.stringify(heroes));
})

//per cancellare un eroe
app.delete('/heroes/:id', function (req, res) {

    var indexOfCouseInJson = heroes.map(function (item) { return item.id; }).indexOf(parseInt(req.params.id)); //find the index of :id
    if (indexOfCouseInJson === -1) {
        res.statusCode = 404;
        return res.send('Error 404: No quote found');
    }

    var result = heroes.splice(indexOfCouseInJson, 1);
    console.log('dopo delete', result)
    fs.writeFile('../heroes.json', JSON.stringify(result), function (err) {
        if (err) throw err;
        res.json(true);
    });
})

app.listen(3000, (req, res) => {
    console.log('listening to port 3000')
});



