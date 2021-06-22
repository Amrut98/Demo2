const express = require('express');
const mongoose = require('mongoose');
const controlleruser = require('./controllers/controller');

const app = express();

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://Amrut1998:Amrut1998@cluster0.y38he.mongodb.net/AdminFun?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(3004))
    .catch((err) => console.log(err));

controlleruser(app);