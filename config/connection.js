// Imports Mongoose objects
const { connect, connection } = require("mongoose");

// Connects Mongoose and MongoDB
connect('mongodb://127.0.0.1:27017/socialDB');

// Exports connection object
module.exports = connection;