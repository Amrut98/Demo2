let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('express');
let server = require('../app');

chai.use(chaiHttp);

chai.should();


describe('Tasks API', () => {
    //GET
    describe('GET /trainlist', () => {
            it("it should get all the tasks", (done) => {
                chai.request(server)
                    .get('/trainlist')
                    .end((err, response) => {
                        response.body.length.should.be.eq(5);
                        response.body.should.be.a('array');
                        done();
                    })
            })
        })
        //GET by id
    describe('GET /trainlist/:id', () => {
        it("it should get by id", (done) => {
            const taskId = "60d1af165987ec63d05dfab2"
            chai.request(server)
                .get('/trainlist' + taskId)
                .end((err, response) => {
                    response.body.should.be.a('object');
                    response.body.should.be.eq("Konark Express");
                    done();
                })
        })
    })

})