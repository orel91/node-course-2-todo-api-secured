const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");


// const id = "591e02ffa50471002e9b610a1";

// if(!ObjectID.isValid(id)){
//     console.log("ID not valid");
// }

// Todo.find({
//     _id: id
// }).then(todos => {
//     console.log("Todos", todos);
// });

// Todo.findOne({
//     _id: id
// }).then(todo => {
//     console.log("Todo", todo);
// });

// Todo.findById(id).then(todo => {
//     if(!todo){
//         return console.log("Id not found");
//     }
//     console.log("Todo by Id", todo);
// }).catch(e => console.log(e));

const id = "591df0ec8340ce201fa67d45";

User.findById(id).then(user => {
    if(!user){
        return console.log("Id not found");
    }
    console.log("User by Id", user);
}).catch(e => console.log(e));