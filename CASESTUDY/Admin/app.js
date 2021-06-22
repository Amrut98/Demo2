const express = require('express');
const mongoose = require('mongoose');
const controlleradmin = require('./controller/controller');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

// view engine
app.set('view engine', 'ejs');



// database connection
const dbURI = 'mongodb+srv://Amrut1998:Amrut1998@cluster0.y38he.mongodb.net/AdminFun?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
console.log('Port 3000');
controlleradmin(app);