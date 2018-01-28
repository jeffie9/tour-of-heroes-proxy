const express = require('express')
const app = express()
const router = express.Router();
const morgan = require('morgan');

const heroes = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

router.get('/api/heroes', function(req, res, next){
	console.log('get heroes');
	res.json(heroes);
});


app.use(morgan('dev'));
app.use(router);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
