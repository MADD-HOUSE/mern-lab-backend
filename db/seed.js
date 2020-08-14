const Hero = require('./models/Hero');
const heroes = require('./seed.json');
Show.remove({})
	.then(() => {
		return Show.collection.insert(heroes);
	})
	.then(() => {
		process.exit();
	});
