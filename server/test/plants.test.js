import should from 'should' // eslint-disable-line no-unused-vars
import supertest from 'supertest'
import querystring from 'querystring'

// The app server must be running for these tests.
const server = supertest.agent('http://localhost:3010')

describe('Plants API', function () { // eslint-disable-line no-undef
  describe('plants', function () { // eslint-disable-line no-undef
    it('GET, no args', function (done) { // eslint-disable-line no-undef
      server
        .get('/api/plants')
        .end(function (err, res) {
          if (err) { throw err }
          res.statusCode.should.equal(200)
          res.body.data.length.should.equal(10)
          res.body.pagination.rowCount.should.equal(90986)
          done()
        })
    })

    it('GET query', function (done) { // eslint-disable-line no-undef
      const payload = {family: 'Malva', common: 'musk'}
      server
        .get('/api/plants/?' + querystring.stringify(payload))
        .expect('Content-type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) console.error(err)
          res.body.data.length.should.equal(2)
          done()
        })
    })

    it('POST no args', function (done) { // eslint-disable-line no-undef
      const payload = {}
      server
        .post('/api/plants/')
        .send(payload)
        .expect('Content-type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) console.error(err)
          const {data, pagination} = res.body
          data.length.should.equal(10)
          pagination.rowCount.should.equal(90986)
          done()
        })
    })

    it('POST search symbol', function (done) { // eslint-disable-line no-undef
      const payload = {symbol: 'ABELM'}

      server
        .post('/api/plants/')
        .send(payload)
        .expect('Content-type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) console.error(err)
          const {data} = res.body
          const firstPlant = data[0]
          firstPlant.symbol.should.equal('ABELM')
          done()
        })
    })

    it('POST musk okra query ', function (done) { // eslint-disable-line no-undef
      const payload = {family: 'Malva', common: 'musk'}

      server
        .post('/api/plants/')
        .send(payload)
        .expect('Content-type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) console.error(err)
          res.body.data.length.should.equal(2)
          done()
        })
    })

  })

})
