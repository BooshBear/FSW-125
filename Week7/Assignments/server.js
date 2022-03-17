const express = require('express');
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 9000;

// mildleware
app.use(express.json());
app.use(morgan('dev'))

const aryData = require("./dataBook/aryData")

app
    .post('/item', (req, res) => {
        const newToDo = req.body;
        newToDo._id = uuidv4();
        aryData.push(newToDo);

        res.status(201).send(`Item sent: ${newToDo.title}`);
    })
    .get('/item', (req, res, next) => {
        res.status(200).send(aryData);
    })
    .put('/item/:aryDataID', (req, res) => {
        const aryDataID = req.params.aryDataID;
        const aryDataIndex = aryData.findIndex(ary => ary._id === aryDataID);
        Object.assign(aryData[aryDataIndex], req.body);

        res.status(201).send('Resource has been updated');
    })
    .delete('/item/:aryDataID', (req, res) => {
        const aryDataID = req.params.aryDataID;
        const aryDataIndex = aryData.findIndex(ary => ary._id === aryDataID);
        aryData.splice(aryDataIndex, 1);

        res.status(200).send("Resource is deleted!");
    })
    .get('/item/:aryDataID', (req, res, next) => {
        const aryDataID = req.params.aryDataID;
        const aryDataIndex = aryData.find(ary => ary._id === aryDataID);
        
        if (!aryDataIndex) {
            const error = new Error('Item not found')
            return next(error);
        }

        res.status(200).send(aryData[aryDataIndex])
    })
    .get('/item/search/title', (req, res) => {
        const findTitle = req.query.title;
        const filtered = aryData.filter(ary => ary.title === findTitle);

        res.status(200).send(filtered);
    })

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.status(400).send({ errMsg: err.message})
});

app.listen(PORT, () => {
    console.log(`Server up and running at port: ${PORT}`)
})