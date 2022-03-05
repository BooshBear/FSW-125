const express = require('express')
const app = express();
var morgan = require('morgan');
const shirtsRouter = require('./routes/shirts-router')

const PORT = `3000`;

app.use(express.json());
app.use(morgan('dev'));

app.use('/shirts', shirtsRouter)

app.listen(PORT, () => {
    console.log(`server up at PORT: ${PORT}`)
})