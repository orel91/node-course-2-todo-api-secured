const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// Todo.remove({}).then(result => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: "592017b15789a2946cbf47b4"}).then(doc => {
    console.log(doc);
});

// Todo.findByIdAndRemove("592017b15789a2946cbf47b4").then(doc => {
//     console.log(doc);
// });