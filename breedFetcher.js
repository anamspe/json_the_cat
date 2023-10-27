const request = require('request');

const args = process.argv;
const argsArray = args.slice(2);
const breed = argsArray[0];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log(`The breed ${breed} was not found. Please try again with another breed.`);
    return;
  }

  console.log(data[0].description);
});