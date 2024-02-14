// Imports Mongoose objects
const { connect, connection } = require("mongoose");

// Connects Mongoose and MongoDB
connect('mongodb://localhost:27017/socialDB');

// Exports connection object
module.exports = connection;