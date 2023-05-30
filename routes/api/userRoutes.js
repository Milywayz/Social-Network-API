const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
  } = require('../../controllers/userController');
  
  //localhost:3001/api/users/
  router.route('/').get(getUsers).post(createUser);
  
  router.route('/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser)

  router.route('/:userId/friends')
  .post(addFriend)

  router.route('/:userId/friends/:friendId')
  .delete(removeFriend)
  
  module.exports = router;