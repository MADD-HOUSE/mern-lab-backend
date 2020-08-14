// const mongoose = require('./connection');

const Hero = require('../models/Hero');
const heroes = require('./seed.json');

Hero.remove({})
	.then(() => {
		return Hero.collection.insert(heroes);
	})
	.then(() => {
		process.exit();
	});
