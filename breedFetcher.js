const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
  
    const data = JSON.parse(body);
  
    if (data.length === 0) {
      if (!breedName) {
        callback("Please insert a cat breed name after the command.", null);
        return;
      }

      callback(`The breed ${breedName} was not found. Please try again with another breed.`, null);
      return;
    }
  
    callback(null, data[0].description);
  });

};

module.exports = { fetchBreedDescription };