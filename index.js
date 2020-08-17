const express = require('express');
const app = express();
const cors = require('cors');

const heroesController = require('./controllers/heroes');

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
	res.redirect('/heroes');
});
app.use('/heroes', heroesController);
app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
	console.log(` PORT: ${app.get('port')} `);
});
