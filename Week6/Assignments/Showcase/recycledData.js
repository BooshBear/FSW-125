const express = require('express')
const { v4: uuidv4 } = require('uuid');
var morgan = require('morgan')

const app = express();
const PORT = 9000;

app.use(express.json());
app.use(morgan('dev'));

let todoArr = [
    {
        name: "Clean Dishes",
        description: "wash all the dishes",
        _id: uuidv4()
    },
    {
        name: "Clean House",
        description: "clean from top to bottom",
        _id: uuidv4()
    },
    {
        name: "Clean Car",
        description: "just take out the junk",
        _id: uuidv4()
    }
];

app
    .post('/item', (req, res) => {
        const newToDo = req.body;
        newToDo._id = uuidv4();
        todoArr.push(newToDo);

        res.send(`Item sent: ${newToDo.name}`);
    })
    .get('/item', (req, res) => {
        res.send(todoArr);
    })
    .put('/item/:toDoId', (req, res) => {
        const toDoId = req.params.toDoId;
        const toDoIndex = todoArr.findIndex(toDo => toDo._id === toDoId);
        Object.assign(todoArr[toDoIndex], req.body);

        res.send('Resource has been updated');
    })
    .delete('/item/:toDoId', (req, res) => {
        const toDoId = req.params.toDoId;
        const toDoIndex = todoArr.findIndex(toDo => toDo._id === toDoId);
        todoArr.splice(toDoIndex, 1);

        res.send("Resource is deleted!");
    })
    .get('/item/:toDoId', (req, res) => {
        const toDoId = req.params.toDoId;
        const toDoIndex = todoArr.findIndex(toDo => toDo._id === toDoId);
        
        res.send(todoArr[toDoIndex])
    })

app.listen(PORT, () => {
    console.log(`app has started in port: ${PORT}`)
})