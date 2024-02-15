// Imports
const router = require("express").Router();

// Imports the set of controller functions containing the logic for handling thought-related actions
const {
  getThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// Route Definitions:

/* Route -> http://localhost:3001/api/thoughts - 
no dynamic parameters required to extract from URL for standard group GET or individual POST */
router.route("/").get(getThoughts).post(createThought);

// Route -> http://localhost:3001/api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

// Route -> http://localhost:3001/api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// Route -> http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

// Exports
module.exports = router;