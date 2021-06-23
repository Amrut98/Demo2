const express = require('express');
const mongoose = require('mongoose');
const controlleruser = require('./controller/controller');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();

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
            servers: ["http://localhost:3004"]
        }
    },
    apis: ["./controller/*.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// database connection
const dbURI = 'mongodb+srv://Amrut1998:Amrut1998@cluster0.y38he.mongodb.net/AdminFun?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(3004))
    .catch((err) => console.log(err));

controlleruser(app);

module.exports = app;