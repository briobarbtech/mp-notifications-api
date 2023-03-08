const { urlencoded } = require('express');
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

// Setting 
app.set('port', process.env.PORT)

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({"response": "connected"});
})
app.use('/notification', require('./routes/index'))

// Starting server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})