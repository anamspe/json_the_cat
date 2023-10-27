const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      console.error(error);
      return null;
    }
  
    const data = JSON.parse(body);
  
    if (data.length === 0) {
      console.log(`The breed ${breedName} was not found. Please try again with another breed.`);
      return;
    }
  
    console.log(data[0].description);
  });

};


module.exports = { fetchBreedDescription };