var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app')
chai.use(chaiHttp);

var assert = require('assert');

describe('API', function () {
  describe('GET /tasks', () => {
    it('should list two Tasks after seeding', (done) => {
      chai.request(server)
          .get('/tasks')
          .end((err, res) => {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('array');
              res.body.length.should.have.equal(2);
              done();
          });
    });

    it('should have a valid Task after seeding', (done) => {
        chai.request(server)
            .get('/tasks')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('ID');
                res.body[0].should.have.property('Summary');
                res.body[0].should.have.property('SubmitDate');
                res.body[0].should.have.property('PerformedByID');
                res.body[0].Summary.should.equal('First Task Created');
                res.body[0].PerformedByID.should.equal('4be6ac58-f3e0-11ed-8d73-b3ef9725f24f');
                res.body[0].ID.should.equal('4be6ac58-f3e0-11ed-8d73-b3ef9725f25b');
                done();
            });
      });
  });

  describe('POST /tasks', () => {
    it('should post a Task successfully', (done) => {
      chai.request(server)
          .post('/tasks')
          .set('content-type', 'application/json; charset=utf-8')
          .send({
            "PerformedByID": "4be6ac58-f3e0-11ed-8d73-b3ef9725f24f",
            "Summary": "Third Task Created"
          })
          .end((err, res) => {
              res.should.have.status(200);
              res.should.be.json;
              done();
          });
    });
  });
});
