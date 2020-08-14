const express = require('express');
const app = express();

const heroesController = require('./controllers/heroes');

app.use(express.json());
app.get('/', (req, res) => {
	res.redirect('/heroes');
});
app.use('/heroes', heroesController);
app.listen(3000, () => console.log('app is running'));
