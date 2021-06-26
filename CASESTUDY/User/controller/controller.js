const trains = require("../model/trains");
const userdata = require("../model/userdata");
const bodyParser = require('body-parser');
const axios = require('axios');
module.exports = function(app) {

    app.use(bodyParser.json());
    app.get('/', (req, res) => {
        res.render('admin')
    })


    /** 
     *  @swagger
     *  /trainlist:
     *  get:
     *      summary: "To get the list of all trains"
     *      responses: 
     *          '200':
     *              description: A successful response
     */
    app.get('/trainlist', function(req, res) {

        trains.find().then((trains) => {
            res.json(trains)
        }).catch(err => {
            if (err) {
                throw err;
            }
        })

    })

    /** 
     *  @swagger
     *  /trainlist/{id}:
     *  get:
     *      summary:  "To get the list requested train"
     *      parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: string
     *              required: true
     *              description: The train id.
     *      responses: 
     *          '200':
     *              description: A successful response
     *              content:
     *                      application/json:
     *                      schema:
     *                            type: object
     */
    app.get('/trainlist/:id', (req, res) => {
        trains.findById(req.params.id, (err, data) => {
            if (err) {
                res.status(404).json({ success: false, error: err });
            } else {
                res.status(200).json(data);
            }
        })
    })


    /** 
     *  @swagger
     *  /userdata:
     *  get:
     *      summary: "To get the list of all users"
     *      responses: 
     *          '200':
     *              description: A successful response
     */
    app.get('/userdata', function(req, res) {

        userdata.find().then((userdata) => {
            res.json(userdata)
        }).catch(err => {
            if (err) {
                throw err;
            }
        })

    })

    /**
     * @swagger
     * /adduserdata:
     *   post:
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object                      
     *     responses:
     *       200:
     *         description: Returns the requested user
     */
    app.post('/adduserdata', function(req, res) {
        var newUser = {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Address: req.body.Address,
            PhoneNo: req.body.PhoneNo
        }
        var userdata1 = new userdata(newUser);
        userdata1.save().then(() => {
            console.log('New User added')
        }).catch((err) => {
            if (err) {
                res.sendStatus(404);
            }

        })
        res.send('A new User added');
        // console.log(req.body);
    })

    /**
     * @swagger
     * /userdata/{id}:
     *   put:
     *     parameters:
     *       - in: path
     *         name: id
     *         type: string
     *     requestBody:
     *       content:
     *         application/json: 
     *             schema:
     *                type: object
     *     responses:
     *         200:
     *           description: put user by ID
     */
    app.put('/userdata/:id', (req, res, next) => {
        userdata.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
            userdata.findOne({ _id: req.params.id }).then((userdata) => {
                res.json(userdata);
            });
        });
    });

    app.get("/payments", (req, res) => {
        res.redirect("http://localhost:3003/payments/");
    })



}