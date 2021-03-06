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
            const taskId = "60d1af165987ec63d05dfab2"
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
                    response.body.should.have.property('_id').eq('60d1af165987ec63d05dfab2');
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

    //POST
    describe('POST /addtrain', () => {
        it("it should POST new task", (done) => {
            const task = {
                name: "Kokan Kanya",
                time: "10 Hrs",
                trainno: "512377",
                reach_time: "10:00 AM",
                start_time: "12:00 AM",
                source: "Pune",
                destination: "Hydrabad",
                distance: "800 KM"
            };
            chai.request(server)
                .post('/addtrain')
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    done();
                })
        })
        it("it should NOT POST new task without parameters", (done) => {
            const task = {
                time: "11 Hrs"
            };
            chai.request(server)
                .post('/addtrains')
                .send(task)
                .end((err, response) => {

                    response.should.have.status(404);
                    done();
                })
        })

    })

    //PUT
    describe('PUT /updatetrain', () => {
        it("it should PUT a task", (done) => {
            const taskId = "60d1af165987ec63d05dfab2";
            const task = {
                name: "Himalayn Express",
                time: "10 Hrs",
                trainno: "512377",
                reach_time: "10:00 AM",
                start_time: "12:00 AM",
                source: "Pune",
                destination: "Hydrabad",
                distance: "800 KM"
            };
            chai.request(server)
                .put('/trainlist/' + taskId)
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('name');
                    done();
                })
        })

        it("it should NOT PUT new task without 3 parameters", (done) => {
            const task = {
                time: "10 Hrs",
            };
            chai.request(server)
                .put('/trainlists')
                .send(task)
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                })
        })
    })

    //DELETE
    describe('DELETE /deletetrain/:id', () => {
        it("it should DELETE a task", (done) => {
            const taskId = "60d1af165987ec63d05dfab2";
            chai.request(server)
                .delete('/deletetrain/' + taskId)
                .end((err, response) => {
                    response.should.have.status(200);
                    done();
                })
        })

        it("it should NOT Delete new task without 3 parameters", (done) => {
            const taskId = "60d1af165987ec63d05dfab2";
            chai.request(server)
                .delete('/deletetrains')
                .end((err, response) => {
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


    //DELETE USER
    describe('DELETE userinfo', () => {
        it("it should DELETE a task", (done) => {
            const taskId = "60d5730869068a1d707fe947";
            chai.request(server)
                .delete('/userdata/' + taskId)
                .end((err, response) => {
                    response.should.have.status(200);
                    done();
                })
        })

        it("it should NOT Delete new task without 3 parameters", (done) => {
            const taskId = "60d570f252a6b9456c40ce00";
            chai.request(server)
                .delete('/usersdata')
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                })
        })
    })

})