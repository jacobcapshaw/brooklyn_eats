var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var mongoUri = 'mongodb://localhost/recipe-api';
var db = mongoose.connection;
mongoose.connect(mongoUri);

var port = process.env.PORT || 8080;
var router = express.Router();
var Recipe = require('./app/models/recipe');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);
app.use(express.static('app'))



router.use(function (req, res, next) {
  console.log('Something is happening.', port);
  next();
});

router.get('/', function (req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

app.listen(port);
console.log('Magic happens on port ' + port);

router.route('/recipes')
  .post(function (req, res) {
    var recipe = new Recipe(req);
    Recipe.create(req.body, function (err) {
      if (err) {
        res.send(err);
      }
      res.send(recipe);
    });
    console.log(recipe);
  })
  .get(function (req, res) {
    Recipe.find({}, function (err, recipes) {
      if (err) res.send(err);
      res.json(recipes);
    })
  })


router.route('/recipes/:recipe_id')
  .get(function (req, res) {
    Recipe.findById(req.params.recipe_id, function (err, recipe) {
      console.log('recipe', recipe);
      if (err) {
        res.send(err);
      }
      res.json(recipe);
    });
  });

router.route('/recipes/:recipe_id')
  .put(function (req, res) {
    Recipe.update({ '_id': req.params.recipe_id }, req.body,
        function (err, numberAffected) {
            if (err) return console.log(err);
            console.log('Updated comments', numberAffected);
            return res.sendStatus(202);
        })
  });
