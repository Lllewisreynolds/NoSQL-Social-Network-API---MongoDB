// Imports
const {
  User,
  Thought
} = require("../models");

// Get all thoughts from database
const thoughtController = {
  async getThoughts(req, res) {
     try {
        const thoughts = await Thought.find();
        return res.status(200).json(thoughts);
     } catch (err) {
        console.log(err);
        return res.status(500).json(err);
     }
  },

  // Get single thought by id
  async getThought(req, res) {
     try {
        const thought = await Thought.findOne({
           _id: req.params.thoughtId
        });

        if (!thought) {
           return res.status(404).json({
              message: "No thought with that ID can be found!"
           });
        }

        return res.status(200).json(thought);
     } catch (err) {
        console.log(err);
        return res.status(500).json(err);
     }
  },

  // Create new thought and associate with user
  async createThought(req, res) {
     try {
        const thought = await Thought.create(req.body);

        const user = await User.findByIdAndUpdate(
           req.body.userId, {
              $addToSet: {
                 thoughts: thought._id
              }
           }, {
              runValidators: true,
              new: true
           }
        );

        return res.status(200).json({
           thought,
           user
        });
     } catch (err) {
        console.log(err);
        return res.status(500).json(err);
     }
  },

  // Update existing thought by its id
  async updateThought(req, res) {
     try {
        const thought = await Thought.findOneAndUpdate({
           _id: req.params.thoughtId
        }, {
           $set: req.body
        }, {
           runValidators: true,
           new: true
        });

        if (!thought) {
           return res.status(404).json({
              message: "No thought with that ID can be found!"
           });
        }

        return res.status(200).json(thought);
     } catch (err) {
        console.log(err);
        return res.status(500).json(err);
     }
  },

  // Delete a thought by its id
  async deleteThought(req, res) {
     try {
        const thought = await Thought.findOneAndDelete({
           _id: req.params.thoughtId,
        });

        if (!thought) {
           return res.status(404).json({
              message: "No thought with that ID can be found!"
           });
        }

        return res.status(200).json({
           // Associated logic for reaction deletion not yet defined
           message: "Thought & its associated reactions have been successfully deleted.",
        });
     } catch (err) {
        console.log(err);
        return res.status(500).json(err);
     }
  },

  // Add reaction
  async addReaction(req, res) {
     try {
        const reaction = await Thought.findOneAndUpdate({
           _id: req.params.thoughtId
        }, {
           $addToSet: {
              reactions: req.body
           }
        }, {
           runValidators: true
        });

        if (!reaction) {
           return res.status(404).json({
              message: "No thought with that ID"
           });
        }

        return res.status(200).json(reaction);
     } catch (err) {
        console.log(err);
        return res.status(500).json(err);
     }
  },

  // Delete reaction
  async deleteReaction(req, res) {
     try {
        const reaction = await Thought.findOneAndUpdate({
           _id: req.params.thoughtId
        }, {
           $pull: {
              reactions: {
                 _id: req.params.reactionId
              }
           }
        }, {
           runValidators: true,
           new: true
        });

        if (!reaction) {
           return res
              .status(404)
              .json({
                 message: "Check thought and reaction ID"
              });
        }

        return res.status(200).json(reaction);
     } catch (err) {
        console.log(err);
        return res.status(500).json(err);
     }
  },
};

// Exports

module.exports = thoughtController;