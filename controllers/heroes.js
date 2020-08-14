const express = require('express');
const router = express.Router();

const Hero = require('../models/Hero');
router.get('/', (req, res) => {
	Hero.find({}).then((hero) => res.json(hero));
});
module.exports = router;
