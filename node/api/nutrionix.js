
var nutritionix = require('nutritionix')({
  appId: '74327998',
  appKey: '674d7a56170dd05aeba19fcaa0f672a3'
}, true);

// var yelp = new Yelp({
//   consumer_key: process.env.consumer_key,
//   consumer_secret: process.env.consumer_secret,
//   token: process.env.token,
//   token_secret: process.env.token_secret
// });

module.exports = {
  search: function(searchOptions) {

  var promise = nutritionix.search(searchOptions);
  return promise;
  }
};
