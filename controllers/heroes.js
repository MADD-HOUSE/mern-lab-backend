const express = require('express');
const router = express.Router();

const Hero = require('../models/Hero');

router.get('/', (req, res) => {
	Hero.find({}).then((hero) => res.json(hero));
});

router.get('/:id', (req, res) => {
	Hero.find({ _id: req.params.id }).then((hero) => {
		res.json(hero);
	});
});

router.post('/', (req, res) => {
	Hero.create(req.body).then((hero) => res.json(hero));
});

router.put('/:id', (req, res) => {
	Hero.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	}).then((hero) => {
		res.json(hero);
	});
});

router.delete('/:id', (req, res) => {
	Hero.findOneAndDelete({ _id: req.params.id }).then((deletedHero) => {
		res.json(deletedHero);
	});
});

module.exports = router;
