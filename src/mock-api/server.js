var express = require('express');
var app     = express();
//var router  = express.Router();
var fs      = require('fs');


app.listen(3000, function() {
    console.log("Listening on 3000");
});

app.get('/api/heroes', function(req, res, next) {
	res.type('application/json').sendFile(__dirname + '/heroes.json');
});

app.get('/api/heroes/:id', function(req, res, next) {
  const id = +req.params.id;
	var heroes = JSON.parse(fs.readFileSync(__dirname + '/heroes.json'));
	var hero = heroes.find(hero => hero.id === id);
	if (hero) {
		res.json(hero);
	} else {
		res.status(404);
	}
});

app.put('/api/heroes', function(req, res, next) {
	console.log('put', req);
	res.status(200);
});

app.post('/api/heroes', function(req, res, next) {
	console.log('post', req);
	res.status(200);
});

app.delete('/api/heroes/:id', function(req, res, next) {
	console.log('delete', req);
	res.status(200);
});
