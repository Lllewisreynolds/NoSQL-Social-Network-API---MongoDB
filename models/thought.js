// Imports objects from Mongoose library
const { Schema, model } = require("mongoose");
// Necessary for defining access and relationship to Reaction sub-doc - hierarchical structure 
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

/* Hierarchical relationship with Reactions sub-doc used for getter function - 
increases reaction count in Thought model object when reactions are added */
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Creates Thought model with thoughtSchema - facilitating access to CRUD functionality
const Thought = model("thought", thoughtSchema);

// Exports
module.exports = Thought;
