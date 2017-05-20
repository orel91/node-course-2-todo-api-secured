const mongoose = require("mongoose");

var Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var otherTodo = new Todo({
//     text: "Coucou, tu veux voir ma bite ?"
// });

// otherTodo.save().then(doc => {
//     console.log("Saved todo", doc);
// }, e => {
//     console.log("Unable to save todo", e);
// });

module.exports = { Todo };