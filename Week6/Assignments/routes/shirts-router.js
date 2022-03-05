const e = require('express');
const express = require('express');
const shirtsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const Shirts = [
    {
        name: 'T-shirt',
        type: 'men',
        price: 6,
        _id: uuidv4()
    },
    {
        name: 'V-neck shirt',
        type: 'men',
        price: 5,
        _id: uuidv4()
    },
    {
        name: 'polo shirt',
        type: 'men',
        price: 8,
        _id: uuidv4()
    },
    {
        name: 'T-shirt',
        type: 'female',
        price: 6,
        _id: uuidv4()
    },
    {
        name: 'V-neck shirt',
        type: 'female',
        price: 5,
        _id: uuidv4()
    }
]

shirtsRouter
    .get('/', (req, res) => {
        let search = req.query;
        let name = Shirts.filter(shirt => shirt.name === search.name);
        let type = Shirts.filter(shirt => shirt.type === search.type);
        let price = Shirts.filter(shirt => shirt.price === search.price);
        const returnOne = (name, type, price) => {
            if (name != false) {
                return name;
            } else if (type != false) {
                return type;
            } else if (price != false) {
                return price;
            }
        }
        
        res.send(returnOne(name, type, price))
    })

module.exports = shirtsRouter;