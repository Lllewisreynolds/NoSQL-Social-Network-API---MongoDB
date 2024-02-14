// Imports
const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

// Seed data
const user =
  {
    username: "Richard",
    email: "richardhendricks@piedpiper.com",
    thought: [],
};

console.log(connection);

// Connects to server
connection.once("open", async () => {
  console.log("connected");

  // Drop existing students
  await User.deleteOne({});

  // Adds seed data to database
  await User.collection.insertOne(user);

  console.table(user);
  console.info("Seeding completed!");
  process.exit(0);
});