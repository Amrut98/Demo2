const trains = require("../model/trains");
module.exports = function(app) {


    app.get('/', (req, res) => {
            res.render('admin')
        })
        /** 
         *  @swagger
         *  /trainlist/:
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
         *      summary: "To get the list of all trains"
         *      parameters:
         *            - in: path
         *              name: id
         *              schema:
         *                  type: string
         *              required: true
         *      responses: 
         *          '200':
         *              description: A successful response
         */
    app.get('/trainlist/:id', (req, res) => {
            trains.findById(req.params.id).then((trains) => {

                if (trains) {
                    res.json(trains);
                }
            }).catch(err => {
                if (err) {
                    res.sendStatus(404);
                }
            })

        })
        /**
         * @swagger
         * /addtrain:
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
    app.post('/addtrain', function(req, res) {
        var newTrain = {
            name: req.body.name,
            time: req.body.time,
            trainno: req.body.trainno,
            reach_time: req.body.reach_time,
            start_time: req.body.start_time,
            source: req.body.source,
            destination: req.body.destination,
            distance: req.body.distance
        }
        var trains1 = new trains(newTrain);
        trains1.save().then(() => {
            console.log('New Train added')
        }).catch((err) => {
            if (err) {
                res.sendStatus(404);
            }

        })
        res.send('A new train added');
        // console.log(req.body);
    })


    /**
     * @swagger
     * /deletetrain/{id}:
     *   delete:
     *     parameters:
     *      - in: path
     *        name: id
     *        type: string
     *     description: Train deleted
     *     responses:
     *       200:
     *         description: Returns the requested admin
     */
    app.delete('/deletetrain/:id', function(req, res) {
            trains.findByIdAndDelete(req.params.id).then(() => {
                res.send('Train deleted')

            }).catch(err => {
                if (err) {
                    res.sendStatus(404);
                }
            })

        })
        /**
         * @swagger
         * /trainlist/{id}:
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
         *           description: put train by ID
         */
    app.put('/trainlist/:id', (req, res, next) => {
        trains.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
            trains.findOne({ _id: req.params.id }).then((trains) => {
                res.json(trains);
            });
        });
    });
}