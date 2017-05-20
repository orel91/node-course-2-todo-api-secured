const mongoose = require("mongoose");

// tell Mongoose to use the javacript promises library
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
    mongoose
};