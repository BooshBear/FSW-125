const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

const PORT = 3000;

app.use(express.json());

// fake data
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
    .post('/', (req, res) => {
        const newToDo = req.body;
        newToDo._id = uuidv4();
        todoArr.push(newToDo);

        res.send(`Item sent: ${newToDo.name}`);
    })
    .get('/', (req, res) => {
        res.send(todoArr);
    })
    .put('/:toDoId', (req, res) => {
        const toDoId = req.params.toDoId;
        const toDoIndex = todoArr.findIndex(toDo => toDo._id === toDoId);
        Object.assign(todoArr[toDoIndex], req.body);

        res.send('Resource has been updated');
    })
    .delete('/:toDoId', (req, res) => {
        const toDoId = req.params.toDoId;
        const toDoIndex = todoArr.findIndex(toDo => toDo._id === toDoId);
        todoArr.splice(toDoIndex, 1);

        res.send("Resource is deleted!");
    })
    .get('/:toDoId', (req, res) => {
        const toDoId = req.params.toDoId;
        const toDoIndex = todoArr.findIndex(toDo => toDo._id === toDoId);
        
        res.send(todoArr[toDoIndex])
    })

app.listen(PORT, () => {
    console.log(`App is running in port: ${PORT}`)
})