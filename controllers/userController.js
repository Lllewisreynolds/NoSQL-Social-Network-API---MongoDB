// Imports
const { User, Thought } = require("../models");

// Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find()

        .populate({ path: "thoughts", select: "-__v" })
        .populate({ path: "friends", select: "-__v" });

      return res.status(200).json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };

  // Get single user
  async getUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })

        .populate({ path: "thoughts", select: "-__v" })
        .populate({ path: "friends", select: "-__v" });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };