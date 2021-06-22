const express = require('express');
const mongoose = require('mongoose');
const controllerguest = require('./controllers/controller');

const app = express();

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://Amrut1998:Amrut1998@cluster0.y38he.mongodb.net/Trains?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(3002))
    .catch((err) => console.log(err));
controllerguest(app);