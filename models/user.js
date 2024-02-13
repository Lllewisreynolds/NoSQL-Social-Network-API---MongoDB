// Import objects from Mongoose Library
const { Schema, model } = require("mongoose");

// User schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    //   Validated using regex
      match: [/.+@.+\..+/, "Must match a valid email address!"],
    },
    thoughts: [
      {
        // Establishing relationships with other models 
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Getter function increases friend count in User object when friends are added by user

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Creates User model with userSchema
const User = model("user", userSchema);

// Exports
module.exports = User;