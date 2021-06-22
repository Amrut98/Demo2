const express = require('express');
const mongoose = require('mongoose');
const controlleradmin = require('./controller/controller');
const bodyParser = require('body-parser');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


app.use(bodyParser.json());

// view engine
app.set('view engine', 'ejs');

//Extended https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Railways',
            description: 'Railway Reservation System',
            contact: {
                name: "Amrut K"
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ["./controller/*.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// database connection
const dbURI = 'mongodb+srv://Amrut1998:Amrut1998@cluster0.y38he.mongodb.net/AdminFun?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
console.log('Port 3000');
controlleradmin(app);
module.exports = app;