const {ObjectID} = require("mongodb");
const jwt = require("jsonwebtoken");

const {Todo} = require("./../../models/todo");
const {User} = require("./../../models/user");

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: "aurelien@infinitix.io",
    password: "userOnePass",
    tokens: [{
        access: "auth",
        token: jwt.sign({_id: userOneId.toHexString(), access: "auth"}, "abc123").toString()
    }]
}, {
    _id: userTwoId,
    email: "contact@infinitix.io",
    password: "userTwoPass"
}];

const todos = [{
    _id: new ObjectID(),
    text: "First test todo"
}, {
    _id: new ObjectID(),
    text: "Second text todo",
    completed: true,
    completedAt: 333
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done())
    .catch(e => done(e));
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        const userOne = new User(users[0]).save();
        const userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(() => done())
    .catch(e => done(e));
};

module.exports = {todos, populateTodos, users, populateUsers};