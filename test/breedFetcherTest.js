// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns a message asking to insert breed name if no breed was passed as argument', (done) => {
    fetchBreedDescription('', (err, desc) => {
      const expectedErr = "Please insert a cat breed name after the command.";

      assert.equal(expectedErr, err);

      assert.equal(desc, null);

      done();
    });
  });

  it("returns a message asking to try another breed if breed wasn't found", (done) => {
    fetchBreedDescription('joy', (err, desc) => {
      const expectedErr = `The breed joy was not found. Please try again with another breed.`;

      assert.equal(expectedErr, err);

      assert.equal(desc, null);

      done();
    });
  });
});