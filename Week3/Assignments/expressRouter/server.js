const express = require('express');
const app = express();

//data
const intakeRouter = require('./routes/intakeRoute');

const PORT = `3000`;

// middleware
app.use(express.json());

// routes
app.use('/recycledItems', intakeRouter);

//listen
app.listen(PORT, () => {
    console.log(`App is running in port: ${PORT}`)
});