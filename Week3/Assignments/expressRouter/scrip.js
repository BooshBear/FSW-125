const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

//data
const intakeRouter = require('./routes/intakeRouter')

const PORT = `3000`;

// middleware
app.use(express.json());

// routes
app.use('/recItem', intakeRouter)

//listen
app.listen(PORT, () => {
    console.log(`App is running in port: ${PORT}`)
});