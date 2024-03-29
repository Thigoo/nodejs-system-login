//importing modules
const express = require('express');
const userController = require('../controllers/userController');
const {signUp, login} = userController;
const userAuth = require('../middlewares/userAuth');

const router = express.Router();

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', userAuth.saveUser, signUp);

//login route
router.post('/login', login);

module.exports = router;