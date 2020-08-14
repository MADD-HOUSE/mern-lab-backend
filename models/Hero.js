const mongoose = require('../db/connection');

const HeroSchema = new mongoose.Schema({
	id: Number,
	name: String,
	strength: Number,
	durability: Number,
	power: Number,
	publisher: String,
	image: String,
});
const Hero = mongoose.model('Hero', HeroSchema);

module.exports = Hero;
