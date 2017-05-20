const mongoose = require("mongoose");

var User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

// var user = new User({
//     email: "aurelien@infinitix.io"
// });

// user.save().then(user => {
//     console.log("Saved user", user);
// }, e => {
//     console.log("Unable to save user", e);
// });

module.exports = { User };