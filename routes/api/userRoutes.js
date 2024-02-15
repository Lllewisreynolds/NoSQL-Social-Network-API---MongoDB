// Imports
const router = require("express").Router();

// Imports the set of controller functions containing the logic for handling user-related actions
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// Route Definitions:

/* Route -> http://localhost:3001/api/users - 
no dynamic parameters required to extract from URL for standard group GET or individual POST */
router.route("/").get(getUsers).post(createUser);

// Route -> http://localhost:3001/api/users/:userId
router
  .route("/:userId")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);


  /* Route -> http://localhost:3001/api/users/:userId/friends/:friendId - 
chaining multiple route call method handlers as above also for streamlining/organisational clarity */
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

// Exports
module.exports = router;