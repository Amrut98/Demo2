let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('express');
let server = require('../app');

chai.use(chaiHttp);

chai.should();


//GET
describe('Tasks API', () => {

    describe('GET /trainlist', () => {
        it("it should GET all the tasks", (done) => {
            chai.request(server)
                .get('/trainlist')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                })
        })
        it("it should NOT GET all the tasks", (done) => {
            chai.request(server)
                .get('/trainlists')
                .end((err, response) => {
                    if (err) done(err);
                    response.should.have.status(404);
                    done();
                })
        })

    })


    //GET by id
    describe('GET /trainlist/:id', () => {
        it("it should get by id", (done) => {
            const taskId = "60d1d43414722d6bb855e728"
            chai.request(server)
                .get('/trainlist/' + taskId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('_id');
                    response.body.should.have.property('name');
                    response.body.should.have.property('time');
                    response.body.should.have.property('trainno');
                    response.body.should.have.property('reach_time');
                    response.body.should.have.property('start_time');
                    response.body.should.have.property('source');
                    response.body.should.have.property('destination');
                    response.body.should.have.property('distance');
                    response.body.should.have.property('_id').eq('60d1d43414722d6bb855e728');
                    done();
                })
        })

        it("it should NOT GET by id", (done) => {
            const taskId = "123"
            chai.request(server)
                .get('/trainlist/' + taskId)
                .end((err, response) => {
                    if (err) done(err);
                    response.should.have.status(404);
                    done();
                })
        })
    })

    //USER GET
    describe('GET /userdata', () => {
        it("it should GET all the users", (done) => {
            chai.request(server)
                .get('/userdata')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                })
        })
        it("it should NOT GET all the users", (done) => {
            chai.request(server)
                .get('/userdatas')
                .end((err, response) => {
                    if (err) done(err);
                    response.should.have.status(404);
                    done();
                })
        })

    })


    //PUT USER
    describe('PUT /updateuser', () => {
        it("it should PUT a task", (done) => {
            const taskId = "60d570f252a6b9456c40ce00";
            const task = {
                LastName: "Pawar"
            };
            chai.request(server)
                .put('/userdata/' + taskId)
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('LastName');
                    done();
                })
        })

        it("it should NOT PUT new task without  parameters", (done) => {
            const task = {};
            chai.request(server)
                .put('/userdatas')
                .send(task)
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                })
        })
    })

    //POST USER
    describe('POST /adduser', () => {
        it("it should POST new user", (done) => {
            const task = {
                FirstName: "John",
                LastName: "Cena",
                PhoneNo: 7972256005
            };
            chai.request(server)
                .post('/adduserdata')
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    done();
                })
        })
        it("it should NOT POST new task without parameters", (done) => {
            const task = {};
            chai.request(server)
                .post('/adduserdatas')
                .send(task)
                .end((err, response) => {

                    response.should.have.status(404);
                    done();
                })
        })

    })

})