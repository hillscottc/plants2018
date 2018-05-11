import should from 'should' // eslint-disable-line no-unused-vars
import { Plant } from '../orm/plant/schema'

// Skipping this test for now. Connection problem
describe.skip('Plants Schema', function () { // eslint-disable-line no-undef
  it('get plant by id', function (done) { // eslint-disable-line no-undef
    const id = 7
    Plant.forge({id})
      .fetch()
      .then((plant) => {
        const {id, common_name} = plant.attributes // eslint-disable-line camelcase
        id.should.equal(id)
        common_name.should.equal('okra')
        done()
      })
      .catch((err) => {
        console.error(err)
      })
  })
})
