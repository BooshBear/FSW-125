const express = require('express');
const intakeRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let recItem = [
    { name: 'Plastic can', desc: 'Used in packaging almost anything', recyclable: true, quantity: 67008345356, PPUnit: 2, _id: uuidv4() },
    { name: 'Pizza', desc: 'The most delicious food in the world', recyclable: false, quantity: 34981209, PPUnit: 13, _id: uuidv4() },
    { name: 'Coffee Cups', desc: 'Cups that hold the greatest of coffees', recyclable: true, quantity: 345236, PPUnit: 4, _id: uuidv4() },
    { name: 'Cars', desc: 'transportation devices', recyclable: true, quantity: 659854357, PPUnit: 700, _id: uuidv4() },
];

intakeRouter.post('/', (req, res) => {
    const newItem = req.body
    newItem._id = uuidv4()
    recItem.push(newItem)

    console.log(recItem)
    res.send(`Item sent: ${newItem.name}`)
});

intakeRouter.get('/', (req, res) => {
    res.send(recItem)
});

module.exports = intakeRouter;