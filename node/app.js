var dotenv = require('dotenv');
dotenv.config(); // read in .env file and parse it

var express = require('express');
var app = express()
var Sequelize = require('sequelize');
var cors = require('cors'); // Cross Origin Resource Sharing
var bodyParser = require('body-parser');

var NutritionixClient = require('nutritionix');
var nutritionix = new NutritionixClient({
    appId: '74327998',
    appKey: '674d7a56170dd05aeba19fcaa0f672a3'
    // debug: true, // defaults to false
});

// var DB_NAME = process.env.DB_NAME;
// var DB_USER = process.env.DB_USER;
// var DB_PASSWORD = process.env.DB_PASSWORD;
// var sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
//   dialect: 'mysql',
//   host: process.env.DB_HOST
// });

app.use(cors());
app.use(bodyParser());

// app.get('/results/:s/:l?', function(request, response) {
//   yelp.search({ term: request.params.s, location: request.params.l || 'San Francisco'}).then(function(results) {
//     response.json(results);
//   }, function(err) {
//     response.json(err);
//   });
// });

app.get('/results', function(request, response){

  nutritionix.search.standard({
    q:'salad',
    // use these for paging
    limit: 10,
    offset: 0,
    // controls the basic nutrient returned in search
    search_nutrient: 'calories'
  }).then(successHandler, errorHandler)
    .catch(uncaughtExceptionHandler);
});

app.listen(3000);
