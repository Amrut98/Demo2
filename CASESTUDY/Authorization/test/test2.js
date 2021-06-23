let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('express');
let server = require('../app');

chai.use(chaiHttp);

chai.should();

//GET
describe('Tasks API', () => {

    describe('GET /signup', () => {
        it("it should GET all the users", (done) => {
            chai.request(server)
                .get('/signup')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    done();
                })
        })
        it("it should NOT GET all the users", (done) => {
            chai.request(server)
                .get('/signups')
                .end((err, response) => {
                    if (err) done(err);
                    response.should.have.status(404);
                    done();
                })
        })

    })


    //GET by id
    // describe('GET /signup/:id', () => {
    //     it("it should get by id", (done) => {
    //         const taskId = "60d1af165987ec63d05dfab2"
    //         chai.request(server)
    //             .get('/signup/' + taskId)
    //             .end((err, response) => {
    //                 response.should.have.status(200);
    //                 response.body.should.be.a('object');
    //                 response.body.should.have.property('_id');
    //                 done();
    //             })
    //     })

    //     it("it should NOT GET by id", (done) => {
    //         const taskId = "123"
    //         chai.request(server)
    //             .get('/trainlist/' + taskId)
    //             .end((err, response) => {
    //                 if (err) done(err);
    //                 response.should.have.status(404);
    //                 done();
    //             })
    //     })
    // })

    //POST
    describe('POST /signup', () => {
        it("it should POST new task", (done) => {
            const task = {
                email: "cja@gmail.com",
                password: "987654321"
            };
            chai.request(server)
                .post('/signup')
                .send(task)
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    done();
                })
        })
        it("it should NOT POST new task without parameters", (done) => {
            const task = {
                email: "ijk@gmail.com",
            };
            chai.request(server)
                .post('/signupa')
                .send(task)
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                })
        })

    })

    //GET LOGIN
    describe('GET /login', () => {
        it("it should GET all the registered users", (done) => {
            chai.request(server)
                .get('/login')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    done();
                })
        })
        it("it should NOT GET all the users", (done) => {
            chai.request(server)
                .get('/logins')
                .end((err, response) => {
                    if (err) done(err);
                    response.should.have.status(404);
                    done();
                })
        })

    })

    //POST LOGIN
    describe('POST /login', () => {
        it("it should POST new task", (done) => {
            const task = {
                email: "ghja@gmail.com",
                password: "987654321"
            };
            chai.request(server)
                .post('/login')
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    done();
                })
        })
        it("it should NOT POST new task without parameters", (done) => {
            const task = {
                email: "ijk@gmail.com",
            };
            chai.request(server)
                .post('/logins')
                .send(task)
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                })
        })

    })
})