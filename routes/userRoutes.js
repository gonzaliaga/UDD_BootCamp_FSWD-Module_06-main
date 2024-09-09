const express = require('express');
const { createUser, login, verifyToken, updateUser, getAllUsers } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const userRoutes = express.Router();

userRoutes.post('/register', createUser);
userRoutes.post('/login', login);
userRoutes.get('/verifytoken', protect, verifyToken);
userRoutes.get('/users', protect, getAllUsers);
userRoutes.put('/update', protect, updateUser);


module.exports = userRoutes;