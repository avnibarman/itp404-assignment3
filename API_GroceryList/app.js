var express = require('express')
var app = express()
var Sequelize = require('sequelize');
var cors = require('cors');
var bodyParser = require('body-parser');

var DB_NAME = 'abarman_favorites';
var DB_USER = 'abarman';
var DB_PASSWORD = '6163957274';

var sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: 'vps.uscitp.com'
  // _socket :'/var/lib/mysql/mysql.sock'

});

var Favorite = sequelize.define('favorite', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  item: {
    type: Sequelize.STRING
  }
},{
  timestamps: false

});

app.use(cors());
app.use(bodyParser());

app.post('/api/favorites', function (request, response) {

  //response.json(request.body);

  var favorite = Favorite.build({
    item: request.body.item
  });

  favorite.save().then(function(favorite){
    response.json(favorite);
  });

});

app.get('/api/favorites', function (request, response) {
  var promise = Favorite.findAll();

  promise.then(function(favorites)  {
    response.json({
      data: favorites
    });
  });

})

app.delete('/api/favorites', function (request, response) {
  // var promise = Favorite.findAll();
  // promise.then(function(favorites){
  //   response.json({
  //     data:favorites
  //   })
  // }

  // Favorite.findById(request.params.id).then(function(item){
  //
  //     item.destroy().then(function(item){
  //       response.json(item);
  //     });
  //
  //   });
  Favorite.destroy({where: {}}).then(function(item){
         response.json(item);
       });

  });

app.listen(3000)
