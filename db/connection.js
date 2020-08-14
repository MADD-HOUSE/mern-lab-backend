const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/heroes', {
	useNewUrlParser: true,
});
mongoose.Promise = Promise;
module.exports = mongoose;
