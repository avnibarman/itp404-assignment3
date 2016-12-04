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
  var nutritionix = require('nutritionix')({
    appId: '74327998',
    appKey: '674d7a56170dd05aeba19fcaa0f672a3'
  }, false);

  nutritionix.v1_1.search.standard({
    phrase: 'mcdonalds',
    results: '0:1'
}, function (err, results){
    console.log("error");
});

});

app.listen(3000);
