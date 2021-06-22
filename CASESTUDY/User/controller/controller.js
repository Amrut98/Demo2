const trains = require("../model/trains");
module.exports = function(app) {


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
}